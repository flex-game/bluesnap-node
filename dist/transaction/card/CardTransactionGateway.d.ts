import { HttpClient } from '../../http/HttpClient';
import { AuthCaptureRequest, AuthRequest, AuthReversalRequest, CaptureRequest } from './models/AuthCapture';
import { CardTransactionResponse } from './models/CardTransaction';
export declare class CardTransactionGateway {
    private http;
    constructor(http: HttpClient);
    authCapture(cardTransaction: AuthCaptureRequest): Promise<CardTransactionResponse>;
    authOnly(cardTransaction: AuthRequest): Promise<CardTransactionResponse>;
    capture(cardTransaction: CaptureRequest): Promise<CardTransactionResponse>;
    authReversal(cardTransaction: AuthReversalRequest): Promise<CardTransactionResponse>;
    get(transactionId: string): Promise<CardTransactionResponse>;
}
