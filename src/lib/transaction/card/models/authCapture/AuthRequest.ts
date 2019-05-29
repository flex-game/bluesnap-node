import ThreeDSecureRequest from '../../../models/threeDSecure/ThreeDSecureRequest';
import Level3DataRequest from '../../../models/level3Data/Level3DataRequest';
import CreditCardRequest from '../creditCard/CreditCardRequest';
import CardHolderInfoRequest from '../cardHolderInfo/CardHolderInfoRequest';
import WalletRequest from '../../../../wallet/models/wallet/WalletRequest';
import VendorsInfoRequest from '../../../../marketplace/models/vendorsInfo/VendorsInfoRequest';
import TransactionFraudInfoRequest from '../../../models/transactionFraudInfo/TransactionFraudInfoRequest';
import TransactionMetaDataRequest from '../../../models/transactionMetaData/TransactionMetaDataRequest';

export default interface AuthRequest {
    walletId?: number;
    wallet?: WalletRequest;
    amount: number;
    vaultedShopperId?: number;
    merchantTransactionId?: string;
    softDescriptor?: string;
    descriptorPhoneNumber?: string;
    vendorsInfo?: VendorsInfoRequest;
    cardHoldersInfo?: CardHolderInfoRequest;
    currency: string;
    transactionFraudInfo?: TransactionFraudInfoRequest;
    creditCard?: CreditCardRequest;
    cardTransactionType: string;
    threeDSecure?: ThreeDSecureRequest;
    transactionMetaData?: TransactionMetaDataRequest;
    pfToken?: string;
    level3Data?: Level3DataRequest;
    storeCard?: boolean;
}
