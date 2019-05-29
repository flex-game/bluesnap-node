import Level3DataItemsResponse from '../level3DataItems/Level3DataItemsResponse';

/**
 * Contains Level 2/3 data properties for the transaction
 */
export default interface Level3DataRequest {
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
