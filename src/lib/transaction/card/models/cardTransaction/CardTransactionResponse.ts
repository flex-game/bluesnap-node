import TransactionFraudInfoResponse from '../../../models/transactionFraudInfo/TransactionFraudInfoResponse';
import VendorsInfoResponse from '../../../../marketplace/models/vendorsInfo/VendorsInfoResponse';
import ThreeDSecureResponse from '../../../models/threeDSecure/ThreeDSecureResponse';
import TransactionMetaDataResponse from '../../../models/transactionMetaData/TransactionMetaDataResponse';
import Level3DataResponse from '../../../models/level3Data/Level3DataResponse';
import FraudResultInfoResponse from '../../../models/fraudResultInfo/FraudResultInfoResponse';
import ProcessingInfoResponse from '../../../models/processingInfo/ProcessingInfoResponse';
import CreditCardResponse from '../creditCard/CreditCardResponse';
import CardHolderInfoResponse from '../cardHolderInfo/CardHolderInfoResponse';
import WalletResponse from '../../../../wallet/models/wallet/WalletResponse';

/**
 * Contains the information required to process a credit card transaction
 */
export default interface CardTransactionResponse {
    walletId?: number;
    wallet?: WalletResponse;
    amount: number;
    vaultedShopperId: number;
    merchantTransactionId?: string;
    softDescriptor?: string;
    descriptorPhoneNumber?: string;
    vendorsInfo?: VendorsInfoResponse;
    cardHoldersInfo?: CardHolderInfoResponse;
    currency: string;
    transactionFraudInfo?: TransactionFraudInfoResponse;
    creditCard?: CreditCardResponse;
    cardTransactionType: string;
    threeDSecure?: ThreeDSecureResponse;
    transactionMetaData?: TransactionMetaDataResponse;
    pfToken?: string;
    level3Data?: Level3DataResponse;
    storeCard?: boolean;
    processingInfo: ProcessingInfoResponse;
    fraudResultInfo: FraudResultInfoResponse;
    transactionId: string;
}
