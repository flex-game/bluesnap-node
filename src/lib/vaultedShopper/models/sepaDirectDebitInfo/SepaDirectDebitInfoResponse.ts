import BillingContactInfoResponse from '../billingContactInfo/BillingContactInfoResponse';
import SepaDirectDebitResponse from '../sepaDirectDebit/SepaDirectDebitResponse';

/**
 * Contains SEPA Direct Debit account details & billing info for vaulted shoppers
 */
export default interface SepaDirectDebitInfoResponse {
    billingContactInfo: BillingContactInfoResponse;
    sepaDirectDebit: SepaDirectDebitResponse;
}
