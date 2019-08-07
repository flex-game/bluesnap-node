import { HttpClient } from '../http/HttpClient';
import { PlanRequest, PlanResponse } from './models/Plan';
import { PlanListResponse } from './models/PlanList';
import { SubscriptionRequest, SubscriptionResponse } from './models/Subscription';
import { ChargeRequest, ChargeResponse } from './models/Charge';
import { SubscriptionListResponse } from './models/SubscriptionList';
import { ChargeListResponse } from './models/ChargeList';
export declare class SubscriptionGateway {
    private http;
    constructor(http: HttpClient);
    /**
     * Plans
     */
    createPlan(plan: PlanRequest): Promise<PlanResponse>;
    updatePlan(planId: number, updates: PlanRequest): Promise<PlanResponse>;
    getPlan(planId: number): Promise<PlanResponse>;
    getAllPlans(parameters?: GetAllPlansQueryParmas): Promise<PlanListResponse>;
    /**
     * Subscriptions
     */
    createSubscription(subscription: SubscriptionRequest): Promise<SubscriptionResponse>;
    createMerchantManagedSubscription(subscription: SubscriptionRequest): Promise<SubscriptionResponse>;
    createMerchantManagedSubscriptionCharge(subscriptionId: number, charge: ChargeRequest): Promise<ChargeResponse>;
    updateSubscription(subscriptionId: number, updates: SubscriptionRequest): Promise<SubscriptionResponse>;
    getSubscription(subscriptionId: number): Promise<SubscriptionResponse>;
    getSubscriptionCharge(transactionId: number): Promise<ChargeResponse>;
    getSubscriptionSwitchCharge(subscriptionId: number, parameters?: GetSubscriptionSwitchChargeQueryParams): Promise<ChargeResponse>;
    getAllSubscriptions(parameters?: GetAllSubscriptionsQueryParams): Promise<SubscriptionListResponse>;
    getAllSubscriptionCharges(subscriptionId: number, parameters?: GetAllSubscriptionChargesQueryParams): Promise<ChargeListResponse>;
}
interface GetAllPlansQueryParmas {
    pagesize?: number;
    after?: number;
    before?: number;
    gettotal?: boolean;
    fulldescription?: boolean;
    status?: 'ACTIVE' | 'INACTIVE';
}
interface GetAllSubscriptionsQueryParams {
    pagesize?: number;
    after?: number;
    before?: number;
    gettotal?: boolean;
    fulldescription?: boolean;
    status?: 'ACTIVE' | 'CANCELED' | 'SUSPENDED' | 'DELETED';
    shopperid?: number;
    planid?: number;
}
interface GetAllSubscriptionChargesQueryParams {
    pagesize?: number;
    after?: number;
    before?: number;
    gettotal?: boolean;
    fulldescription?: boolean;
}
interface GetSubscriptionSwitchChargeQueryParams {
    newplanid: number;
    newquantity?: number;
}
export {};
