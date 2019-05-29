/**
 * Contains the details for a specific credit card, such as the card number and expiration date
 */
export default interface CreditCardResponse {
    cardLastFourDigits: string;
    cardType: string;
    cardSubType: string;
    cardCategory: string;
    expirationMonth: string;
    expirationYear: string;
    issueNumber: string;
}
