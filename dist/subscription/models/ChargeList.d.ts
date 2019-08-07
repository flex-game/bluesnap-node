import { ValidatedResponse } from '../../errors/models/ValidatedResponse';
import { ChargeResponse } from './Charge';
/**
 * Contains a list of subscription charges
 */
export interface ChargeListResponse extends ValidatedResponse {
    totalResults: number;
    lastPage: boolean;
    charges: ChargeResponse[];
}
