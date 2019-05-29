import AltTransactionRequest from '../../../models/altTransaction/AltTransactionRequest';
import EcpTransactionRequest from '../ecpTransaction/EcpTransactionRequest';

export default interface AltTransactionEcpAchRequest extends AltTransactionRequest {
    authorizedByShopper: boolean;
    ecpTransaction: EcpTransactionRequest;
}
