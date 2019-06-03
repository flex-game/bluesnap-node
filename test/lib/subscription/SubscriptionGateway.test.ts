import * as faker from 'faker';
import gateway from '../bluesnap/BlueSnapTestClient';
import PlanRequest from '../../../src/lib/subscription/models/plan/PlanRequest';
import PlanResponse from '../../../src/lib/subscription/models/plan/PlanResponse';
import PlanListResponse from '../../../src/lib/subscription/models/planList/PlanListResponse';
import SubscriptionRequest from '../../../src/lib/subscription/models/subscription/SubscriptionRequest';
import SubscriptionResponse from '../../../src/lib/subscription/models/subscription/SubscriptionResponse';
import SubscriptionListResponse from '../../../src/lib/subscription/models/subscriptionList/SubscriptionListResponse';
import ChargeRequest from '../../../src/lib/subscription/models/charge/ChargeRequest';
import ChargeResponse from '../../../src/lib/subscription/models/charge/ChargeResponse';
import ChargeListResponse from '../../../src/lib/subscription/models/chargeList/ChargeListResponse';

describe('SubscriptionGateway Integration Test', () => {

    let plan: PlanResponse;
    let subscription: SubscriptionResponse;
    let merchantManagedSubscription: SubscriptionResponse;
    let charge: ChargeResponse;

    async function createPlanAndSubscription() {
        plan = await gateway.subscription.createPlan({
            chargeFrequency: 'ANNUALLY',
            name: faker.random.word(),
            currency: 'USD',
            recurringChargeAmount: faker.random.number(),
        });

        subscription = await gateway.subscription.createSubscription({
            planId: plan.planId
        });

        merchantManagedSubscription = await gateway.subscription.createMerchantManagedSubscription({
            planId: plan.planId
        });

        charge = await gateway.subscription.createMerchantManagedSubscriptionCharge(merchantManagedSubscription.subscriptionId, {currency: 'USD'});
    }

    beforeAll(createPlanAndSubscription);

    /**
     * Plans
     */

    describe('createPlan()', () => {
        test('should create a new plan', async () => {
            const request: PlanRequest = {
                chargeFrequency: 'ANNUALLY',
                name: faker.random.word(),
                currency: 'USD',
                recurringChargeAmount: faker.random.number(),
            };
            const response: PlanResponse = await gateway.subscription.createPlan(request);
            expect(response.planId).toBeDefined();
        });
    });

    describe('updatePlan()', () => {
        test('should update a plan', async () => {
            const planId = plan.planId;
            const maxNumberOfCharges = faker.random.number();
            const request: Partial<PlanRequest> = {
                maxNumberOfCharges,
            };
            const response: PlanResponse = await gateway.subscription.updatePlan(planId, request);
            expect(response.planId).toEqual(planId);
            expect(response.maxNumberOfCharges).toEqual(maxNumberOfCharges);
        });
    });

    describe('getPlan()', () => {
        test('should get a plan', async () => {
            const planId = plan.planId;
            const response: PlanResponse = await gateway.subscription.getPlan(planId);
            expect(response.planId).toEqual(planId);
        });
    });

    describe('getAllPlans()', () => {
        test('should get all plans', async () => {
            const response: PlanListResponse = await gateway.subscription.getAllPlans();
            expect(response.plans.length).toBeGreaterThan(0);
        });
    });

    /**
     * Subscriptions
     */

    describe('createSubscription()', () => {
        test('should create a new subscription', async () => {
            const request: SubscriptionRequest = {
                planId: plan.planId,
            };
            const response: SubscriptionResponse = await gateway.subscription.createSubscription(request);
            expect(response.planId).toBeDefined();
        });
    });

    describe('updateSubscription()', () => {
        test('should update a subscription', async () => {
            const subscriptionId = subscription.subscriptionId;
            const quantity = faker.random.number();
            const request: Partial<SubscriptionRequest> = {
                quantity,
            };
            const response: SubscriptionResponse = await gateway.subscription.updateSubscription(subscriptionId, request);
            expect(response.subscriptionId).toEqual(subscriptionId);
            expect(response.quantity).toEqual(quantity);
        });
    });

    describe('getSubscription()', () => {
        test('should get a subscription', async () => {
            const subscriptionId = subscription.subscriptionId;
            const response: SubscriptionResponse = await gateway.subscription.getSubscription(subscriptionId);
            expect(response.subscriptionId).toEqual(subscriptionId);
        });
    });

    describe('getAllSubscriptions()', () => {
        test('should get all subscriptions', async () => {
            const response: SubscriptionListResponse = await gateway.subscription.getAllSubscriptions();
            expect(response.subscriptions.length).toBeGreaterThan(0);
        });
    });

    /**
     * Subscription Charges
     */

    describe('createMerchantManagedSubscriptionCharge()', () => {
       test('should create a charge', async () => {
           const subscriptionId = merchantManagedSubscription.subscriptionId;
           const request: ChargeRequest = {
               currency: 'USD',
           };
           const response: ChargeResponse = await gateway.subscription.createMerchantManagedSubscriptionCharge(subscriptionId, request);
           expect(response.chargeId).toBeDefined();
       });
    });

    describe('getSubscriptionCharge()', () => {
        test('should get a subscription charge', async () => {
            const response: ChargeResponse = await gateway.subscription.getSubscriptionCharge(charge.transactionId);
            expect(response.chargeId).toBeDefined();
        });
    });

    describe('getAllSubscriptionCharges()', () => {
        test('should get all subscription charges', async () => {
            const response: ChargeListResponse = await gateway.subscription.getAllSubscriptionCharges(merchantManagedSubscription.subscriptionId);
            expect(response.charges.length).toBeGreaterThan(0);
        });
    });

});
