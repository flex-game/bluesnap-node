import HttpClient from '../http/HttpClient';

export default class SubscriptionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }
}
