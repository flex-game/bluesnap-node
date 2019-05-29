import SubscriptionResponse from '../subscription/SubscriptionResponse';

/**
 * Contains a list of subscriptions
 */
export default interface SubscriptionListResponse {
    totalResults: number;
    lastPage: boolean;
    subscriptions: SubscriptionResponse[];
}
