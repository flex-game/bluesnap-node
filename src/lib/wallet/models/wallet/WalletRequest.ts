import ApplePayRequest from '../applePay/ApplePayRequest';

/**
 * Contains wallet information for Apple Pay and Google Pay
 */
export default interface WalletRequest {
    applePay: ApplePayRequest;
    walletType: string;
    encodedPaymentToken: string;
}
