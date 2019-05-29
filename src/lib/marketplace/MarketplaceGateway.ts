import * as querystring from 'querystring';
import HttpClient from '../http/HttpClient';
import VendorRequest from './models/vendor/VendorRequest';
import VendorResponse from './models/vendor/VendorResponse';
import VendorsResponse from './models/vendors/VendorsResponse';

export default class MarketplaceGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(vendor: VendorRequest): Promise<VendorResponse> {
        const path = `/services/2/vendors`;
        const body = vendor;
        return await this.http.post(path, body);
    }

    public async update(vendorId: string, updates: VendorRequest): Promise<VendorResponse> {
        const path = `/services/2/vendors/${vendorId}`;
        const body = updates;
        return await this.http.put(path, body);
    }

    public async get(vendorId: string): Promise<VendorResponse> {
        const path = `/services/2/vendors/${vendorId}`;
        return await this.http.put(path);
    }

    public async getAll(parameters?: MarketplaceGetAllQueryParams): Promise<VendorsResponse> {
        const queryParams = querystring.stringify(parameters);
        const path = `/services/2/vendors?${queryParams}`;
        return await this.http.get(path);
    }
}

interface MarketplaceGetAllQueryParams {
    after?: number;
    before?: number;
    gettotal?: boolean;
    pagesize?: number;
}
