"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const querystring = require("querystring");
class SubscriptionGateway {
    constructor(http) {
        this.http = http;
    }
    /**
     * Plans
     */
    createPlan(plan) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/recurring/plans';
            const body = plan;
            return this.http.post(path, body);
        });
    }
    updatePlan(planId, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/recurring/plans/${planId}`;
            const body = updates;
            return this.http.put(path, body);
        });
    }
    getPlan(planId) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/recurring/plans/${planId}`;
            return this.http.get(path);
        });
    }
    getAllPlans(parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = querystring.stringify(parameters);
            const path = `/services/2/recurring/plans?${queryParams}`;
            return this.http.get(path);
        });
    }
    /**
     * Subscriptions
     */
    createSubscription(subscription) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/recurring/subscriptions';
            const body = subscription;
            return this.http.post(path, body);
        });
    }
    createMerchantManagedSubscription(subscription) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/recurring/ondemand';
            const body = subscription;
            return this.http.post(path, body);
        });
    }
    createMerchantManagedSubscriptionCharge(subscriptionId, charge) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/recurring/ondemand/${subscriptionId}`;
            const body = charge;
            return this.http.post(path, body);
        });
    }
    updateSubscription(subscriptionId, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/recurring/subscriptions/${subscriptionId}`;
            const body = updates;
            return this.http.put(path, body);
        });
    }
    getSubscription(subscriptionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/recurring/subscriptions/${subscriptionId}`;
            return this.http.get(path);
        });
    }
    getSubscriptionCharge(transactionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/recurring/subscriptions/charges/resolve?transactionid=${transactionId}`;
            return this.http.get(path);
        });
    }
    getSubscriptionSwitchCharge(subscriptionId, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = querystring.stringify(parameters);
            const path = `/services/2/recurring/subscriptions/${subscriptionId}/switch-charge-amount?${queryParams}`;
            return this.http.get(path);
        });
    }
    getAllSubscriptions(parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = querystring.stringify(parameters);
            const path = `/services/2/recurring/subscriptions?${queryParams}`;
            return this.http.get(path);
        });
    }
    getAllSubscriptionCharges(subscriptionId, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = querystring.stringify(parameters);
            const path = `/services/2/recurring/subscriptions/${subscriptionId}/charges?${queryParams}`;
            return this.http.get(path);
        });
    }
}
exports.SubscriptionGateway = SubscriptionGateway;
//# sourceMappingURL=SubscriptionGateway.js.map