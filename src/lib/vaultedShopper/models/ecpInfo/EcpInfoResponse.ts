import BillingContactInfoResponse from '../billingContactInfo/BillingContactInfoResponse';
import EcpResponse from '../ecp/EcpResponse';

/**
 * Contains ACH/ECP account details & billing info for vaulted shoppers
 */
export default interface EcpInfoResponse {
    billingContactInfo: BillingContactInfoResponse;
    ecp: EcpResponse;
}
