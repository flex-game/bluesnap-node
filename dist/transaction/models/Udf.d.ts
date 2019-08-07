/**
 * Contains user-defined fields configured in Kount for fraud prevention purposes.
 */
export interface UdfRequest {
    udfName: string;
    udfValue: string;
}
export interface UdfResponse {
    udfName: string;
    udfValue: string;
}
