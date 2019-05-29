import PayerInfoRequest from '../../../../vaultedShopper/models/payerInfo/PayerInfoRequest';
import TransactionMetaDataRequest from '../../../models/transactionMetaData/TransactionMetaDataRequest';
import TransactionFraudInfoRequest from '../../../models/transactionFraudInfo/TransactionFraudInfoRequest';

/**
 * Contains the information required to process a transaction with an alternative payment method
 */
export default interface AltTransactionRequest {
    amount: number;
    payerInfo?: PayerInfoRequest;
    vaultedShopperId?: number;
    merchantTransactionId?: string;
    softDescriptor?: string;
    transactionDescription?: string;
    currency: string;
    transactionMetaData?: TransactionMetaDataRequest;
    transactionFraudInfo?: TransactionFraudInfoRequest;
}
