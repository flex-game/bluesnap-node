import HttpClient from '../../../http/HttpClient';
import AltTransactionSepaDdRequest from './models/altTransactionSepaDirectDebit/AltTransactionSepaDdRequest';
import AltTransactionSepaDdResponse from './models/altTransactionSepaDirectDebit/AltTransactionSepaDdResponse';
import ErrorResponse from '../../../errors/models/ErrorResponse';

export default class SepaDdTransactionGatewayTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(altTransaction: AltTransactionSepaDdRequest): Promise<AltTransactionSepaDdResponse | ErrorResponse> {
        const path = '/services/2/alt-transactions';
        const body = altTransaction;
        return this.http.post(path, body);
    }

    public async get(transactionId: string): Promise<AltTransactionSepaDdResponse | ErrorResponse> {
        const path = `/services/2/alt-transactions/${transactionId}`;
        return this.http.get(path);
    }
}
