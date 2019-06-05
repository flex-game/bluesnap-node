/**
 * Contains the details for a specific credit card, such as the card number and expiration date
 */

export interface CreditCardRequest {
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

export interface CreditCardResponse {
    cardLastFourDigits: string;
    cardType: string;
    cardSubType: string;
    cardCategory: string;
    expirationMonth: string;
    expirationYear: string;
    issueNumber: string;
}
