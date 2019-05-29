import AltTransactionRequest from '../../../models/altTransaction/AltTransactionRequest';
import SepaDirectDebitTransactionRequest from '../sepaDirectDebitTransaction/SepaDirectDebitTransactionRequest';

export default interface AltTransactionSepaDdRequest extends AltTransactionRequest {
    sepaDirectDebitTransaction: SepaDirectDebitTransactionRequest;
    authorizedByShopper: boolean;
}
