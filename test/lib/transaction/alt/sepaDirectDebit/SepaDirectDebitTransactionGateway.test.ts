import gateway from '../../../bluesnap/BlueSnapTestClient';
import AltTransactionSepaDdResponse
    from '../../../../../src/lib/transaction/alt/sepaDirectDebit/models/altTransactionSepaDirectDebit/AltTransactionSepaDdResponse';
import AltTransactionSepaDdRequest
    from '../../../../../src/lib/transaction/alt/sepaDirectDebit/models/altTransactionSepaDirectDebit/AltTransactionSepaDdRequest';
import * as faker from 'faker';

describe('SepaDirectDebitTransactionGateway Integration Test', () => {

    let sepaDdTransaction: AltTransactionSepaDdResponse;

    const mockSepaDirectDebit = {
        iban: 'DE09100100101234567893',
    };

    const mockPayerInfo = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
    };

    async function createSepaDdTransaction() {
        sepaDdTransaction = await gateway.transaction.sepadd.create({
            amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
            currency: 'USD',
            authorizedByShopper: true,
            sepaDirectDebitTransaction: mockSepaDirectDebit,
            payerInfo: mockPayerInfo,
        });
    }

    beforeAll(createSepaDdTransaction);

    describe('create()', () => {
        test('should create a new SEPA Direct Debit transaction', async () => {
            const request: AltTransactionSepaDdRequest = {
                amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
                currency: 'USD',
                authorizedByShopper: true,
                sepaDirectDebitTransaction: mockSepaDirectDebit,
                payerInfo: mockPayerInfo,
            };
            const response: AltTransactionSepaDdResponse = await gateway.transaction.sepadd.create(request);
            expect(response.transactionId).toBeDefined();
        });
    });

    describe('get()', () => {
        test('should retrieve a SEPA direct debit transaction', async () => {
            const transactionId = sepaDdTransaction.transactionId;
            const response: AltTransactionSepaDdResponse = await gateway.transaction.sepadd.get(transactionId);
            expect(response.transactionId).toEqual(transactionId);
        });
    });

});
