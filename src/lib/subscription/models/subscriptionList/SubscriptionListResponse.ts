import SubscriptionResponse from '../subscription/SubscriptionResponse';
import ValidatedResponse from '../../../errors/models/ValidatedResponse';

/**
 * Contains a list of subscriptions
 */
export default interface SubscriptionListResponse extends ValidatedResponse {
    totalResults: number;
    lastPage: boolean;
    subscriptions: SubscriptionResponse[];
}
