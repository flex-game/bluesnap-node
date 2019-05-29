/**
 * Contains the details for a specific credit card, such as the card number and expiration date
 */
export default interface CreditCardRequest {
    cardNumber?: string;
    encryptedCardNumber?: string;
    cardLastFourDigits?: string;
    cardType?: string;
    expirationMonth?: string;
    expirationYear?: string;
    securityCode?: string;
    encryptedSecurityCode?: string;
    securityCodePfToken?: string;
}
