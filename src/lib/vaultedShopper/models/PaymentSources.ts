import { BillingContactInfoRequest, BillingContactInfoResponse } from './BillingContactInfo';
import { CreditCardRequest, CreditCardResponse } from '../../transaction/card/models/CreditCard';
import { EcpDetailsRequest, EcpDetailsResponse } from './EcpDetails';
import { SepaDirectDebitRequest, SepaDirectDebitResponse } from './SepaDirectDebit';
import { EcpInfoRequest, EcpInfoResponse } from './EcpInfo';

/**
 * Contains payment source information for vaulted shoppers
 */


export interface PaymentSourcesRequest {
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

export interface PaymentSourcesResponse {
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
