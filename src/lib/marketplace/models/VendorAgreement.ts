export interface VendorAgreementRequest {
    commissionPercent: number; // This value should be between 0-100.
    accountStatus?: 'ACTIVE' | 'INACTIVE';
    recurringCommission?: 'Y' | 'N';
}

export interface VendorAgreementResponse {
    commissionPercent: number; // This value should be between 0-100.
    accountStatus?: 'ACTIVE' | 'INACTIVE';
    recurringCommission?: 'Y' | 'N';
}
