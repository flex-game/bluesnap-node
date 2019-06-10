export class TestCards {
    /** Amex * */
    public readonly AMEX_SUCCESS: TestCard = {
        cardType: 'Amex', cardNumber: '374245455400126', expirationMonth: '05', expirationYear: '2023', cvvCode: '1234',
    };

    public readonly AMEX_FAILURE: TestCard = {
        cardType: 'Amex', cardNumber: '378282246310005', expirationMonth: '05', expirationYear: '2023', cvvCode: '1234',
    };

    /** Discover * */
    public readonly DISCOVER_SUCCESS: TestCard = {
        cardType: 'Discover', cardNumber: '60115564485789458', expirationMonth: '12', expirationYear: '2023', cvvCode: '123',
    };

    public readonly DISCOVER_FAILURE: TestCard = {
        cardType: 'Discover', cardNumber: '6011000991300009', expirationMonth: '12', expirationYear: '2023', cvvCode: '123',
    };

    /** JCB * */
    public readonly JCB_SUCCESS: TestCard = {
        cardType: 'JCB', cardNumber: '3566000020000410', expirationMonth: '02', expirationYear: '2023', cvvCode: '123',
    };

    public readonly JCB_FAILURE: TestCard = {
        cardType: 'JCB', cardNumber: '3566000020000410', expirationMonth: '03', expirationYear: '2023', cvvCode: '123',
    };

    /** MASTERCARD * */
    public readonly MASTERCARD_SUCCESS1: TestCard = {
        cardType: 'MASTERCARD', cardNumber: '5425233430109903', expirationMonth: '04', expirationYear: '2023', cvvCode: '123',
    };

    public readonly MASTERCARD_SUCCESS2: TestCard = {
        cardType: 'MASTERCARD', cardNumber: '2222420000001113', expirationMonth: '08', expirationYear: '2020', cvvCode: '123',
    };

    public readonly MASTERCARD_SUCCESS3: TestCard = {
        cardType: 'MASTERCARD', cardNumber: '2222420000001113', expirationMonth: '09', expirationYear: '2020', cvvCode: '123',
    };

    public readonly MASTERCARD_FAILURE: TestCard = {
        cardType: 'MASTERCARD', cardNumber: '5425233430109903', expirationMonth: '12', expirationYear: '2004', cvvCode: '123',
    };

    /** VISA * */
    public readonly VISA_SUCCESS1: TestCard = {
        cardType: 'VISA', cardNumber: '4263982640269299', expirationMonth: '02', expirationYear: '2023', cvvCode: '837',
    };

    public readonly VISA_SUCCESS2: TestCard = {
        cardType: 'VISA', cardNumber: '4263982640269299', expirationMonth: '04', expirationYear: '2023', cvvCode: '738',
    };

    public readonly VISA_FAILURE: TestCard = {
        cardType: 'VISA', cardNumber: '4917484589897107', expirationMonth: '01', expirationYear: '2023', cvvCode: '123',
    };
}

interface TestCard {
    cardType: string;
    cardNumber: string;
    expirationMonth: string;
    expirationYear: string;
    cvvCode: string;
}
