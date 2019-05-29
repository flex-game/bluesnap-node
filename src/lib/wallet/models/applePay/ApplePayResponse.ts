/**
 * Contains wallet information for Apple Pay
 */
export default interface ApplePayResponse {
    cardLastFourDigits: string;
    cardType: string;
    cardSubType: string;
    dpanExpirationMonth: string;
    dpanExpirationYear: string;
    dpanLastFourDigits: string;
}
