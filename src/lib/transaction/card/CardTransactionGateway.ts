import HttpClient from '../../http/HttpClient';

export default class CardTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async authCapture(cardTransaction: any) {
        const path = `/services/2/transactions`;
        const body = cardTransaction;
        return await this.http.post(path, body);
    }

    public async authOnly(cardTransaction: any) {
        const path = `/services/2/transactions`;
        const body = cardTransaction;
        return await this.http.post(path, body);
    }

    public async capture(cardTransaction: any) {
        const path = `/services/2/transactions`;
        const body = cardTransaction;
        return await this.http.put(path, body);
    }

    public async authReversal(cardTransaction: any) {
        const path = `/services/2/transactions`;
        const body = cardTransaction;
        return await this.http.put(path, body);
    }

    public async get(transactionId: string) {
        const path = `/services/2/transactions/${transactionId}`;
        return await this.http.get(path);
    }
}
