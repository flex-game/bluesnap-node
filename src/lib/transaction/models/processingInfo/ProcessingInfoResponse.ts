/**
 * Contains processing information for credit card transactions and batch transactions
 */
export default interface ProcessingInfoResponse {
    processingStatus: string;
    cvvResponseCode: string;
    avsResponseCodeZip: string;
    avsResponseCodeAddress: string;
    avsResponseCodeName: string;
}
