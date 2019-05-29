import AltTransactionResponse from '../../../models/altTransaction/AltTransactionResponse';
import PayPalTransactionResponse from '../paypalTransaction/PayPalTransactionResponse';

export default interface AltTransactionPayPalResponse extends AltTransactionResponse {
    paypalTransaction: PayPalTransactionResponse;
}
