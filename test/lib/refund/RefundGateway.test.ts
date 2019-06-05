import * as faker from 'faker';
import gateway from '../bluesnap/BlueSnapTestClient';
import {CardTransactionResponse} from '../../../src/lib/transaction/card/models/CardTransaction';

describe('CardTransactionGateway Integration Test', () => {
    let transaction: CardTransactionResponse;

    const mockCreditCard = {
        cardNumber: '4263982640269299',
        expirationMonth: '02',
        expirationYear: '2023',
        securityCode: '837',
    };

    async function createTransaction() {
        transaction = await gateway.transaction.card.authCapture({
            currency: 'USD',
            amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
            cardTransactionType: 'AUTH_CAPTURE',
            creditCard: mockCreditCard,
        });
    }

    beforeAll(createTransaction);

    describe('refund()', () => {
        test('should refund a transaction', async () => {
            const { transactionId } = transaction;
            const response = await gateway.refund.refund(transactionId);
            expect(response).toBeNull(); // Null response; no errors.
        });
    });
});
