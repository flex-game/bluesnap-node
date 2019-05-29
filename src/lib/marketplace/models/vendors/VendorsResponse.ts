import VendorResponse from '../vendor/VendorResponse';

/**
 * Contains a list of vendors.
 */
export default interface VendorsResponse {
    totalResults: number;
    lastPage: boolean;
    vendor: VendorResponse[];
}
