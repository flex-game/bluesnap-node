/**
 * Contains bank account details for the SEPA Direct Debit payment method for vaulted shoppers
 */

export interface SepaDirectDebitRequest {
    iban: string;
    bic?: string;
    ibanFirstFour?: string;
    ibanLastFour?: string;
}

export interface SepaDirectDebitResponse {
    bic: string;
    ibanFirstFour: string;
    ibanLastFour: string;
    mandateId: string;
    mandateDate: string;
    preNotificationText: string;
    preNotificationTranslationRef: string;
}
