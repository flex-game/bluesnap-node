import ValidatedResponse from '../../../errors/models/ValidatedResponse';

export default interface ApplePayWalletResponse extends ValidatedResponse {
    walletType: string;
    walletToken: string;
}
