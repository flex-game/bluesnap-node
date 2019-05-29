import SepaDirectDebitInfoResponse from '../../../vaultedShopper/models/sepaDirectDebitInfo/SepaDirectDebitInfoResponse';
import BillingContactInfoResponse from '../../../vaultedShopper/models/billingContactInfo/BillingContactInfoResponse';
import CreditCardResponse from '../../../transaction/card/models/creditCard/CreditCardResponse';
import EcpInfoResponse from '../../../vaultedShopper/models/ecpInfo/EcpInfoResponse';
import WalletResponse from '../../../wallet/models/wallet/WalletResponse';

/**
 * Contains payment information for subscriptions
 */
export default interface PaymentSourceResponse {
    creditCardInfo?: {
        billingContactInfo?: BillingContactInfoResponse;
        creditCard?: CreditCardResponse;
    };
    ecpInfo?: EcpInfoResponse;
    sepaDirectDebitInfo?: SepaDirectDebitInfoResponse;
    wallet?: WalletResponse
    ;
}
