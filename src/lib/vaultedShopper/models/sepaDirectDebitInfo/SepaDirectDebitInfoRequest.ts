import BillingContactInfoRequest from '../billingContactInfo/BillingContactInfoRequest';
import SepaDirectDebitRequest from '../sepaDirectDebit/SepaDirectDebitRequest';

/**
 * Contains SEPA Direct Debit account details & billing info for vaulted shoppers
 */
export default interface SepaDirectDebitInfoRequest {
    billingContactInfo?: BillingContactInfoRequest;
    sepaDirectDebit?: SepaDirectDebitRequest;
    status?: string;
}
