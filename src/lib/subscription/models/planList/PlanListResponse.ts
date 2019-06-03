import PlanResponse from '../plan/PlanResponse';
import ValidatedResponse from '../../../errors/models/ValidatedResponse';

/**
 * Contains a list of subscription billing plans
 */
export default interface PlanListResponse extends ValidatedResponse {
    totalResults: number;
    lastPage: boolean;
    plans: PlanResponse[];
}
