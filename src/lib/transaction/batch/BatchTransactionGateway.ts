import HttpClient from '../../http/HttpClient';

export default class BatchTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }
}
