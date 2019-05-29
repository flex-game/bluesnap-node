import VendorsBalanceInfoResponse from '../../../marketplace/models/vendorsBalanceInfo/VendorsBalanceInfoResponse';
import RefundResponse from '../refund/RefundResponse';

/**
 * Contains existing refunds for this transaction
 */
export default interface RefundsResponse {
    refund: RefundResponse[];
    balanceAmount: number;
    vendorBalanceAmount: number;
    vendorsBalanceInfo: VendorsBalanceInfoResponse;
}
