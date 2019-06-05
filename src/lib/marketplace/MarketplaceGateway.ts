import * as querystring from 'querystring';
import { HttpClient } from '../http/HttpClient';
import { VendorRequest, VendorResponse } from './models/Vendor';
import { VendorsResponse } from './models/Vendors';

export class MarketplaceGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(vendor: VendorRequest): Promise<number> {
        const path = '/services/2/vendors';
        const body = vendor;
        const response = await this.http.post(path, body);

        try {
            return parseInt(response.headers.get('location').split('/').pop()); // Get the vendorId
        } catch {
            throw new Error('Could not parse vendorId from response.');
        }
    }

    public async update(vendorId: number, updates: VendorRequest): Promise<null> {
        const path = `/services/2/vendors/${vendorId}`;
        const body = updates;
        return this.http.put(path, body);
    }

    public async get(vendorId: number): Promise<VendorResponse> {
        const path = `/services/2/vendors/${vendorId}`;
        return this.http.get(path);
    }

    public async getAll(parameters?: MarketplaceGetAllQueryParams): Promise<VendorsResponse> {
        const queryParams = querystring.stringify(parameters);
        const path = `/services/2/vendors?${queryParams}`;
        return this.http.get(path);
    }
}

interface MarketplaceGetAllQueryParams {
    after?: number;
    before?: number;
    gettotal?: boolean;
    pagesize?: number;
}
