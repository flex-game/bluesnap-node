import ChargeResponse from '../charge/ChargeResponse';
import ValidatedResponse from '../../../errors/models/ValidatedResponse';

/**
 * Contains a list of subscription charges
 */
export default interface ChargeListResponse extends ValidatedResponse {
    totalResults: number;
    lastPage: boolean;
    charges: ChargeResponse[];
}
