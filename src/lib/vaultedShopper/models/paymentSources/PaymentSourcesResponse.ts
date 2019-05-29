import BillingContactInfoResponse from '../billingContactInfo/BillingContactInfoResponse';
import CreditCardResponse from '../../../transaction/card/models/creditCard/CreditCardResponse';
import EcpDetailsResponse from '../ecpDetails/EcpDetailsResponse';
import SepaDirectDebitResponse from '../sepaDirectDebit/SepaDirectDebitResponse';
import EcpInfoResponse from '../ecpInfo/EcpInfoResponse';

/**
 * Contains payment source information for vaulted shoppers
 */
export default interface PaymentSourcesResponse {
    creditCardInfo?: [{
        billingContactInfo?: BillingContactInfoResponse;
        creditCard?: CreditCardResponse;
        pfToken?: string;
        status?: string;
    }];
    ecpDetails?: EcpDetailsResponse[];
    sepaDirectDebitInfo?: [{
        billingContactInfo?: BillingContactInfoResponse;
        sepaDirectDebit?: SepaDirectDebitResponse;
    }];
    ecpInfo?: EcpInfoResponse;
}
