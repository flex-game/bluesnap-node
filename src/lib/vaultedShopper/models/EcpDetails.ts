import {EcpRequest, EcpResponse} from './Ecp';
import {BillingContactInfoRequest, BillingContactInfoResponse} from './BillingContactInfo';

/**
 * Contains account details for vaulted shoppers with multiple ACH accounts
 */

export interface EcpDetailsRequest {
    billingContactInfo: BillingContactInfoRequest;
    ecp: EcpRequest;
    status: string;
}

export interface EcpDetailsResponse {
    billingContactInfo: BillingContactInfoResponse;
    ecp: EcpResponse;
}
