import VendorInfoResponse from '../vendorInfo/VendorInfoResponse';

/**
 * Contains vendor information for this transaction
 */
export default interface VendorsInfoResponse {
    vendorInfo: VendorInfoResponse[];
}
