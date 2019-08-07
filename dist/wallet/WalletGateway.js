"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class WalletGateway {
    constructor(http) {
        this.http = http;
    }
    create(wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/wallets';
            const body = wallet;
            return this.http.post(path, body);
        });
    }
    createApplePayWallet(wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.create(wallet);
        });
    }
    createMasterpassWallet(wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.create(wallet);
        });
    }
    createVisaCheckoutWallet(wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.create(wallet);
        });
    }
    // The Retrieve Wallet request is supported for Masterpass and Visa Checkout.
    get(walletId) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/wallets/${walletId}`;
            return this.http.get(path);
        });
    }
    getOrCreateVisaCheckoutApiKey() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/wallets/visa/apikey';
            return this.http.post(path, null);
        });
    }
    onboardApplePay(wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/wallets/onboarding';
            const body = wallet;
            return this.http.post(path, body);
        });
    }
    getApplePayOnboardInfo(onboardingId) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/wallets/onboarding/${onboardingId}`;
            return this.http.get(path);
        });
    }
}
exports.WalletGateway = WalletGateway;
//# sourceMappingURL=WalletGateway.js.map