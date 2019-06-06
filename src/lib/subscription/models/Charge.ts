import { PayerInfoRequest } from '../../vaultedShopper/models/PayerInfo';
import { PaymentSourceRequest, PaymentSourceResponse } from './PaymentSource';
import { TransactionFraudInfoRequest } from '../../transaction/models/TransactionFraudInfo';
import { ChargeInfoRequest, ChargeInfoResponse } from './ChargeInfo';
import { Level3DataRequest, Level3DataResponse } from '../../transaction/models/Level3Data';
import { ThreeDSecureRequest, ThreeDSecureResponse } from '../../transaction/models/ThreeDSecure';
import { ValidatedResponse } from '../../errors/models/ValidatedResponse';
import { ProcessingInfoResponse } from '../../transaction/models/ProcessingInfo';
import { FraudResultInfoResponse } from '../../transaction/models/FraudResultInfo';
import { RefundsResponse } from '../../refund/models/Refunds';

/**
 * Contains information about a specific recurring subscription charge
 */

export interface ChargeRequest {
    amount: number;
    currency: string;
    vaultedShopperId?: number;
    payerInfo?: PayerInfoRequest;
    paymentSource?: PaymentSourceRequest;
    softDescriptor?: string;
    authorizedByShopper?: boolean;
    transactionFraudInfo?: TransactionFraudInfoRequest;
    chargeInfo?: ChargeInfoRequest;
    level3Data?: Level3DataRequest;
    threeDSecure?: ThreeDSecureRequest;
    scheduled?: boolean;
    merchantTransactionId?: string;
}

export interface ChargeResponse extends ValidatedResponse {
    chargeId: number;
    subscriptionId: number;
    planId: number;
    vaultedShopperId: number;
    transactionId: number;
    transactionDate: string;
    amount: number;
    currency: string;
    softDescriptor: string;
    paymentSource: PaymentSourceResponse;
    chargeInfo: ChargeInfoResponse;
    processingInfo: ProcessingInfoResponse;
    fraudResultInfo: FraudResultInfoResponse;
    refunds: RefundsResponse;
    level3Data: Level3DataResponse;
    threeDSecure: ThreeDSecureResponse;
    merchantTransactionId?: string;
}
