export enum MarketplaceErrors {
    REFUND_VENDOR_AMOUNT_NOT_SUPPORTED = 'REFUND_VENDOR_AMOUNT_NOT_SUPPORTED',
    REFUND_NEGATIVE_VENDOR_AMOUNT = 'REFUND_NEGATIVE_VENDOR_AMOUNT',
    REFUND_MAX_VENDOR_AMOUNT_FAILURE = 'REFUND_MAX_VENDOR_AMOUNT_FAILURE',
    REFUND_MAX_MERCHANT_AMOUNT_FAILURE = 'REFUND_MAX_MERCHANT_AMOUNT_FAILURE',
    VENDOR_PAYOUT_VALUES_EXCEEDS_MERCHANT = 'VENDOR_PAYOUT_VALUES_EXCEEDS_MERCHANT',
    DUPLICATE_VENDOR = 'DUPLICATE_VENDOR',
    VENDOR_LIMIT_MAX = 'VENDOR_LIMIT_MAX',
    VENDOR_COMMISSION_EXCEEDED = 'VENDOR_COMMISSION_EXCEEDED',
    VENDOR_RESERVE_NONE_DEFAULT_METHOD = 'VENDOR_RESERVE_NONE_DEFAULT_METHOD',
    REFUND_INVALID_VENDOR_REFUND_AMOUNT = 'REFUND_INVALID_VENDOR_REFUND_AMOUNT',
    REFUND_VENDOR_ERROR = 'REFUND_VENDOR_ERROR',
    REFUND_INVALID_VENDOR = 'REFUND_INVALID_VENDOR',
    VENDOR_ALREADY_FULLY_REFUNDED = 'VENDOR_ALREADY_FULLY_REFUNDED',
    REFUND_NEGATIVE_MERCHANT_AMOUNT = 'REFUND_NEGATIVE_MERCHANT_AMOUNT',
    UNAUTHORIZED_USE_OF_VENDOR = 'UNAUTHORIZED_USE_OF_VENDOR',
    VALIDATION_GENERAL_FAILURE = 'VALIDATION_GENERAL_FAILURE',
    INACTIVE_VENDOR = 'INACTIVE_VENDOR',
    DECLINED_VENDOR = 'DECLINED_VENDOR',
}
