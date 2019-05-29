import ChargeResponse from '../charge/ChargeResponse';

/**
 * Contains a list of subscription charges
 */
export default interface ChargeListResponse {
    totalResults: number;
    lastPage: boolean;
    charges: ChargeResponse[];
}
