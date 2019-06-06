import { HttpClient } from '../../../http/HttpClient';
import { AltTransactionEcpAchRequest, AltTransactionEcpAchResponse } from './models/AltTransactionEcpAch';

export class EcpAchTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(altTransaction: AltTransactionEcpAchRequest): Promise<AltTransactionEcpAchResponse> {
        const path = '/services/2/alt-transactions';
        const body = altTransaction;
        return this.http.post(path, body);
    }

    public async get(transactionId: string): Promise<AltTransactionEcpAchResponse> {
        const path = `/services/2/alt-transactions/${transactionId}`;
        return this.http.get(path);
    }
}
