/**
 * Contains tokenized card information
 */

export interface TokenizedCardResponse {
    cardLastFourDigits: string;
    cardType: string;
    cardSubType: string;
    dpanExpirationMonth: string;
    dpanExpirationYear: string;
    dpanLastFourDigits: string;
}
