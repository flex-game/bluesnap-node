/**
 * Contains ACH/ECP account details for vaulted shoppers
 */
export default interface EcpRequest {
    accountNumber: string;
    routingNumber: string;
    accountType: 'CONSUMER_CHECKING' | 'CONSUMER_SAVINGS' | 'CORPORATE_CHECKING' | 'CORPORATE_SAVINGS';
}
