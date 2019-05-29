/**
 * Contains the information required to process an ECP/ACH transaction
 */
export default interface EcpTransactionResponse {
    accountNumber: string;
    routingNumber: string;
    accountType: 'CONSUMER_CHECKING' | 'CONSUMER_SAVINGS' | 'CORPORATE_CHECKING' | 'CORPORATE_SAVINGS';
    publicAccountNumber: string;
    publicRoutingNumber: string;
}
