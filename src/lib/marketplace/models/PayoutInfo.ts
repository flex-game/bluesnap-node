type PayoutType = 'ACH' | 'CHAPS' | 'SEPA' | 'WIRE';
type BaseCurrency = 'AUD' | 'CAD' | 'CHF' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'JPY' | 'NOK' | 'NZD' | 'SEK' | 'USD';
type BankAccountClass = 'PERSONAL' | 'CORPORATE' | 'INTERNATIONAL';
type BankAccountType = 'CHECKING' | 'SAVINGS';

export interface PayoutInfoRequest {
    payoutType: PayoutType;
    baseCurrency: BaseCurrency;
    nameOnAccount: string; // Max of 30 characters
    bankAccountClass: BankAccountClass;
    bankAccountType: BankAccountType;
    bankName: string;
    bankId?: string;
    country: string;
    state?: string; // Required if country is US or CA
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
    nameOnAccount: string; // Max of 30 characters
    bankAccountClass: BankAccountClass;
    bankAccountType: BankAccountType;
    bankName: string;
    bankId?: string;
    country: string;
    state?: string; // Required if country is US or CA
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
