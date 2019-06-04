import ValidatedResponse from '../../../errors/models/ValidatedResponse';

export default interface MasterpassWalletResponse extends ValidatedResponse {
    walletType: string;
    walletToken: string;
    merchantCheckoutId: string;
    allowCardTypes: string;
}
