"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestCards {
    constructor() {
        /** Amex * */
        this.AMEX_SUCCESS = {
            cardType: 'Amex', cardNumber: '374245455400126', expirationMonth: '05', expirationYear: '2023', cvvCode: '1234',
        };
        this.AMEX_FAILURE = {
            cardType: 'Amex', cardNumber: '378282246310005', expirationMonth: '05', expirationYear: '2023', cvvCode: '1234',
        };
        /** Discover * */
        this.DISCOVER_SUCCESS = {
            cardType: 'Discover', cardNumber: '60115564485789458', expirationMonth: '12', expirationYear: '2023', cvvCode: '123',
        };
        this.DISCOVER_FAILURE = {
            cardType: 'Discover', cardNumber: '6011000991300009', expirationMonth: '12', expirationYear: '2023', cvvCode: '123',
        };
        /** JCB * */
        this.JCB_SUCCESS = {
            cardType: 'JCB', cardNumber: '3566000020000410', expirationMonth: '02', expirationYear: '2023', cvvCode: '123',
        };
        this.JCB_FAILURE = {
            cardType: 'JCB', cardNumber: '3566000020000410', expirationMonth: '03', expirationYear: '2023', cvvCode: '123',
        };
        /** MASTERCARD * */
        this.MASTERCARD_SUCCESS1 = {
            cardType: 'MASTERCARD', cardNumber: '5425233430109903', expirationMonth: '04', expirationYear: '2023', cvvCode: '123',
        };
        this.MASTERCARD_SUCCESS2 = {
            cardType: 'MASTERCARD', cardNumber: '2222420000001113', expirationMonth: '08', expirationYear: '2020', cvvCode: '123',
        };
        this.MASTERCARD_SUCCESS3 = {
            cardType: 'MASTERCARD', cardNumber: '2222420000001113', expirationMonth: '09', expirationYear: '2020', cvvCode: '123',
        };
        this.MASTERCARD_FAILURE = {
            cardType: 'MASTERCARD', cardNumber: '5425233430109903', expirationMonth: '12', expirationYear: '2004', cvvCode: '123',
        };
        /** VISA * */
        this.VISA_SUCCESS1 = {
            cardType: 'VISA', cardNumber: '4263982640269299', expirationMonth: '02', expirationYear: '2023', cvvCode: '837',
        };
        this.VISA_SUCCESS2 = {
            cardType: 'VISA', cardNumber: '4263982640269299', expirationMonth: '04', expirationYear: '2023', cvvCode: '738',
        };
        this.VISA_FAILURE = {
            cardType: 'VISA', cardNumber: '4917484589897107', expirationMonth: '01', expirationYear: '2023', cvvCode: '123',
        };
    }
}
exports.TestCards = TestCards;
//# sourceMappingURL=TestCards.js.map