import { PayerInfoRequest, PayerInfoResponse } from '../../vaultedShopper/models/PayerInfo';
import { PaymentSourceRequest, PaymentSourceResponse } from './PaymentSource';
import { TransactionFraudInfoRequest } from '../../transaction/models/TransactionFraudInfo';
import { Level3DataRequest, Level3DataResponse } from '../../transaction/models/Level3Data';
import { ThreeDSecureRequest, ThreeDSecureResponse } from '../../transaction/models/ThreeDSecure';
import { ChargeFrequency } from './Plan';
import { ValidatedResponse } from '../../errors/models/ValidatedResponse';
import { ChargeResponse } from './Charge';
import { FraudResultInfoResponse } from '../../transaction/models/FraudResultInfo';

/**
 * Contains information about a specific subscription
 */


export interface SubscriptionRequest {
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

export interface SubscriptionResponse extends ValidatedResponse {
    subscriptionId: number;
    planId: number;
    vaultedShopperId: number;
    status: 'ACTIVE' | 'CANCELED' | 'SUSPENDED' | 'FINISHED';
    quantity: number;
    softDescriptor: string;
    descriptorPhoneNumber: string;
    chargeFrequency: ChargeFrequency;
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
