/**
 * Contains bank account details for the SEPA Direct Debit payment method for vaulted shoppers
 */
export default interface SepaDirectDebitRequest {
    iban: string;
    bic?: string;
    ibanFirstFour?: string;
    ibanLastFour?: string;
}
