import HttpClient from '../../http/HttpClient';

export default class EcpAchTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(altTransaction: any) {
        const path = `/services/2/alt-transactions`;
        const body = altTransaction;
        return await this.http.post(path, body);
    }

    public async get(transactionId: string) {
        const path = `/services/2/alt-transactions/${transactionId}`;
        return await this.http.get(path);
    }
}
