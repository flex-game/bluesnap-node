import PlanResponse from '../plan/PlanResponse';

/**
 * Contains a list of subscription billing plans
 */
export default interface PlanListResponse {
    totalResults: number;
    lastPage: boolean;
    plans: PlanResponse[];
}
