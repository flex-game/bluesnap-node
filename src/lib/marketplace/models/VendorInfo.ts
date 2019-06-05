export interface VendorInfoRequest {
    vendorId: number;
    commissionPercent?: number;
    commissionAmount?: number;
}

export interface VendorInfoResponse {
    vendorId: number;
    commissionPercent?: number;
    commissionAmount?: number;
}
