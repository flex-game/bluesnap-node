import ValidatedResponse from '../../../errors/models/ValidatedResponse';

export default interface OnboardApplePayResponse extends ValidatedResponse {
    walletType: string;
    applePay: {
        domains: string[]; // Note: Do not include https:// in the domain name
    };
}
