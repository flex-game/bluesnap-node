import VendorsInfoRequest from '../../../../marketplace/models/vendorsInfo/VendorsInfoRequest';
import TransactionMetaDataRequest from '../../../models/transactionMetaData/TransactionMetaDataRequest';

export default interface CaptureRequest {
    amount? : number;
    softDescriptor?: string;
    vendorsInfo?: VendorsInfoRequest;
    cardTransactionType: string;
    transactionMetaData?: TransactionMetaDataRequest;
    transactionId: string; // Must be the transactionId from the AuthOnly response
}
