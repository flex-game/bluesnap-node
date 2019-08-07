/**
 * Contains 3D Secure details for this transaction
 */
export interface ThreeDSecureRequest {
    threeDSecureResultToken?: string;
    eci?: '00' | '01' | '02' | '05' | '06' | '07';
    cavv?: string;
    xid?: string;
}
export interface ThreeDSecureResponse {
    authenticationResult: 'AUTHENTICATION_SUCCEEDED' | 'AUTHENTICATION_UNAVAILABLE';
}
