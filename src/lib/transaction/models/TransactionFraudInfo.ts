import { ShippingContactInfoRequest, ShippingContactInfoResponse } from '../../vaultedShopper/models/ShippingContactInfo';
import { UdfRequest, UdfResponse } from './Udf';

/**
 * Contains information used for fraud prevention
 */

export interface TransactionFraudInfoRequest {
    fraudSessionId: string;
    shopperIpAddress?: string;
    company?: string;
    shippingContactInfo?: ShippingContactInfoRequest;
    enterpriseSiteId?: string;
    enterpriseUdfs?: UdfRequest[];
}

export interface TransactionFraudInfoResponse {
    fraudSessionId: string;
    shopperIpAddress?: string;
    company?: string;
    shippingContactInfo?: ShippingContactInfoResponse;
    enterpriseSiteId?: string;
    enterpriseUdfs?: UdfResponse[];
}
