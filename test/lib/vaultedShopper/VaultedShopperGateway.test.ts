import * as faker from 'faker';
import gateway from '../bluesnap/BlueSnapTestClient';
import VaultedShopperRequest from '../../../src/lib/vaultedShopper/models/vaultedShopper/VaultedShopperRequest';
import VaultedShopperResponse from '../../../src/lib/vaultedShopper/models/vaultedShopper/VaultedShopperResponse';

describe('VaultedShopperGateway Integration Test', () => {

    let shopper: VaultedShopperResponse;

    async function createVaultedShopper() {
        shopper = await gateway.shopper.create({firstName: faker.name.firstName(), lastName: faker.name.lastName()});
    }

    beforeAll(createVaultedShopper);

    describe('create()', () => {
        test('should create a new vaulted shopper', async () => {
            const request: VaultedShopperRequest = {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
            };
            const response: VaultedShopperResponse = await gateway.shopper.create(request);
            expect(response.vaultedShopperId).toBeDefined();
        });
    });

    describe('update()', () => {
        test('should update a vaulted shopper', async () => {
            const shopperId = shopper.vaultedShopperId;
            const email = faker.internet.email();
            const request: VaultedShopperRequest = {
                email,
            };
            const response: VaultedShopperResponse = await gateway.shopper.update(shopperId, request);
            expect(response.vaultedShopperId).toEqual(shopperId);
            expect(response.email).toEqual(email);
        });
    });

    describe('get()', () => {
        test('should get a vaulted shopper', async () => {
            const shopperId = shopper.vaultedShopperId;
            const response: VaultedShopperResponse = await gateway.shopper.get(shopperId);
            expect(response.vaultedShopperId).toEqual(shopperId);
        });
    });

});
