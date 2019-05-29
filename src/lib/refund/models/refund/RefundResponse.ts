import VendorsRefundInfoResponse from '../../../marketplace/models/vendorsRefundInfo/VendorsRefundInfoResponse';

/**
 * Contains refund details
 */
export default interface RefundResponse {
    amount: number;
    currency: string;
    date: string;
    refundTransactionId: number;
    vendorAmount: number;
    vendorsRefundInfo: VendorsRefundInfoResponse;
}
