import PaymentSourceRequest from '../paymentSource/PaymentSourceRequest';
import PayerInfoRequest from '../../../vaultedShopper/models/payerInfo/PayerInfoRequest';
import TransactionFraudInfoRequest from '../../../transaction/models/transactionFraudInfo/TransactionFraudInfoRequest';
import Level3DataRequest from '../../../transaction/models/level3Data/Level3DataRequest';
import ThreeDSecureRequest from '../../../transaction/models/threeDSecure/ThreeDSecureRequest';

/**
 * Contains information about a specific subscription
 */
export default interface SubscriptionRequest {
    planId: number;
    vaultedShopperId?: number;
    payerInfo?: PayerInfoRequest;
    paymentSource?: PaymentSourceRequest;
    quantity?: number;
    softDescriptor?: string;
    descriptorPhoneNumber?: string;
    overrideTrialPeriodDays?: number;
    overrideRecurringChargeAmount?: number;
    overrrideInitialChargeAmount?: number;
    transactionFraudInfo?: TransactionFraudInfoRequest;
    autoRenew?: boolean;
    authorizedByShopper?: boolean;
    nextChargeDate?: string;
    status?: 'ACTIVE' | 'CANCELED';
    level3Data?: Level3DataRequest;
    threeDSecure?: ThreeDSecureRequest;
}
