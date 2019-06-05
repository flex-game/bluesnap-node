import gateway from '../bluesnap/BlueSnapTestClient';
import {ApplePayWalletRequest, ApplePayWalletResponse} from '../../../src/lib/wallet/models/ApplePayWallet';
import {VisaCheckoutWalletRequest, VisaCheckoutWalletResponse} from '../../../src/lib/wallet/models/VisaCheckoutWallet';
import {MasterpassWalletRequest, MasterpassWalletResponse} from '../../../src/lib/wallet/models/MasterpassWallet';
import {GetWalletResponse} from '../../../src/lib/wallet/models/GetWallet';

describe('WalletGateway Integration Test', () => {
    let wallet: VisaCheckoutWalletResponse;

    async function createWallet() {
        wallet = await gateway.wallet.createVisaCheckoutWallet({
            callId: '5549711876630985101',
            walletType: 'VISA_CHECKOUT',
        });
    }

    beforeAll(createWallet);

    describe('createApplePayWallet()', () => {
        test('should create an Apple Pay wallet', async () => {
            const request: ApplePayWalletRequest = {
                walletType: 'APPLE_PAY',
                validationUrl: 'https://apple-pay-gateway-cert.apple.com/paymentservices/startSession',
                domainName: 'storyblocks.com',
            };
            const response: ApplePayWalletResponse = await gateway.wallet.createApplePayWallet(request);

            expect(response.walletToken).toBeDefined();
            expect(response.walletType).toEqual('APPLE_PAY');
        });
    });

    describe('createMasterpassWallet()', () => {
        test('should create a Masterpass wallet', async () => {
            const request: MasterpassWalletRequest = {
                walletType: 'MASTERPASS',
                originUrl: 'http://www.originURL.com',
                returnUrl: 'http://www.returnURL.com',
            };
            const response: MasterpassWalletResponse = await gateway.wallet.createMasterpassWallet(request);

            expect(response.walletToken).toBeDefined();
            expect(response.walletType).toEqual('MASTERPASS');
        });
    });

    describe('createVisaCheckoutWallet()', () => {
        test('should create a Visa Checkout wallet', async () => {
            const request: VisaCheckoutWalletRequest = {
                callId: '5549711876630985101',
                walletType: 'VISA_CHECKOUT',
            };
            const response: VisaCheckoutWalletResponse = await gateway.wallet.createVisaCheckoutWallet(request);

            expect(response.walletId).toBeDefined();
        });
    });

    describe('get()', () => {
        test('should retrieve a wallet', async () => {
            const { walletId } = wallet;
            const response: GetWalletResponse = await gateway.wallet.get(walletId);
            expect(response.creditCard).toBeDefined();
            expect(response.country).toBeDefined();
        });
    });
});
