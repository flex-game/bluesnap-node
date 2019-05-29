export default interface OnboardApplePayRequest {
    walletType: string;
    applePay: {
        domains: string[]; // Note: Do not include https:// in the domain name
    }
}
