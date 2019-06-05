/**
 * Contains wallet information for Apple Pay
 */

export interface ApplePayRequest {
    encodedPaymentToken: string;
}

export interface ApplePayResponse {
    cardLastFourDigits: string;
    cardType: string;
    cardSubType: string;
    dpanExpirationMonth: string;
    dpanExpirationYear: string;
    dpanLastFourDigits: string;
}
