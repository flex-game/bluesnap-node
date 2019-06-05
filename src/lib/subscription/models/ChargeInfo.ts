/**
 * Appears within the charge object
 */

export interface ChargeInfoRequest {
    chargeDescription: string;
    fromDate?: string;
    toDate?: string;
}

export interface ChargeInfoResponse {
    chargeDescription: string;
    fromDate: string;
    toDate: string;
    chargeType: 'INITIAL' | 'RECURRING';
}
