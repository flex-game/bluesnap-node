import { ValidatedResponse } from '../../errors/models/ValidatedResponse';

/**
 * Contains details for a subscription billing plan
 */

export type ChargeFrequency = 'ONCE' | 'DAILY' | 'WEEKLY' | 'EVERY 2 WEEKS' | 'MONTHLY' | 'EVERY 2 MONTHS' | 'QUARTERLY' | 'EVERY 6 MONTHS' | 'ANNUALLY' | 'EVERY 2 YEARS' | 'EVERY 3 YEARS';

export interface PlanRequest {
    chargeFrequency: ChargeFrequency;
    gracePeriodDays?: number;
    trialPeriodDays?: number;
    initialChargeAmount?: number;
    name: string;
    currency: string;
    maxNumberOfCharges?: string;
    recurringChargeAmount: number;
    chargeOnPlanSwitch?: boolean;
    status?: 'ACTIVE' | 'INACTIVE';
}

export interface PlanResponse extends ValidatedResponse {
    chargeFrequency: ChargeFrequency;
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
