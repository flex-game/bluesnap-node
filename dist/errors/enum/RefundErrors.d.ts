export declare enum RefundErrors {
    REFUND_GENERAL_FAILURE = "REFUND_GENERAL_FAILURE",
    REFUND_MIN_AMOUNT_FAILURE = "REFUND_MIN_AMOUNT_FAILURE",
    REFUND_MAX_AMOUNT_FAILURE = "REFUND_MAX_AMOUNT_FAILURE",
    REFUND_PERIOD_EXPIRED = "REFUND_PERIOD_EXPIRED",
    INSUFFICIENT_FUNDS_FOR_REFUND = "INSUFFICIENT_FUNDS_FOR_REFUND",
    INVOICE_ALREADY_REFUNDED = "INVOICE_ALREADY_REFUNDED",
    INVOICE_ALREADY_FULLY_REFUNDED = "INVOICE_ALREADY_FULLY_REFUNDED",
    REFUND_IN_PROCESS = "REFUND_IN_PROCESS",
    PARTIAL_REFUND_NOT_SUPPORTED = "PARTIAL_REFUND_NOT_SUPPORTED",
    PAYMENT_METHOD_NOT_REFUNDABLE = "PAYMENT_METHOD_NOT_REFUNDABLE",
    VENDOR_INSUFFICIENT_FUNDS_FOR_REFUND = "VENDOR_INSUFFICIENT_FUNDS_FOR_REFUND"
}
