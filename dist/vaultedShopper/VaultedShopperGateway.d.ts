import { HttpClient } from '../http/HttpClient';
import { VaultedShopperRequest, VaultedShopperResponse } from './models/VaultedShopper';
export declare class VaultedShopperGateway {
    private http;
    constructor(http: HttpClient);
    create(shopper: VaultedShopperRequest): Promise<VaultedShopperResponse>;
    update(shopperId: number, updates: VaultedShopperRequest): Promise<VaultedShopperResponse>;
    get(shopperId: number): Promise<VaultedShopperResponse>;
}
