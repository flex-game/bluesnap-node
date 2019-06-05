import {VendorsRefundInfoResponse} from '../../marketplace/models/VendorsRefundInfo';

/**
 * Contains refund details
 */

export interface RefundResponse {
    amount: number;
    currency: string;
    date: string;
    refundTransactionId: number;
    vendorAmount: number;
    vendorsRefundInfo: VendorsRefundInfoResponse;
}
