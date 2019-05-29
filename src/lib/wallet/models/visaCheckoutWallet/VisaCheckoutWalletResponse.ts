import BillingContactInfoResponse from '../../../vaultedShopper/models/billingContactInfo/BillingContactInfoResponse';
import ShippingContactInfoResponse from '../../../vaultedShopper/models/shippingContactInfo/ShippingContactInfoResponse';
import CreditCardResponse from '../../../transaction/card/models/creditCard/CreditCardResponse';

export default interface VisaCheckoutWalletResponse {
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
