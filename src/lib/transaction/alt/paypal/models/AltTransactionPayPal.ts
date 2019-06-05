import {PayPalTransactionRequest, PayPalTransactionResponse} from './PayPalTransaction';
import {AltTransactionRequest, AltTransactionResponse} from '../../models/AltTransaction';

export interface AltTransactionPayPalRequest extends AltTransactionRequest {
    paypalTransaction: PayPalTransactionRequest;
}

export interface AltTransactionPayPalResponse extends AltTransactionResponse {
    paypalTransaction: PayPalTransactionResponse;
}
