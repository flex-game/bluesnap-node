/**
 * Contains the information required to process a SEPA Direct Debit transaction.
 */

export interface SepaDirectDebitTransactionRequest {
    iban: string;
    bic?: string;
    ibanFirstFour?: string;
    ibanLastFour?: string;
}

export interface SepaDirectDebitTransactionResponse {
    bic: string;
    ibanFirstFour: string;
    ibanLastFour: string;
    mandateId: string;
    mandateDate: string;
    preNotificationText: string;
    preNotificationTranslationRef: string;
}
