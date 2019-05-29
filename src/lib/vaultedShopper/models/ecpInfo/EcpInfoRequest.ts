import BillingContactInfoRequest from '../billingContactInfo/BillingContactInfoRequest';
import EcpRequest from '../ecp/EcpRequest';

/**
 * Contains ACH/ECP account details & billing info for vaulted shoppers
 */
export default interface EcpInfoRequest {
    billingContactInfo: BillingContactInfoRequest;
    ecp: EcpRequest;
}
