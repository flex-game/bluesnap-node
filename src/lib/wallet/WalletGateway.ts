import HttpClient from '../http/HttpClient';
import ApplePayWalletRequest from './models/applePayWallet/ApplePayWalletRequest';
import MasterpassWalletRequest from './models/masterpassWallet/MasterpassWalletRequest';
import VisaCheckoutWalletRequest from './models/visaCheckoutWallet/VisaCheckoutWalletRequest';
import ApplePayWalletResponse from './models/applePayWallet/ApplePayWalletResponse';
import MasterpassWalletResponse from './models/masterpassWallet/MasterpassWalletResponse';
import VisaCheckoutWalletResponse from './models/visaCheckoutWallet/VisaCheckoutWalletResponse';
import OnboardApplePayResponse from './models/onboardApplePay/OnboardApplePayResponse';
import OnboardApplePayRequest from './models/onboardApplePay/OnboardApplePayRequest';
import RetrievedWalletResponse from './models/retrievedWallet/RetrievedWalletResponse';
import ErrorResponse from '../errors/models/ErrorResponse';

export default class WalletGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    private async create(wallet: ApplePayWalletRequest | MasterpassWalletRequest | VisaCheckoutWalletRequest): Promise<any> {
        const path = `/services/2/wallets`;
        const body = wallet;
        return await this.http.post(path, body);
    }

    public async createApplePayWallet(wallet: ApplePayWalletRequest): Promise<ApplePayWalletResponse | ErrorResponse> {
        return this.create(wallet);
    }

    public async createMasterpassWallet(wallet: MasterpassWalletRequest): Promise<MasterpassWalletResponse | ErrorResponse> {
        return this.create(wallet);
    }

    public async createVisaCheckoutWallet(wallet: VisaCheckoutWalletRequest): Promise<VisaCheckoutWalletResponse | ErrorResponse>  {
        return this.create(wallet);
    }

    // The Retrieve Wallet request is supported for Masterpass and Visa Checkout.
    public async get(walletId: string): Promise<RetrievedWalletResponse | ErrorResponse> {
        const path = `/services/2/wallets/${walletId}`;
        return await this.http.get(path);
    }

    public async getOrCreateVisaCheckoutApiKey(): Promise<Record<string, any>> {
        const path = `/services/2/wallets/visa/apikey`;
        return await this.http.post(path, null);
    }

    public async onboardApplePay(wallet: OnboardApplePayRequest): Promise<Record<string, any>> {
        const path = `/services/2/wallets/onboarding`;
        const body = wallet;
        return await this.http.post(path, body);
    }

    public async getApplePayOnboardInfo(onboardingId: string): Promise<OnboardApplePayResponse | ErrorResponse> {
        const path = `/services/2/wallets/onboarding/${onboardingId}`;
        return await this.http.get(path);
    }
}
