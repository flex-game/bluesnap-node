import HttpClient from '../../../http/HttpClient';
import AltTransactionEcpAchResponse from './models/altTransactionEcpAch/AltTransactionEcpAchResponse';
import AltTransactionEcpAchRequest from './models/altTransactionEcpAch/AltTransactionEcpAchRequest';
import ErrorResponse from '../../../errors/models/ErrorResponse';

export default class EcpAchTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(altTransaction: AltTransactionEcpAchRequest): Promise<AltTransactionEcpAchResponse | ErrorResponse> {
        const path = `/services/2/alt-transactions`;
        const body = altTransaction;
        return await this.http.post(path, body);
    }

    public async get(transactionId: string): Promise<AltTransactionEcpAchResponse | ErrorResponse> {
        const path = `/services/2/alt-transactions/${transactionId}`;
        return await this.http.get(path);
    }
}
