import * as querystring from 'querystring';
import HttpClient from '../http/HttpClient';
import VendorRequest from './models/vendor/VendorRequest';
import VendorResponse from './models/vendor/VendorResponse';
import VendorsResponse from './models/vendors/VendorsResponse';
import ErrorResponse from '../errors/models/ErrorResponse';

export default class MarketplaceGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(vendor: VendorRequest): Promise<VendorResponse | ErrorResponse> {
        const path = '/services/2/vendors';
        const body = vendor;
        return this.http.post(path, body);
    }

    public async update(vendorId: string, updates: VendorRequest): Promise<VendorResponse | ErrorResponse> {
        const path = `/services/2/vendors/${vendorId}`;
        const body = updates;
        return this.http.put(path, body);
    }

    public async get(vendorId: string): Promise<VendorResponse | ErrorResponse> {
        const path = `/services/2/vendors/${vendorId}`;
        return this.http.get(path);
    }

    public async getAll(parameters?: MarketplaceGetAllQueryParams): Promise<VendorsResponse | ErrorResponse> {
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
