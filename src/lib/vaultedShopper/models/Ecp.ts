/**
 * Contains ACH/ECP account details for vaulted shoppers
 */

export type EcpAccountType = 'CONSUMER_CHECKING' | 'CONSUMER_SAVINGS' | 'CORPORATE_CHECKING' | 'CORPORATE_SAVINGS';

export interface EcpRequest {
    accountNumber: string;
    routingNumber: string;
    accountType: EcpAccountType
}

export interface EcpResponse {
    accountNumber: string;
    routingNumber: string;
    accountType: EcpAccountType;
    publicAccountNumber: string;
    publicRoutingNumber: string;
}
