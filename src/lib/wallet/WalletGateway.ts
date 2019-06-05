import {HttpClient} from '../http/HttpClient';
import {ApplePayWalletRequest, ApplePayWalletResponse} from './models/ApplePayWallet';
import {MasterpassWalletRequest, MasterpassWalletResponse} from './models/MasterpassWallet';
import {VisaCheckoutWalletRequest, VisaCheckoutWalletResponse} from './models/VisaCheckoutWallet';
import {GetWalletResponse} from './models/GetWallet';
import {OnboardApplePayRequest, OnboardApplePayResponse} from './models/OnboardApplePay';

export class WalletGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    private async create(wallet: ApplePayWalletRequest | MasterpassWalletRequest | VisaCheckoutWalletRequest): Promise<any> {
        const path = '/services/2/wallets';
        const body = wallet;
        return this.http.post(path, body);
    }

    public async createApplePayWallet(wallet: ApplePayWalletRequest): Promise<ApplePayWalletResponse> {
        return this.create(wallet);
    }

    public async createMasterpassWallet(wallet: MasterpassWalletRequest): Promise<MasterpassWalletResponse> {
        return this.create(wallet);
    }

    public async createVisaCheckoutWallet(wallet: VisaCheckoutWalletRequest): Promise<VisaCheckoutWalletResponse> {
        return this.create(wallet);
    }

    // The Retrieve Wallet request is supported for Masterpass and Visa Checkout.
    public async get(walletId: number): Promise<GetWalletResponse> {
        const path = `/services/2/wallets/${walletId}`;
        return this.http.get(path);
    }

    public async getOrCreateVisaCheckoutApiKey(): Promise<Record<string, any>> {
        const path = '/services/2/wallets/visa/apikey';
        return this.http.post(path, null);
    }

    public async onboardApplePay(wallet: OnboardApplePayRequest): Promise<Record<string, any>> {
        const path = '/services/2/wallets/onboarding';
        const body = wallet;
        return this.http.post(path, body);
    }

    public async getApplePayOnboardInfo(onboardingId: string): Promise<OnboardApplePayResponse> {
        const path = `/services/2/wallets/onboarding/${onboardingId}`;
        return this.http.get(path);
    }
}
