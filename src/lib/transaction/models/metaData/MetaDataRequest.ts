/**
 * Contains metadata keys and values
 * These metadata objects are contained in the metaData array in the transactionMetaData object
 */
export default interface MetaDataRequest {
    metaKey: string;
    metaValue: string;
    metaDescription: string;
}
