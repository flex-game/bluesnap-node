import * as querystring from 'querystring';
import HttpClient from '../http/HttpClient';

export default class MarketplaceGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(vendor: any) {
        const path = `/services/2/vendors`;
        const body = vendor;
        return await this.http.post(path, body);
    }

    public async update(vendorId: string, updates: any) {
        const path = `/services/2/vendors/${vendorId}`;
        const body = updates;
        return await this.http.put(path, body);
    }

    public async get(vendorId: string) {
        const path = `/services/2/vendors/${vendorId}`;
        return await this.http.put(path);
    }

    public async getAll(parameters?: any) {
        const queryParams = querystring.stringify(parameters);
        const path = `/services/2/vendors?${parameters}`;
        return await this.http.get(path);
    }
}
