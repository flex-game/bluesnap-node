export default interface ApplePayWalletRequest {
    walletType: string;
    validationUrl: string;
    domainName: string;
    displayName?: string;
}
