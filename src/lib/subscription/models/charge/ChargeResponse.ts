import PaymentSourceResponse from '../paymentSource/PaymentSourceResponse';
import ChargeInfoResponse from '../chargeInfo/ChargeInfoResponse';
import ProcessingInfoResponse from '../../../transaction/models/processingInfo/ProcessingInfoResponse';
import FraudResultInfoResponse from '../../../transaction/models/fraudResultInfo/FraudResultInfoResponse';
import RefundsResponse from '../../../refund/models/refunds/RefundsResponse';
import Level3DataResponse from '../../../transaction/models/level3Data/Level3DataResponse';
import ThreeDSecureResponse from '../../../transaction/models/threeDSecure/ThreeDSecureResponse';

/**
 * Contains information about a specific recurring subscription charge
 */
export default interface ChargeResponse {
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
