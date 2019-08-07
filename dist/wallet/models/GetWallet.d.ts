import { CreditCardResponse } from '../../transaction/card/models/CreditCard';
import { BillingContactInfoResponse } from '../../vaultedShopper/models/BillingContactInfo';
import { ShippingContactInfoResponse } from '../../vaultedShopper/models/ShippingContactInfo';
export interface GetWalletResponse {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    creditCard: CreditCardResponse;
    billingContactInfo: BillingContactInfoResponse;
    shippingContactInfo: ShippingContactInfoResponse;
}
