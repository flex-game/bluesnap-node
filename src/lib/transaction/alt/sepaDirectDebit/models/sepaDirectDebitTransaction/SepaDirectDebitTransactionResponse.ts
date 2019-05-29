/**
 * Contains the information required to process a SEPA Direct Debit transaction.
 */
export default interface SepaDirectDebitTransactionResponse {
    bic: string;
    ibanFirstFour: string;
    ibanLastFour: string;
    mandateId: string;
    mandateDate: string;
    preNotificationText: string;
    preNotificationTranslationRef: string;
}
