import BillingContactInfoResponse from '../../../vaultedShopper/models/billingContactInfo/BillingContactInfoResponse';
import ShippingContactInfoResponse from '../../../vaultedShopper/models/shippingContactInfo/ShippingContactInfoResponse';
import CreditCardResponse from '../../../transaction/card/models/creditCard/CreditCardResponse';
import ValidatedResponse from '../../../errors/models/ValidatedResponse';

export default interface VisaCheckoutWalletResponse extends ValidatedResponse {
    walletId: number;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    phone: string;
    creditCard: CreditCardResponse;
    billingContactInfo: BillingContactInfoResponse;
    shippingContactInfo: ShippingContactInfoResponse;
}
