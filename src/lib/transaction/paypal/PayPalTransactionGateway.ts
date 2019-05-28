import HttpClient from '../../http/HttpClient';

export default class PayPalTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(altTransaction: any) {
        const path = `/services/2/alt-transactions`;
        const body = altTransaction;
        return await this.http.post(path, body);
    }

    public async update(altTransaction: any) {
        const path = `/services/2/alt-transactions`;
        const body = altTransaction;
        return await this.http.put(path, body);
    }

    public async get(orderId: string) {
        const path = `/services/2/alt-transactions/resolve?orderId=${orderId}`;
        return await this.http.get(path);
    }
}
