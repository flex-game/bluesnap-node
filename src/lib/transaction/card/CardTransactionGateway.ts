import { HttpClient } from '../../http/HttpClient';
import {
    AuthCaptureRequest, AuthRequest, AuthReversalRequest, CaptureRequest,
} from './models/AuthCapture';
import { CardTransactionResponse } from './models/CardTransaction';

export class CardTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async authCapture(cardTransaction: AuthCaptureRequest): Promise<CardTransactionResponse> {
        const path = '/services/2/transactions';
        const body = cardTransaction;
        return this.http.post(path, body);
    }

    public async authOnly(cardTransaction: AuthRequest): Promise<CardTransactionResponse> {
        const path = '/services/2/transactions';
        const body = cardTransaction;
        return this.http.post(path, body);
    }

    public async capture(cardTransaction: CaptureRequest): Promise<CardTransactionResponse> {
        const path = '/services/2/transactions';
        const body = cardTransaction;
        return this.http.put(path, body);
    }

    public async authReversal(cardTransaction: AuthReversalRequest): Promise<CardTransactionResponse> {
        const path = '/services/2/transactions';
        const body = cardTransaction;
        return this.http.put(path, body);
    }

    public async get(transactionId: string): Promise<CardTransactionResponse> {
        const path = `/services/2/transactions/${transactionId}`;
        return this.http.get(path);
    }
}
