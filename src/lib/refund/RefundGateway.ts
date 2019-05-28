import HttpClient from '../http/HttpClient';

export default class RefundGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async refund(transactionId: string) {
        const path = `/services/2/transaction/${transactionId}/refund`;
        return await this.http.put(path);
    }
}
