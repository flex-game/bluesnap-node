import { ValidatedResponse } from '../../errors/models/ValidatedResponse';
import { PlanResponse } from './Plan';

/**
 * Contains a list of subscription billing plans
 */

export interface PlanListResponse extends ValidatedResponse {
    totalResults: number;
    lastPage: boolean;
    plans: PlanResponse[];
}
