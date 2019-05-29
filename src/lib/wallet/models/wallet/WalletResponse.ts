import BillingContactInfoResponse from '../../../vaultedShopper/models/billingContactInfo/BillingContactInfoResponse';
import TokenizedCardResponse from '../tokenizedCard/TokenizedCardResponse';
import ApplePayResponse from '../applePay/ApplePayResponse';

/**
 * Contains wallet information for Apple Pay and Google Pay
 */
export default interface WalletResponse {
    applePay: ApplePayResponse;
    billingContactInfo: BillingContactInfoResponse;
    tokenizedCard: TokenizedCardResponse;
}
