import * as faker from 'faker';
import gateway from '../bluesnap/BlueSnapTestClient';
import {PlanListResponse} from '../../../src/lib/subscription/models/PlanList';
import {SubscriptionRequest, SubscriptionResponse} from '../../../src/lib/subscription/models/Subscription';
import {ChargeRequest, ChargeResponse} from '../../../src/lib/subscription/models/Charge';
import {PlanRequest, PlanResponse} from '../../../src/lib/subscription/models/Plan';
import {SubscriptionListResponse} from '../../../src/lib/subscription/models/SubscriptionList';
import {ChargeListResponse} from '../../../src/lib/subscription/models/ChargeList';

describe('SubscriptionGateway Integration Test', () => {
    let plan: PlanResponse;
    let subscription: SubscriptionResponse;
    let merchantManagedSubscription: SubscriptionResponse;
    let charge: ChargeResponse;

    const mockPayerInfo = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
    };

    const mockPaymentSource = {
        creditCardInfo: {
            creditCard: {
                expirationMonth: '07',
                expirationYear: '2019',
                cardNumber: '4111111111111111',
                securityCode: '111',
            },
        },
    };

    async function createPlansAndSubscriptions() {
        plan = await gateway.subscription.createPlan({
            chargeFrequency: 'ANNUALLY',
            name: faker.random.word(),
            currency: 'USD',
            recurringChargeAmount: faker.random.number(),
        });

        subscription = await gateway.subscription.createSubscription({
            planId: plan.planId,
            payerInfo: mockPayerInfo,
            paymentSource: mockPaymentSource,
        });

        merchantManagedSubscription = await gateway.subscription.createMerchantManagedSubscription({
            planId: plan.planId,
            payerInfo: mockPayerInfo,
            paymentSource: mockPaymentSource,
        });

        charge = await gateway.subscription.createMerchantManagedSubscriptionCharge(merchantManagedSubscription.subscriptionId, {
            amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
            currency: 'USD',
        });
    }

    beforeAll(createPlansAndSubscriptions, 15000);

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
            const { planId } = plan;
            const maxNumberOfCharges = faker.random.number().toString();
            const request: PlanRequest = {
                maxNumberOfCharges,
                chargeFrequency: plan.chargeFrequency,
                name: plan.name,
                currency: plan.currency,
                recurringChargeAmount: plan.recurringChargeAmount,
            };
            const response: PlanResponse = await gateway.subscription.updatePlan(planId, request);
            expect(response.planId).toEqual(planId);
            expect(response.maxNumberOfCharges).toEqual(maxNumberOfCharges);
        });
    });

    describe('getPlan()', () => {
        test('should get a plan', async () => {
            const { planId } = plan;
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
                payerInfo: mockPayerInfo,
                paymentSource: mockPaymentSource,
            };
            const response: SubscriptionResponse = await gateway.subscription.createSubscription(request);
            expect(response.planId).toBeDefined();
        });
    });

    describe('updateSubscription()', () => {
        test('should update a subscription', async () => {
            const { subscriptionId } = subscription;
            const quantity = faker.random.number();
            const request: SubscriptionRequest = {
                quantity,
                planId: plan.planId,
                payerInfo: mockPayerInfo,
                paymentSource: mockPaymentSource,
            };
            const response: SubscriptionResponse = await gateway.subscription.updateSubscription(subscriptionId, request);
            expect(response.subscriptionId).toEqual(subscriptionId);
            expect(response.quantity).toEqual(quantity);
        });
    });

    describe('getSubscription()', () => {
        test('should get a subscription', async () => {
            const { subscriptionId } = subscription;
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
            const { subscriptionId } = merchantManagedSubscription;
            const request: ChargeRequest = {
                amount: faker.random.number({ min: 0, max: 1000, precision: 0.01 }),
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
