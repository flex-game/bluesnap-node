import { WalletResponse } from '../../wallet/models/Wallet';
import { CreditCardResponse } from '../../transaction/card/models/CreditCard';
import { SepaDirectDebitResponse } from './SepaDirectDebit';
import { EcpResponse } from './Ecp';

/**
 * Contains details about the payment method that the shopper used for their most recent purchase
 */

type LastPaymentMethod = 'APPLE_PAY' | 'CC' | 'ECP' | 'PAYPAL' | 'SEPA_DIRECT_DEBIT';

export interface LastPaymentInfoResponse {
    paymentMethod: LastPaymentMethod;
    creditCard?: CreditCardResponse;
    ecp?: EcpResponse;
    wallet?: WalletResponse;
    sepaDirectDebit?: SepaDirectDebitResponse;

}
