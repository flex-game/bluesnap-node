import CreditCardResponse from '../../../transaction/card/models/creditCard/CreditCardResponse';
import BillingContactInfoResponse from '../../../vaultedShopper/models/billingContactInfo/BillingContactInfoResponse';
import ShippingContactInfoResponse from '../../../vaultedShopper/models/shippingContactInfo/ShippingContactInfoResponse';

export default interface GetWalletResponse {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    creditCard: CreditCardResponse;
    billingContactInfo: BillingContactInfoResponse;
    shippingContactInfo: ShippingContactInfoResponse;
}
