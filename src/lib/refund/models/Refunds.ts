import { VendorsBalanceInfoResponse } from '../../marketplace/models/VendorsBalanceInfo';
import { RefundResponse } from './Refund';

/**
 * Contains existing refunds for this transaction
 */

export interface RefundsResponse {
    refund: RefundResponse[];
    balanceAmount: number;
    vendorBalanceAmount: number;
    vendorsBalanceInfo: VendorsBalanceInfoResponse;
}
