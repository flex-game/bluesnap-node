import BillingContactInfoRequest from '../billingContactInfo/BillingContactInfoRequest';
import EcpRequest from '../ecp/EcpRequest';

/**
 * Contains account details for vaulted shoppers with multiple ACH accounts
 */
export default interface EcpDetailsRequest {
    billingContactInfo: BillingContactInfoRequest;
    ecp: EcpRequest;
    status: string;
}
