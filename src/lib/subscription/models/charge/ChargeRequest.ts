import PaymentSourceRequest from '../paymentSource/PaymentSourceRequest';
import ChargeInfoRequest from '../chargeInfo/ChargeInfoRequest';
import PayerInfoRequest from '../../../vaultedShopper/models/payerInfo/PayerInfoRequest';
import TransactionFraudInfoRequest from '../../../transaction/models/transactionFraudInfo/TransactionFraudInfoRequest';
import Level3DataRequest from '../../../transaction/models/level3Data/Level3DataRequest';
import ThreeDSecureRequest from '../../../transaction/models/threeDSecure/ThreeDSecureRequest';

/**
 * Contains information about a specific recurring subscription charge
 */
export default interface ChargeRequest {
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
