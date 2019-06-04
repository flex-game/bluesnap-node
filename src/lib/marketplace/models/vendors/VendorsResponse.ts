import VendorResponse from '../vendor/VendorResponse';
import ValidatedResponse from '../../../errors/models/ValidatedResponse';

/**
 * Contains a list of vendors.
 */
export default interface VendorsResponse extends ValidatedResponse {
    totalResults: number;
    lastPage: boolean;
    vendor: VendorResponse[];
}
