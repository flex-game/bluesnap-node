import * as faker from 'faker';
import {
    AltTransactionEcpAchRequest,
    AltTransactionEcpAchResponse
} from '../../../../../src/lib/transaction/alt/ecpAch/models/AltTransactionEcpAch';
import gateway from '../../../bluesnap/BlueSnapTestClient';
import {EcpAccountType} from '../../../../../src/lib/vaultedShopper/models/Ecp';

describe('EcpAchTransactionGateway Integration Test', () => {
    let ecpAchTransaction: AltTransactionEcpAchResponse;

    const mockEcpAch = {
        routingNumber: '011075150',
        accountType: <EcpAccountType>'CONSUMER_CHECKING',
        accountNumber: '4099999992',
    };

    const mockPayerInfo = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
    };

    async function createEcpAchTransaction() {
        ecpAchTransaction = await gateway.transaction.ecp.create({
            authorizedByShopper: true,
            ecpTransaction: mockEcpAch,
            amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
            currency: 'USD',
            payerInfo: mockPayerInfo,
        });
    }

    beforeAll(createEcpAchTransaction);

    describe('create()', () => {
        test('should create a new ECP/ACH transaction', async () => {
            const request: AltTransactionEcpAchRequest = {
                authorizedByShopper: true,
                ecpTransaction: mockEcpAch,
                amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
                currency: 'USD',
                payerInfo: mockPayerInfo,
            };
            const response: AltTransactionEcpAchResponse = await gateway.transaction.ecp.create(request);
            expect(response.transactionId).toBeDefined();
        });
    });

    describe('get()', () => {
        test('should retrieve an ECP/ACH transaction', async () => {
            const { transactionId } = ecpAchTransaction;
            const response: AltTransactionEcpAchResponse = await gateway.transaction.ecp.get(transactionId);
            expect(response.transactionId).toBeDefined();
            expect(response.transactionId).toEqual(transactionId);
        });
    });
});
