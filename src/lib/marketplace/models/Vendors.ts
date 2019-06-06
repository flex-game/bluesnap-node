import { ValidatedResponse } from '../../errors/models/ValidatedResponse';
import { VendorResponse } from './Vendor';

/**
 * Contains a list of vendors.
 */

export interface VendorsResponse extends ValidatedResponse {
    totalResults: number;
    lastPage: boolean;
    vendor: VendorResponse[];
}
