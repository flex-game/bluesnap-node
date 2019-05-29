export default interface VendorAgreementResponse {
    commissionPercent: number; // This value should be between 0-100.
    accountStatus?: 'ACTIVE' | 'INACTIVE';
    recurringCommission?: 'Y' | 'N';
}
