import { Level3DataItemsResponse } from './Level3DataItems';

/**
 * Contains Level 2/3 data properties for the transaction
 */

export interface Level3DataRequest {
    customerReferenceNumber: string;
    salesTaxAmount: number;
    freightAmount: number;
    dutyAmount: number;
    destinationZipCode: string;
    destinationCountryCode: string;
    shipFromZipCode: string;
    discountAmount: number;
    taxAmount: number;
    taxRate: number;
    level3DataItems: Level3DataItemsResponse[];
}

export interface Level3DataResponse {
    customerReferenceNumber: string;
    salesTaxAmount: number;
    freightAmount: number;
    dutyAmount: number;
    destinationZipCode: string;
    destinationCountryCode: string;
    shipFromZipCode: string;
    discountAmount: number;
    taxAmount: number;
    taxRate: number;
    transactionProcessedWithL3dSupportedAcquirer: boolean;
    level3DataItems: Level3DataItemsResponse[];
}
