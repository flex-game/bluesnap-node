import {TransactionMetaDataRequest, TransactionMetaDataResponse} from '../../models/TransactionMetaData';
import {PayerInfoRequest, PayerInfoResponse} from '../../../vaultedShopper/models/PayerInfo';
import {FraudResultInfoResponse} from '../../models/FraudResultInfo';
import {ProcessingInfoResponse} from '../../models/ProcessingInfo';
import {ValidatedResponse} from '../../../errors/models/ValidatedResponse';
import {RefundsResponse} from '../../../refund/models/Refunds';
import {TransactionFraudInfoRequest} from '../../models/TransactionFraudInfo';

/**
 * Contains the information required to process a transaction with an alternative payment method
 */

export interface AltTransactionRequest {
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

export interface AltTransactionResponse extends ValidatedResponse {
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
