import AltTransactionRequest from '../../../models/altTransaction/AltTransactionRequest';
import PayPalTransactionRequest from '../paypalTransaction/PayPalTransactionRequest';

export default interface AltTransactionPayPalRequest extends AltTransactionRequest {
    paypalTransaction: PayPalTransactionRequest;
}
