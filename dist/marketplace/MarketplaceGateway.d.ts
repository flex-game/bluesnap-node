import { HttpClient } from '../http/HttpClient';
import { VendorRequest, VendorResponse } from './models/Vendor';
import { VendorsResponse } from './models/Vendors';
export declare class MarketplaceGateway {
    private http;
    constructor(http: HttpClient);
    create(vendor: VendorRequest): Promise<number>;
    update(vendorId: number, updates: VendorRequest): Promise<null>;
    get(vendorId: number): Promise<VendorResponse>;
    getAll(parameters?: MarketplaceGetAllQueryParams): Promise<VendorsResponse>;
}
interface MarketplaceGetAllQueryParams {
    after?: number;
    before?: number;
    gettotal?: boolean;
    pagesize?: number;
}
export {};
