/**
 * Appears within the charge object
 */
export default interface ChargeInfoResponse {
    chargeDescription: string;
    fromDate: string;
    toDate: string;
    chargeType: 'INITIAL' | 'RECURRING';
}
