/**
 * Contains information required to process a PayPal transaction
 */

type PayPalTransactionType = 'AUTH_CAPTURE' | 'AUTH_ONLY' | 'CAPTURE' | 'SET_ORDER' | 'DO_ORDER';

export interface PayPalTransactionRequest {
    transactionType?: PayPalTransactionType;
    returnUrl?: string;
    cancelUrl?: string;
    reqConfirmShipping?: number;
    noShipping?: number;
    inContext?: boolean;
    recurring?: string;
    paypalSubscriptionId?: string;
    orderId?: string;
}

export interface PayPalTransactionResponse {
    paypalUrl: number;
    orderId: number;
    inContext: boolean;
    paypalSubscriptionId: string;
}
