/**
 * Contains details for a subscription billing plan
 */
import ValidatedResponse from '../../../errors/models/ValidatedResponse';

export default interface PlanResponse extends ValidatedResponse {
    chargeFrequency: 'ONCE' | 'DAILY' | 'WEEKLY' | 'EVERY 2 WEEKS' | 'MONTHLY' | 'EVERY 2 MONTHS' | 'QUARTERLY' | 'EVERY 6 MONTHS' | 'ANNUALLY' | 'EVERY 2 YEARS' | 'EVERY 3 YEARS';
    gracePeriodDays: number;
    trialPeriodDays: number;
    initialChargeAmount: number;
    name: string;
    planId: number;
    currency: string;
    maxNumberOfCharges: string;
    recurringChargeAmount: number;
    chargeOnPlanSwitch: boolean;
    status: 'ACTIVE' | 'INACTIVE';
}
