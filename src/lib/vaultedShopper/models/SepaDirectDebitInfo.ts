import { BillingContactInfoRequest, BillingContactInfoResponse } from './BillingContactInfo';
import { SepaDirectDebitRequest, SepaDirectDebitResponse } from './SepaDirectDebit';

/**
 * Contains SEPA Direct Debit account details & billing info for vaulted shoppers
 */

export interface SepaDirectDebitInfoRequest {
    billingContactInfo?: BillingContactInfoRequest;
    sepaDirectDebit?: SepaDirectDebitRequest;
    status?: string;
}

export interface SepaDirectDebitInfoResponse {
    billingContactInfo: BillingContactInfoResponse;
    sepaDirectDebit: SepaDirectDebitResponse;
}
