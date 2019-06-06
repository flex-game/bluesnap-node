import { MetaDataRequest, MetaDataResponse } from './MetaData';

/**
 * Contains metadata about the transaction
 */

export interface TransactionMetaDataRequest {
    metaData?: MetaDataRequest[];
}

export interface TransactionMetaDataResponse {
    metaData?: MetaDataResponse[];
}
