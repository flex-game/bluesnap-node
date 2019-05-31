import PaymentSourceResponse from '../paymentSource/PaymentSourceResponse';
import PayerInfoResponse from '../../../vaultedShopper/models/payerInfo/PayerInfoResponse';
import ChargeResponse from '../charge/ChargeResponse';
import FraudResultInfoResponse from '../../../transaction/models/fraudResultInfo/FraudResultInfoResponse';
import Level3DataResponse from '../../../transaction/models/level3Data/Level3DataResponse';
import ThreeDSecureResponse from '../../../transaction/models/threeDSecure/ThreeDSecureResponse';

/**
 * Contains information about a specific subscription
 */
export default interface SubscriptionResponse {
    subscriptionId: number;
    planId: number;
    vaultedShopperId: number;
    status: 'ACTIVE' | 'CANCELED' | 'SUSPENDED' | 'FINISHED';
    quantity: number;
    softDescriptor: string;
    descriptorPhoneNumber: string;
    chargeFrequency: 'ONCE' | 'DAILY' | 'WEEKLY' | 'EVERY 2 WEEKS' | 'MONTHLY' | 'EVERY 2 MONTHS' | 'QUARTERLY' | 'EVERY 6 MONTHS' | 'ANNUALLY' | 'EVERY 2 YEARS' | 'EVERY 3 YEARS';
    trialPeriodDays: number;
    overrideTrialPeriodDays: number;
    recurringChargeAmount: number;
    overrideRecurringChargeAmount: number;
    currency: string;
    initialChargeAmount: string;
    overrrideInitialChargeAmount: number;
    autoRenew: boolean;
    nextChargeDate: string;
    payerInfo: PayerInfoResponse;
    paymentSource: PaymentSourceResponse;
    charge: ChargeResponse;
    fraudResultInfo: FraudResultInfoResponse;
    level3Data: Level3DataResponse;
    threeDSecure: ThreeDSecureResponse;
    scheduled: boolean;
}
