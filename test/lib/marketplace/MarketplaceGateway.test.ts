import * as faker from 'faker';
import gateway from '../bluesnap/BlueSnapTestClient';
import VendorRequest from '../../../src/lib/marketplace/models/vendor/VendorRequest';
import VendorResponse from '../../../src/lib/marketplace/models/vendor/VendorResponse';
import VendorsResponse from '../../../src/lib/marketplace/models/vendors/VendorsResponse';

describe('MarketplaceGateway Integration Test', () => {

    let vendor: VendorResponse;

    async function createVendor() {
        vendor = await gateway.marketplace.create({
            email: faker.internet.email(),
            country: faker.address.countryCode(),
        });
    }

    beforeAll(createVendor);

    describe('create()', () => {
        test('should create a new vendor', async () => {
            const request: VendorRequest = {
                email: faker.internet.email(),
                country: faker.address.countryCode(),
            };
            const response: VendorResponse = await gateway.marketplace.create(request);
            expect(response.vendorId).toBeDefined();
        });
    });

    describe('update()', () => {
        test('should update a vendor', async () => {
            const vendorId = vendor.vendorId;
            const zip = faker.address.zipCode();
            const request: Partial<VendorRequest> = {
                zip,
            };
            const response: VendorResponse = await gateway.marketplace.update(vendorId, request);
            expect(response.vendorId).toEqual(vendorId);
            expect(response.zip).toEqual(zip);
        });
    });

    describe('get()', () => {
        test('should get a vendor', async () => {
            const vendorId = vendor.vendorId;
            const response: VendorResponse = await gateway.marketplace.get(vendorId);
            expect(response.vendorId).toEqual(vendorId);
        });
    });

    describe('getAll()', () => {
        test('should get all vendors', async () => {
            const response: VendorsResponse = await gateway.marketplace.getAll();
            expect(response.vendor.length).toBeGreaterThan(0);
        });
    });

});
