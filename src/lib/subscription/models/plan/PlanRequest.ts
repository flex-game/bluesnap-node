/**
 * Contains details for a subscription billing plan
 */
export default interface PlanRequest {
    chargeFrequency: 'ONCE' | 'DAILY' | 'WEEKLY' | 'EVERY 2 WEEKS' | 'MONTHLY' | 'EVERY 2 MONTHS' | 'QUARTERLY' | 'EVERY 6 MONTHS' | 'ANNUALLY' | 'EVERY 2 YEARS' | 'EVERY 3 YEARS';
    gracePeriodDays?: number;
    trialPeriodDays?: number;
    initialChargeAmount?: number;
    name: string;
    currency: string;
    maxNumberOfCharges?: number;
    recurringChargeAmount: number;
    chargeOnPlanSwitch?: boolean;
    status?: 'ACTIVE' | 'INACTIVE';
}
