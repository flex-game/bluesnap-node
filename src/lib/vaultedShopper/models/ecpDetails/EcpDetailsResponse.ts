import BillingContactInfoResponse from '../billingContactInfo/BillingContactInfoResponse';
import EcpResponse from '../ecp/EcpResponse';

/**
 * Contains account details for vaulted shoppers with multiple ACH accounts
 */
export default interface EcpDetailsResponse {
    billingContactInfo: BillingContactInfoResponse;
    ecp: EcpResponse;
}
