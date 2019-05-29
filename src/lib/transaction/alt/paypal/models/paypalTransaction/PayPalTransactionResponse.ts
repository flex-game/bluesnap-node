/**
 * Contains information required to process a PayPal transaction
 */
export default interface PayPalTransactionResponse {
    paypalUrl: number;
    orderId: number;
    inContext: boolean;
    paypalSubscriptionId: string;
}
