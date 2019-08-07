export interface VendorAgreementRequest {
    commissionPercent: number;
    accountStatus?: 'ACTIVE' | 'INACTIVE';
    recurringCommission?: 'Y' | 'N';
}
export interface VendorAgreementResponse {
    commissionPercent: number;
    accountStatus?: 'ACTIVE' | 'INACTIVE';
    recurringCommission?: 'Y' | 'N';
}
