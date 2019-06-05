import {EcpTransactionRequest, EcpTransactionResponse} from './EcpTransaction';
import {AltTransactionRequest, AltTransactionResponse} from '../../models/AltTransaction';

export interface AltTransactionEcpAchRequest extends AltTransactionRequest {
    authorizedByShopper: boolean;
    ecpTransaction: EcpTransactionRequest;
}

export interface AltTransactionEcpAchResponse extends AltTransactionResponse {
    ecpTransaction: EcpTransactionResponse;
}
