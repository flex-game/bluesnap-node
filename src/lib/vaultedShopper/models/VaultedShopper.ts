import {PaymentSourcesRequest, PaymentSourcesResponse} from './PaymentSources';
import {TransactionFraudInfoRequest, TransactionFraudInfoResponse} from '../../transaction/models/TransactionFraudInfo';
import {ValidatedResponse} from '../../errors/models/ValidatedResponse';
import {LastPaymentInfoResponse} from './LastPaymentInfo';
import {ShippingContactInfoResponse} from './ShippingContactInfo';
import {FraudResultInfoResponse} from '../../transaction/models/FraudResultInfo';

/**
 * Contains information about the vaulted shopper
 */

export interface VaultedShopperRequest {
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
    transactionFraudInfo?: TransactionFraudInfoRequest;
}

export interface VaultedShopperResponse extends ValidatedResponse {
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
