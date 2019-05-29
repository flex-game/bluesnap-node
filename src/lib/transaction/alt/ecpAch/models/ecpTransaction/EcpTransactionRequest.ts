/**
 * Contains the information required to process an ECP/ACH transaction
 */
export default interface EcpTransactionRequest {
    accountNumber: string;
    routingNumber: string;
    accountType: 'CONSUMER_CHECKING' | 'CONSUMER_SAVINGS' | 'CORPORATE_CHECKING' | 'CORPORATE_SAVINGS';
}
