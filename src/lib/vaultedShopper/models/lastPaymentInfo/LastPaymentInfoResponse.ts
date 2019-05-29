import CreditCardResponse from '../../../transaction/card/models/creditCard/CreditCardResponse';
import SepaDirectDebitResponse from '../sepaDirectDebit/SepaDirectDebitResponse';
import EcpResponse from '../ecp/EcpResponse';
import WalletResponse from '../../../wallet/models/wallet/WalletResponse';

/**
 * Contains details about the payment method that the shopper used for their most recent purchase
 */
export default interface LastPaymentInfoResponse {
    paymentMethod: 'APPLE_PAY' | 'CC' | 'ECP' | 'PAYPAL' | 'SEPA_DIRECT_DEBIT';
    creditCard?: CreditCardResponse;
    ecp?: EcpResponse;
    wallet?: WalletResponse;
    sepaDirectDebit?: SepaDirectDebitResponse;

}
