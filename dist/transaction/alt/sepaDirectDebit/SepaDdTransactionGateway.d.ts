import { HttpClient } from '../../../http/HttpClient';
import { AltTransactionSepaDdRequest, AltTransactionSepaDdResponse } from './models/AltTransactionSepaDirectDebit';
export declare class SepaDdTransactionGateway {
    private http;
    constructor(http: HttpClient);
    create(altTransaction: AltTransactionSepaDdRequest): Promise<AltTransactionSepaDdResponse>;
    get(transactionId: string): Promise<AltTransactionSepaDdResponse>;
}
