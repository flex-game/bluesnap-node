import { BillingContactInfoRequest, BillingContactInfoResponse } from '../../vaultedShopper/models/BillingContactInfo';
import { CreditCardRequest, CreditCardResponse } from '../../transaction/card/models/CreditCard';
import { EcpInfoRequest, EcpInfoResponse } from '../../vaultedShopper/models/EcpInfo';
import { SepaDirectDebitInfoRequest, SepaDirectDebitInfoResponse } from '../../vaultedShopper/models/SepaDirectDebitInfo';
import { WalletRequest, WalletResponse } from '../../wallet/models/Wallet';

/**
 * Contains payment information for subscriptions
 */

export interface PaymentSourceRequest {
    creditCardInfo?: {
        billingContactInfo?: BillingContactInfoRequest;
        creditCard?: CreditCardRequest;
        pfToken?: string;
    };
    ecpInfo?: EcpInfoRequest;
    sepaDirectDebitInfo?: SepaDirectDebitInfoRequest;
    wallet?: WalletRequest;
}

export interface PaymentSourceResponse {
    creditCardInfo?: {
        billingContactInfo?: BillingContactInfoResponse;
        creditCard?: CreditCardResponse;
    };
    ecpInfo?: EcpInfoResponse;
    sepaDirectDebitInfo?: SepaDirectDebitInfoResponse;
    wallet?: WalletResponse;
}
