import { ValidatedResponse } from '../../errors/models/ValidatedResponse';
import { SubscriptionResponse } from './Subscription';

/**
 * Contains a list of subscriptions
 */

export interface SubscriptionListResponse extends ValidatedResponse {
    totalResults: number;
    lastPage: boolean;
    subscriptions: SubscriptionResponse[];
}
