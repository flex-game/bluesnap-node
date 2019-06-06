import { ValidatedResponse } from '../../errors/models/ValidatedResponse';

export interface MasterpassWalletRequest {
    walletType: string;
    originUrl: string;
    returnUrl: string;
}

export interface MasterpassWalletResponse extends ValidatedResponse {
    walletType: string;
    walletToken: string;
    merchantCheckoutId: string;
    allowCardTypes: string;
}
