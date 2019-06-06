/**
 * Contains the information required to process a credit card transaction
 */
import { ValidatedResponse } from '../../../errors/models/ValidatedResponse';
import { Level3DataResponse } from '../../models/Level3Data';
import { CardHolderInfoResponse } from './CardHolderInfo';
import { FraudResultInfoResponse } from '../../models/FraudResultInfo';
import { TransactionMetaDataResponse } from '../../models/TransactionMetaData';
import { ThreeDSecureResponse } from '../../models/ThreeDSecure';
import { WalletResponse } from '../../../wallet/models/Wallet';
import { TransactionFraudInfoResponse } from '../../models/TransactionFraudInfo';
import { CreditCardResponse } from './CreditCard';
import { VendorsInfoResponse } from '../../../marketplace/models/VendorsInfo';
import { ProcessingInfoResponse } from '../../models/ProcessingInfo';

export interface CardTransactionResponse extends ValidatedResponse {
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
