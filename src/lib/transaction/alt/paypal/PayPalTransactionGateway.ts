import {HttpClient} from '../../../http/HttpClient';
import {AltTransactionPayPalRequest, AltTransactionPayPalResponse} from './models/AltTransactionPayPal';

export class PayPalTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(altTransaction: AltTransactionPayPalRequest): Promise<AltTransactionPayPalResponse> {
        const path = '/services/2/alt-transactions';
        const body = altTransaction;
        return this.http.post(path, body);
    }

    public async update(altTransaction: AltTransactionPayPalRequest): Promise<AltTransactionPayPalResponse> {
        const path = '/services/2/alt-transactions';
        const body = altTransaction;
        return this.http.put(path, body);
    }

    public async get(orderId: string): Promise<AltTransactionPayPalResponse> {
        const path = `/services/2/alt-transactions/resolve?orderId=${orderId}`;
        return this.http.get(path);
    }
}
