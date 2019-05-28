import HttpClient from '../http/HttpClient';

export default class VaultedShopperGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(shopper: any) {
        const path = `/services/2/vaulted-shoppers`;
        const body = shopper;
        return await this.http.post(path, body);
    }

    public async update(shopperId: string, updates: any) {
        const path = `/services/2/vaulted-shoppers/${shopperId}`;
        const body = updates;
        return await this.http.put(path, body);
    }

    public async get(shopperId: string) {
        const path = `/services/2/vaulted-shoppers/${shopperId}`;
        return await this.http.put(path);
    }
}
