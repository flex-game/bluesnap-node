import BillingContactInfoRequest from '../billingContactInfo/BillingContactInfoRequest';
import CreditCardRequest from '../../../transaction/card/models/creditCard/CreditCardRequest';
import EcpDetailsRequest from '../ecpDetails/EcpDetailsRequest';
import EcpInfoRequest from '../ecpInfo/EcpInfoRequest';
import SepaDirectDebitRequest from '../sepaDirectDebit/SepaDirectDebitRequest';

/**
 * Contains payment source information for vaulted shoppers
 */
export default interface PaymentSourcesRequest {
    creditCardInfo?: [{
        billingContactInfo?: BillingContactInfoRequest;
        creditCard?: CreditCardRequest;
        pfToken?: string;
        status?: string;
    }];
    ecpDetails?: EcpDetailsRequest[];
    sepaDirectDebitInfo?: [{
        billingContactInfo?: BillingContactInfoRequest;
        sepaDirectDebit?: SepaDirectDebitRequest;
    }];
    ecpInfo?: EcpInfoRequest;
}
