export default interface OnboardApplePayResponse {
    walletType: string;
    applePay: {
        domains: string[]; // Note: Do not include https:// in the domain name
    }
}
