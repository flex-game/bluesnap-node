import * as querystring from 'querystring';
import {HttpClient} from '../http/HttpClient';

export class RefundGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    public async refund(transactionId: string, params?: RefundQueryParams): Promise<null> {
        const queryParams = querystring.stringify(params);
        const path = `/services/2/transactions/${transactionId}/refund?${queryParams}`;
        return this.http.put(path);
    }
}

type RefundQueryParams = {
    amount?: number;
    reason?: string;
    cancelsubscriptions?: boolean;
} & {
    [key: string]: number; // Dynamic key for vendor, formatted as: vendor.${vendorId}.amount
}
