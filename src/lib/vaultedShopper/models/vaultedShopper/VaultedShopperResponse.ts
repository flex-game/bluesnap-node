import FraudResultInfoResponse from '../../../transaction/models/fraudResultInfo/FraudResultInfoResponse';
import TransactionFraudInfoResponse from '../../../transaction/models/transactionFraudInfo/TransactionFraudInfoResponse';
import ShippingContactInfoResponse from '../shippingContactInfo/ShippingContactInfoResponse';
import LastPaymentInfoResponse from '../lastPaymentInfo/LastPaymentInfoResponse';
import PaymentSourcesResponse from '../paymentSources/PaymentSourcesResponse';

/**
 * Contains information about the vaulted shopper
 */
export default interface VaultedShopperResponse {
    vaultedShopperId: number;
    firstName: string;
    lastName: string;
    country: string;
    state: string;
    city: string;
    address: string;
    address2: string;
    email: string;
    zip: string;
    phone: string;
    companyName: string;
    shopperCurrency: string;
    personalIdentificationNumber: string;
    softDescriptor: string;
    descriptorPhoneNumber: string;
    paymentSources: PaymentSourcesResponse;
    lastPaymentInfo: LastPaymentInfoResponse;
    shippingContactInfo: ShippingContactInfoResponse;
    transactionFraudInfo: TransactionFraudInfoResponse;
    fraudResultInfo: FraudResultInfoResponse;
}
