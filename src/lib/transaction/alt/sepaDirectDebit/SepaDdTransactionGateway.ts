import HttpClient from '../../../http/HttpClient';
import {AltTransactionSepaDdRequest, AltTransactionSepaDdResponse} from './models/AltTransactionSepaDirectDebit';

export default class SepaDdTransactionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async create(altTransaction: AltTransactionSepaDdRequest): Promise<AltTransactionSepaDdResponse> {
        const path = '/services/2/alt-transactions';
        const body = altTransaction;
        return this.http.post(path, body);
    }

    public async get(transactionId: string): Promise<AltTransactionSepaDdResponse> {
        const path = `/services/2/alt-transactions/${transactionId}`;
        return this.http.get(path);
    }
}
