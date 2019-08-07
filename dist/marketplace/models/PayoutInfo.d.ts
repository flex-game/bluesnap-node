declare type PayoutType = 'ACH' | 'CHAPS' | 'SEPA' | 'WIRE';
declare type BaseCurrency = 'AUD' | 'CAD' | 'CHF' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'JPY' | 'NOK' | 'NZD' | 'SEK' | 'USD';
declare type BankAccountClass = 'PERSONAL' | 'CORPORATE' | 'INTERNATIONAL';
declare type BankAccountType = 'CHECKING' | 'SAVINGS';
export interface PayoutInfoRequest {
    payoutType: PayoutType;
    baseCurrency: BaseCurrency;
    nameOnAccount: string;
    bankAccountClass: BankAccountClass;
    bankAccountType: BankAccountType;
    bankName: string;
    bankId?: string;
    country: string;
    state?: string;
    city?: string;
    address?: string;
    zip?: string;
    bankAccountId?: number;
    iban?: string;
    swiftBic?: string;
    minimalPayoutAmount?: number;
    paymentReference?: string;
    refundReserve?: number;
}
export interface PayoutInfoResponse {
    payoutType: PayoutType;
    baseCurrency: BaseCurrency;
    nameOnAccount: string;
    bankAccountClass: BankAccountClass;
    bankAccountType: BankAccountType;
    bankName: string;
    bankId?: string;
    country: string;
    state?: string;
    city?: string;
    address?: string;
    zip?: string;
    bankAccountId?: number;
    iban?: string;
    swiftBic?: string;
    minimalPayoutAmount?: number;
    paymentReference?: string;
    refundReserve?: number;
}
export {};
