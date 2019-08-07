export declare class TestCards {
    /** Amex * */
    readonly AMEX_SUCCESS: TestCard;
    readonly AMEX_FAILURE: TestCard;
    /** Discover * */
    readonly DISCOVER_SUCCESS: TestCard;
    readonly DISCOVER_FAILURE: TestCard;
    /** JCB * */
    readonly JCB_SUCCESS: TestCard;
    readonly JCB_FAILURE: TestCard;
    /** MASTERCARD * */
    readonly MASTERCARD_SUCCESS1: TestCard;
    readonly MASTERCARD_SUCCESS2: TestCard;
    readonly MASTERCARD_SUCCESS3: TestCard;
    readonly MASTERCARD_FAILURE: TestCard;
    /** VISA * */
    readonly VISA_SUCCESS1: TestCard;
    readonly VISA_SUCCESS2: TestCard;
    readonly VISA_FAILURE: TestCard;
}
interface TestCard {
    cardType: string;
    cardNumber: string;
    expirationMonth: string;
    expirationYear: string;
    cvvCode: string;
}
export {};
