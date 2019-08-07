import { ValidatedResponse } from '../../errors/models/ValidatedResponse';
import { CreditCardResponse } from '../../transaction/card/models/CreditCard';
import { BillingContactInfoResponse } from '../../vaultedShopper/models/BillingContactInfo';
import { ShippingContactInfoResponse } from '../../vaultedShopper/models/ShippingContactInfo';
export interface VisaCheckoutWalletRequest {
    walletType: string;
    callId: string;
}
export interface VisaCheckoutWalletResponse extends ValidatedResponse {
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
