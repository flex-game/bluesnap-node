import * as querystring from 'querystring';
import HttpClient from '../http/HttpClient';
import PlanRequest from './models/plan/PlanRequest';
import PlanResponse from './models/plan/PlanResponse';
import PlanListResponse from './models/planList/PlanListResponse';
import SubscriptionRequest from './models/subscription/SubscriptionRequest';
import SubscriptionResponse from './models/subscription/SubscriptionResponse';
import SubscriptionListResponse from './models/subscriptionList/SubscriptionListResponse';
import ChargeResponse from './models/charge/ChargeResponse';
import ChargeListResponse from './models/chargeList/ChargeListResponse';
import ChargeRequest from './models/charge/ChargeRequest';

export default class SubscriptionGateway {
    private http: HttpClient;

    public constructor(http: HttpClient) {
        this.http = http;
    }

    /**
     * Plans
     */

    public async createPlan(plan: PlanRequest): Promise<PlanResponse> {
        const path = '/services/2/recurring/plans';
        const body = plan;
        return this.http.post(path, body);
    }

    public async updatePlan(planId: number, updates: PlanRequest): Promise<PlanResponse> {
        const path = `/services/2/recurring/plans/${planId}`;
        const body = updates;
        return this.http.put(path, body);
    }

    public async getPlan(planId: number): Promise<PlanResponse> {
        const path = `/services/2/recurring/plans/${planId}`;
        return this.http.get(path);
    }

    public async getAllPlans(parameters?: GetAllPlansQueryParmas): Promise<PlanListResponse> {
        const queryParams = querystring.stringify(parameters);
        const path = `/services/2/recurring/plans?${queryParams}`;
        return this.http.get(path);
    }

    /**
     * Subscriptions
     */

    public async createSubscription(subscription: SubscriptionRequest): Promise<SubscriptionResponse> {
        const path = '/services/2/recurring/subscriptions';
        const body = subscription;
        return this.http.post(path, body);
    }

    public async createMerchantManagedSubscription(subscription: SubscriptionRequest): Promise<SubscriptionResponse> {
        const path = '/services/2/recurring/ondemand';
        const body = subscription;
        return this.http.post(path, body);
    }

    public async createMerchantManagedSubscriptionCharge(subscriptionId: number, charge: ChargeRequest): Promise<ChargeResponse> {
        const path = `/services/2/recurring/ondemand/${subscriptionId}`;
        const body = charge;
        return this.http.post(path, body);
    }

    public async updateSubscription(subscriptionId: number, updates: SubscriptionRequest): Promise<SubscriptionResponse> {
        const path = `/services/2/recurring/subscriptions/${subscriptionId}`;
        const body = updates;
        return this.http.put(path, body);
    }

    public async getSubscription(subscriptionId: number): Promise<SubscriptionResponse> {
        const path = `/services/2/recurring/subscriptions/${subscriptionId}`;
        return this.http.get(path);
    }

    public async getSubscriptionCharge(transactionId: number): Promise<ChargeResponse> {
        const path = `/services/2/recurring/subscriptions/charges/resolve?transactionid=${transactionId}`;
        return this.http.get(path);
    }

    public async getSubscriptionSwitchCharge(subscriptionId: number, parameters?: GetSubscriptionSwitchChargeQueryParams): Promise<ChargeResponse> {
        const queryParams = querystring.stringify(parameters);
        const path = `/services/2/recurring/subscriptions/${subscriptionId}/switch-charge-amount?${queryParams}`;
        return this.http.get(path);
    }

    public async getAllSubscriptions(parameters?: GetAllSubscriptionsQueryParams): Promise<SubscriptionListResponse> {
        const queryParams = querystring.stringify(parameters);
        const path = `/services/2/recurring/subscriptions?${queryParams}`;
        return this.http.get(path);
    }

    public async getAllSubscriptionCharges(subscriptionId: number, parameters?: GetAllSubscriptionChargesQueryParams): Promise<ChargeListResponse> {
        const queryParams = querystring.stringify(parameters);
        const path = `/services/2/recurring/subscriptions/${subscriptionId}/charges?${queryParams}`;
        return this.http.get(path);
    }
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
