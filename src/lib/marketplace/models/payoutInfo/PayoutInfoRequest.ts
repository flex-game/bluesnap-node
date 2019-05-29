export default interface PayoutInfoRequest {
    payoutType: 'ACH' | 'CHAPS' | 'SEPA' | 'WIRE';
    baseCurrency: 'AUD' | 'CAD' | 'CHF' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'JPY' | 'NOK' | 'NZD' | 'SEK' | 'USD';
    nameOnAccount: string; // Max of 30 characters
    bankAccountClass: 'PERSONAL' | 'CORPORATE' | 'INTERNATIONAL';
    bankAccountType: 'CHECKING' | 'SAVINGS';
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
