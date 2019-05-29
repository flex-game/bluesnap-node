import ShippingContactInfoRequest from '../../../vaultedShopper/models/shippingContactInfo/ShippingContactInfoRequest';
import UdfRequest from '../udf/UdfRequest';

/**
 * Contains information used for fraud prevention
 */
export default interface TransactionFraudInfoRequest {
    fraudSessionId: string;
    shopperIpAddress?: string;
    company?: string;
    shippingContactInfo?: ShippingContactInfoRequest;
    enterpriseSiteId?: string;
    enterpriseUdfs?: UdfRequest[];
}
