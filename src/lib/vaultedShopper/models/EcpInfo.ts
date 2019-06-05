import {EcpRequest, EcpResponse} from './Ecp';
import {BillingContactInfoRequest, BillingContactInfoResponse} from './BillingContactInfo';

/**
 * Contains ACH/ECP account details & billing info for vaulted shoppers
 */

export interface EcpInfoRequest {
    billingContactInfo: BillingContactInfoRequest;
    ecp: EcpRequest;
}

export interface EcpInfoResponse {
    billingContactInfo: BillingContactInfoResponse;
    ecp: EcpResponse;
}
