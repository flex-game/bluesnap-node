import TransactionMetaDataResponse from '../../../models/transactionMetaData/TransactionMetaDataResponse';
import ProcessingInfoResponse from '../../../models/processingInfo/ProcessingInfoResponse';
import FraudResultInfoResponse from '../../../models/fraudResultInfo/FraudResultInfoResponse';
import RefundsResponse from '../../../../refund/models/refunds/RefundsResponse';
import PayerInfoResponse from '../../../../vaultedShopper/models/payerInfo/PayerInfoResponse';

/**
 * Contains the information required to process a transaction with an alternative payment method
 */
export default interface AltTransactionResponse {
    amount: number;
    payerInfo: PayerInfoResponse;
    vaultedShopperId: number;
    merchantTransactionId: string;
    processingInfo: ProcessingInfoResponse;
    softDescriptor: string;
    currency: string;
    transactionMetaData: TransactionMetaDataResponse;
    fraudResultInfo: FraudResultInfoResponse;
    subscriptionId: number;
    transactionId: string;
    refunds: RefundsResponse;
}
