import {AltTransactionRequest, AltTransactionResponse} from '../../models/AltTransaction';
import {SepaDirectDebitTransactionRequest, SepaDirectDebitTransactionResponse} from './SepaDirectDebitTransaction';

export interface AltTransactionSepaDdRequest extends AltTransactionRequest {
    sepaDirectDebitTransaction: SepaDirectDebitTransactionRequest;
    authorizedByShopper: boolean;
}

export interface AltTransactionSepaDdResponse extends AltTransactionResponse {
    sepaDirectDebitTransaction: SepaDirectDebitTransactionResponse;
}
