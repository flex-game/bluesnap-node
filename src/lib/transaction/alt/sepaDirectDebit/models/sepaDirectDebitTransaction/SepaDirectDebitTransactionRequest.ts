/**
 * Contains the information required to process a SEPA Direct Debit transaction.
 */
export default interface SepaDirectDebitTransactionRequest {
    iban: string;
    bic?: string;
    ibanFirstFour?: string;
    ibanLastFour?: string;
}
