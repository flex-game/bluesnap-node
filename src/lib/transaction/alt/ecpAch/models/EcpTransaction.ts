import {EcpAccountType} from '../../../../vaultedShopper/models/Ecp';

/**
 * Contains the information required to process an ECP/ACH transaction
 */

export interface EcpTransactionRequest {
    accountNumber: string;
    routingNumber: string;
    accountType: EcpAccountType;
}

export interface EcpTransactionResponse {
    accountNumber: string;
    routingNumber: string;
    accountType: EcpAccountType;
    publicAccountNumber: string;
    publicRoutingNumber: string;
}
