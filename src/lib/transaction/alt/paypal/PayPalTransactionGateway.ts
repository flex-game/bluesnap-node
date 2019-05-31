import HttpClient from '../../../http/HttpClient';
import AltTransactionPayPalRequest from './models/altTransactionPayPal/AltTransactionPayPalRequest';
import AltTransactionPayPalResponse from './models/altTransactionPayPal/AltTransactionPayPalResponse';
import ErrorResponse from '../../../errors/models/ErrorResponse';

export default class PayPalTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(altTransaction: AltTransactionPayPalRequest): Promise<AltTransactionPayPalResponse | ErrorResponse> {
        const path = `/services/2/alt-transactions`;
        const body = altTransaction;
        return await this.http.post(path, body);
    }

    public async update(altTransaction: AltTransactionPayPalRequest): Promise<AltTransactionPayPalResponse | ErrorResponse> {
        const path = `/services/2/alt-transactions`;
        const body = altTransaction;
        return await this.http.put(path, body);
    }

    public async get(orderId: string): Promise<AltTransactionPayPalResponse | ErrorResponse> {
        const path = `/services/2/alt-transactions/resolve?orderId=${orderId}`;
        return await this.http.get(path);
    }
}
