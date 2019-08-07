import { HttpClient } from '../http/HttpClient';
export declare class RefundGateway {
    private http;
    constructor(http: HttpClient);
    refund(transactionId: string, params?: RefundQueryParams): Promise<null>;
}
declare type RefundQueryParams = {
    amount?: number;
    reason?: string;
    cancelsubscriptions?: boolean;
} & {
    [key: string]: number;
};
export {};
