import HttpClient from '../http/HttpClient';

export default class WalletGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(wallet: any) {
        const path = `/services/2/wallets`;
        const body = wallet;
        return await this.http.post(path, body);
    }

    public async get(walletId: string) {
        const path = `/services/2/wallets/${walletId}`;
        return await this.http.put(path);
    }
}
