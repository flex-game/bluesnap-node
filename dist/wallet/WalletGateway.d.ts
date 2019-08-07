import { HttpClient } from '../http/HttpClient';
import { ApplePayWalletRequest, ApplePayWalletResponse } from './models/ApplePayWallet';
import { MasterpassWalletRequest, MasterpassWalletResponse } from './models/MasterpassWallet';
import { VisaCheckoutWalletRequest, VisaCheckoutWalletResponse } from './models/VisaCheckoutWallet';
import { GetWalletResponse } from './models/GetWallet';
import { OnboardApplePayRequest, OnboardApplePayResponse } from './models/OnboardApplePay';
export declare class WalletGateway {
    private http;
    constructor(http: HttpClient);
    private create;
    createApplePayWallet(wallet: ApplePayWalletRequest): Promise<ApplePayWalletResponse>;
    createMasterpassWallet(wallet: MasterpassWalletRequest): Promise<MasterpassWalletResponse>;
    createVisaCheckoutWallet(wallet: VisaCheckoutWalletRequest): Promise<VisaCheckoutWalletResponse>;
    get(walletId: number): Promise<GetWalletResponse>;
    getOrCreateVisaCheckoutApiKey(): Promise<Record<string, any>>;
    onboardApplePay(wallet: OnboardApplePayRequest): Promise<Record<string, any>>;
    getApplePayOnboardInfo(onboardingId: string): Promise<OnboardApplePayResponse>;
}
