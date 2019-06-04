import HttpClient from '../http/HttpClient';
import VaultedShopperResponse from './models/vaultedShopper/VaultedShopperResponse';
import VaultedShopperRequest from './models/vaultedShopper/VaultedShopperRequest';

export default class VaultedShopperGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(shopper: VaultedShopperRequest): Promise<VaultedShopperResponse> {
        const path = '/services/2/vaulted-shoppers';
        const body = shopper;
        return this.http.post(path, body);
    }

    public async update(shopperId: number, updates: VaultedShopperRequest): Promise<VaultedShopperResponse> {
        const path = `/services/2/vaulted-shoppers/${shopperId}`;
        const body = updates;
        return this.http.put(path, body);
    }

    public async get(shopperId: number): Promise<VaultedShopperResponse> {
        const path = `/services/2/vaulted-shoppers/${shopperId}`;
        return this.http.get(path);
    }
}
