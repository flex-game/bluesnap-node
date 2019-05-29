import SepaDirectDebitInfoRequest from '../../../vaultedShopper/models/sepaDirectDebitInfo/SepaDirectDebitInfoRequest';
import BillingContactInfoRequest from '../../../vaultedShopper/models/billingContactInfo/BillingContactInfoRequest';
import CreditCardRequest from '../../../transaction/card/models/creditCard/CreditCardRequest';
import EcpInfoRequest from '../../../vaultedShopper/models/ecpInfo/EcpInfoRequest';
import WalletRequest from '../../../wallet/models/wallet/WalletRequest';

/**
 * Contains payment information for subscriptions
 */
export default interface PaymentSourceRequest {
    creditCardInfo?: {
        billingContactInfo?: BillingContactInfoRequest;
        creditCard?: CreditCardRequest;
        pfToken?: string;
    };
    ecpInfo?: EcpInfoRequest;
    sepaDirectDebitInfo?: SepaDirectDebitInfoRequest;
    wallet?: WalletRequest;
}
