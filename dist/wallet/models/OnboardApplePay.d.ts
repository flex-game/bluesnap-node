import { ValidatedResponse } from '../../errors/models/ValidatedResponse';
export interface OnboardApplePayRequest {
    walletType: string;
    applePay: {
        domains: string[];
    };
}
export interface OnboardApplePayResponse extends ValidatedResponse {
    walletType: string;
    applePay: {
        domains: string[];
    };
}
