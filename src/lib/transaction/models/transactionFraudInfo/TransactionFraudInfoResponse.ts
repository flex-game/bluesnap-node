import UdfResponse from '../udf/UdfResponse';
import ShippingContactInfoResponse from '../../../vaultedShopper/models/shippingContactInfo/ShippingContactInfoResponse';

/**
 * Contains information used for fraud prevention
 */
export default interface TransactionFraudInfoResponse {
    fraudSessionId: string;
    shopperIpAddress?: string;
    company?: string;
    shippingContactInfo?: ShippingContactInfoResponse;
    enterpriseSiteId?: string;
    enterpriseUdfs?: UdfResponse[];
}
