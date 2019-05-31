import HttpClient from '../../http/HttpClient';
import AuthCaptureRequest from './models/authCapture/AuthCaptureRequest';
import AuthRequest from './models/authCapture/AuthRequest';
import CaptureRequest from './models/authCapture/CaptureRequest';
import AuthReversalRequest from './models/authCapture/AuthReversalRequest';
import CardTransactionResponse from './models/cardTransaction/CardTransactionResponse';
import ErrorResponse from '../../errors/models/ErrorResponse';

export default class CardTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async authCapture(cardTransaction: AuthCaptureRequest): Promise<CardTransactionResponse | ErrorResponse> {
        const path = `/services/2/transactions`;
        const body = cardTransaction;
        return await this.http.post(path, body);
    }

    public async authOnly(cardTransaction: AuthRequest): Promise<CardTransactionResponse | ErrorResponse> {
        const path = `/services/2/transactions`;
        const body = cardTransaction;
        return await this.http.post(path, body);
    }

    public async capture(cardTransaction: CaptureRequest): Promise<CardTransactionResponse | ErrorResponse> {
        const path = `/services/2/transactions`;
        const body = cardTransaction;
        return await this.http.put(path, body);
    }

    public async authReversal(cardTransaction: AuthReversalRequest): Promise<CardTransactionResponse | ErrorResponse> {
        const path = `/services/2/transactions`;
        const body = cardTransaction;
        return await this.http.put(path, body);
    }

    public async get(transactionId: string): Promise<CardTransactionResponse | ErrorResponse> {
        const path = `/services/2/transactions/${transactionId}`;
        return await this.http.get(path);
    }
}
