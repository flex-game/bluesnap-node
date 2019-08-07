/**
 * Contains metadata keys and values
 * These metadata objects are contained in the metaData array in the transactionMetaData object
 */
export interface MetaDataRequest {
    metaKey: string;
    metaValue: string;
    metaDescription: string;
}
export interface MetaDataResponse {
    metaKey: string;
    metaValue: string;
    metaDescription: string;
}
