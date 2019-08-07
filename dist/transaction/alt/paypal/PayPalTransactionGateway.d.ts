import { HttpClient } from '../../../http/HttpClient';
import { AltTransactionPayPalRequest, AltTransactionPayPalResponse } from './models/AltTransactionPayPal';
export declare class PayPalTransactionGateway {
    private http;
    constructor(http: HttpClient);
    create(altTransaction: AltTransactionPayPalRequest): Promise<AltTransactionPayPalResponse>;
    update(altTransaction: AltTransactionPayPalRequest): Promise<AltTransactionPayPalResponse>;
    get(orderId: string): Promise<AltTransactionPayPalResponse>;
}
