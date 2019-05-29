import AltTransactionResponse from '../../../models/altTransaction/AltTransactionResponse';
import SepaDirectDebitTransactionResponse from '../sepaDirectDebitTransaction/SepaDirectDebitTransactionResponse';

export default interface AltTransactionSepaDdResponse extends AltTransactionResponse {
    sepaDirectDebitTransaction: SepaDirectDebitTransactionResponse;
}
