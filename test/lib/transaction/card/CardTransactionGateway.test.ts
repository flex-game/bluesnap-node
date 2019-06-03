import * as faker from 'faker';
import AuthCaptureRequest from '../../../../src/lib/transaction/card/models/authCapture/AuthCaptureRequest';
import CardTransactionResponse
    from '../../../../src/lib/transaction/card/models/cardTransaction/CardTransactionResponse';
import gateway from '../../bluesnap/BlueSnapTestClient';
import AuthRequest from '../../../../src/lib/transaction/card/models/authCapture/AuthRequest';
import CaptureRequest from '../../../../src/lib/transaction/card/models/authCapture/CaptureRequest';
import AuthReversalRequest from '../../../../src/lib/transaction/card/models/authCapture/AuthReversalRequest';

describe('CardTransactionGateway Integration Test', () => {

    let capturedTransaction: CardTransactionResponse;
    let authOnlyTransaction: CardTransactionResponse;

    const mockCreditCard = {
        cardNumber: '4263982640269299',
        expirationMonth: '02',
        expirationYear: '2023',
        securityCode: '837',
    };

    async function createCardTransactions() {
        capturedTransaction = await gateway.transaction.card.authCapture({
            currency: 'USD',
            amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
            cardTransactionType: 'AUTH_CAPTURE',
            creditCard: mockCreditCard,
        });

        authOnlyTransaction = await gateway.transaction.card.authOnly({
            currency: 'USD',
            amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
            cardTransactionType: 'AUTH_ONLY',
            creditCard: mockCreditCard,
        });
    }

    beforeAll(createCardTransactions);

    describe('authCapture()', () => {
        test('should authorize and capture a new card transaction', async () => {
            const request: AuthCaptureRequest = {
                currency: 'USD',
                amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
                cardTransactionType: 'AUTH_CAPTURE',
                creditCard: mockCreditCard,
            };
            const response: CardTransactionResponse = await gateway.transaction.card.authCapture(request);
            expect(response.transactionId).toBeDefined();
        });
    });

    describe('authOnly()', () => {
        test('should authorize a new card transaction', async () => {
            const request: AuthRequest = {
                currency: 'USD',
                amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
                cardTransactionType: 'AUTH_ONLY',
            };
            const response: CardTransactionResponse = await gateway.transaction.card.authOnly(request);
            expect(response.transactionId).toBeDefined();
        });
    });

    describe('capture()', () => {
        test('should capture an authorized transaction', async () => {
            const request: CaptureRequest = {
                transactionId: authOnlyTransaction.transactionId,
                cardTransactionType: 'CAPTURE',
            };
            const response: CardTransactionResponse = await gateway.transaction.card.capture(request);
            expect(response.transactionId).toBeDefined();
        });
    });

    describe('authReversal()', () => {
        test('should reverse authorization on an authorized transaction', async () => {
            const transaction = await gateway.transaction.card.authOnly({
                currency: 'USD',
                amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
                cardTransactionType: 'AUTH_ONLY',
                creditCard: mockCreditCard,
            });

            const request: AuthReversalRequest = {
                transactionId: transaction.transactionId,
                cardTransactionType: 'AUTH_REVERSAL',
            };
            const response: CardTransactionResponse = await gateway.transaction.card.authReversal(request);
            expect(response.transactionId).toBeDefined();
        });
    });

    describe('get()', () => {
        test('should retrieve a transaction', async () => {
            const response: CardTransactionResponse = await gateway.transaction.card.get(capturedTransaction.transactionId);
            expect(response.transactionId).toBeDefined();
        });
    });

});
