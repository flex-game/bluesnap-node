export default interface AuthReversalRequest {
    cardTransactionType: string;
    transactionId: string; // Must be the transactionId from the AuthOnly response
}
