/**
 * Contains information required to process a PayPal transaction
 */
export default interface PayPalTransactionRequest {
    transactionType?: 'AUTH_CAPTURE' | 'AUTH_ONLY' | 'CAPTURE' | 'SET_ORDER' | 'DO_ORDER';
    returnUrl?: string;
    cancelUrl?: string;
    reqConfirmShipping?: number;
    noShipping?: number;
    inContext?: boolean;
    recurring?: string;
    paypalSubscriptionId?: string;
    orderId?: string;
}
