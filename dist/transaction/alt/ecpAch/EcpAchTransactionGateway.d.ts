import { HttpClient } from '../../../http/HttpClient';
import { AltTransactionEcpAchRequest, AltTransactionEcpAchResponse } from './models/AltTransactionEcpAch';
export declare class EcpAchTransactionGateway {
    private http;
    constructor(http: HttpClient);
    create(altTransaction: AltTransactionEcpAchRequest): Promise<AltTransactionEcpAchResponse>;
    get(transactionId: string): Promise<AltTransactionEcpAchResponse>;
}
