import { VendorInfoRequest, VendorInfoResponse } from './VendorInfo';
/**
 * Contains vendor information for this transaction
 */
export interface VendorsInfoRequest {
    vendorInfo: VendorInfoRequest[];
}
export interface VendorsInfoResponse {
    vendorInfo: VendorInfoResponse[];
}
