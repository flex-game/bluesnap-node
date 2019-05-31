import HttpClient from '../http/HttpClient';
import VaultedShopperResponse from './models/vaultedShopper/VaultedShopperResponse';
import VaultedShopperRequest from './models/vaultedShopper/VaultedShopperRequest';
import ErrorResponse from '../errors/models/ErrorResponse';

export default class VaultedShopperGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(shopper: VaultedShopperRequest): Promise<VaultedShopperResponse | ErrorResponse> {
        const path = '/services/2/vaulted-shoppers';
        const body = shopper;
        return await this.http.post(path, body);
    }

    public async update(shopperId: string, updates: VaultedShopperRequest): Promise<VaultedShopperResponse | ErrorResponse> {
        const path = `/services/2/vaulted-shoppers/${shopperId}`;
        const body = updates;
        return await this.http.put(path, body);
    }

    public async get(shopperId: string): Promise<VaultedShopperResponse | ErrorResponse> {
        const path = `/services/2/vaulted-shoppers/${shopperId}`;
        return await this.http.put(path);
    }
}
