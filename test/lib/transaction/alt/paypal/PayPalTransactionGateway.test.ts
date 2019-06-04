import * as faker from 'faker';
import gateway from '../../../bluesnap/BlueSnapTestClient';
import AltTransactionPayPalResponse
    from '../../../../../src/lib/transaction/alt/paypal/models/altTransactionPayPal/AltTransactionPayPalResponse';
import AltTransactionPayPalRequest
    from '../../../../../src/lib/transaction/alt/paypal/models/altTransactionPayPal/AltTransactionPayPalRequest';

describe('PayPalTransactionGatewat Integration Test', () => {

    let paypalTransaction: AltTransactionPayPalResponse;

    async function createPayPalTransaction() {
        paypalTransaction = await gateway.transaction.paypal.create({
            amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
            currency: 'USD',
            paypalTransaction: {
                cancelUrl: 'http://www.cancelURL.com',
                returnUrl: 'http://www.returnURL.com',
            },
        });
    }

    beforeAll(createPayPalTransaction);

    describe('create()', () => {
        test('should create a new PayPal transaction', async () => {
            const request: AltTransactionPayPalRequest = {
                amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
                currency: 'USD',
                paypalTransaction: {
                    cancelUrl: 'http://www.cancelURL.com',
                    returnUrl: 'http://www.returnURL.com',
                },
            };
            const response: AltTransactionPayPalResponse = await gateway.transaction.paypal.create(request);
            expect(response.transactionId).toBeDefined();
        });
    });

    describe('update()', () => {
        test('should update a PayPal transaction', async () => {
            const transactionId = paypalTransaction.transactionId;
            const request: AltTransactionPayPalRequest = {
                amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
                currency: 'USD',
                paypalTransaction: {
                    orderId: '4006145',
                    transactionType: 'CAPTURE',
                },
            };
            const response: AltTransactionPayPalResponse = await gateway.transaction.paypal.update(request);
            expect(response.transactionId).toEqual(transactionId);
        });
    });

    describe('get()', () => {
        test('should retrieve a PayPal transaction', async () => {
            const transactionId = paypalTransaction.transactionId;
            const response: AltTransactionPayPalResponse = await gateway.transaction.paypal.get(transactionId);
            expect(response.transactionId).toEqual(transactionId);
        });
    });

});
