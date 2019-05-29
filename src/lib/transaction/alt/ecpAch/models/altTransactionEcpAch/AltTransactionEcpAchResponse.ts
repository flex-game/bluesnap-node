import AltTransactionResponse from '../../../models/altTransaction/AltTransactionResponse';
import EcpTransactionResponse from '../ecpTransaction/EcpTransactionResponse';

export default interface AltTransactionEcpAchResponse extends AltTransactionResponse {
    ecpTransaction: EcpTransactionResponse;
}
