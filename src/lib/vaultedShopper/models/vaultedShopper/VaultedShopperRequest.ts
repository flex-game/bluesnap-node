import TransactionFraudInfoResponse from '../../../transaction/models/transactionFraudInfo/TransactionFraudInfoResponse';
import PaymentSourcesRequest from '../paymentSources/PaymentSourcesRequest';

/**
 * Contains information about the vaulted shopper
 */
export default interface VaultedShopperRequest {
    paymentSources?: PaymentSourcesRequest;
    firstName?: string;
    lastName?: string;
    softDescriptor?: string;
    descriptorPhoneNumber?: string;
    merchantShopperId?: string;
    country?: string;
    state?: string;
    city?: string;
    address?: string;
    address2?: string;
    email?: string;
    zip?: string;
    phone?: string;
    companyName?: string;
    shopperCurrency?: string;
    shippingContactInfo?: string;
    walletId?: number;
    transactionFraudInfo?: TransactionFraudInfoResponse;
}
