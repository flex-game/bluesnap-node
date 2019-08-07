import { ValidatedResponse } from '../../errors/models/ValidatedResponse';
export interface ApplePayWalletRequest {
    walletType: string;
    validationUrl: string;
    domainName: string;
    displayName?: string;
}
export interface ApplePayWalletResponse extends ValidatedResponse {
    walletType: string;
    walletToken: string;
}
