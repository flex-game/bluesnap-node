import { ApplePayRequest, ApplePayResponse } from './ApplePay';
import { BillingContactInfoResponse } from '../../vaultedShopper/models/BillingContactInfo';
import { TokenizedCardResponse } from './TokenizedCard';
/**
 * Contains wallet information for Apple Pay and Google Pay
 */
export interface WalletRequest {
    applePay: ApplePayRequest;
    walletType: string;
    encodedPaymentToken: string;
}
export interface WalletResponse {
    applePay: ApplePayResponse;
    billingContactInfo: BillingContactInfoResponse;
    tokenizedCard: TokenizedCardResponse;
}
