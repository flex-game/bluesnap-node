/**
 * Contains Level 2/3 data properties for each item purchased
 */
export default interface Level3DataItemsResponse {
    lineItemTotal: number;
    commodityCode: string;
    description: string;
    dicsountAmount: number;
    discountIndicator: 'Y' | 'N';
    grossNetIndicator: 'Y' | 'N';
    productCode: string;
    itemQuantity: number;
    taxAmount: number;
    taxRate: number;
    taxType: string;
    unitCost: number;
    unitOfMeasure: string;
}
