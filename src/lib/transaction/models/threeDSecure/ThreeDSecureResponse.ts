/**
 * Contains 3D Secure details for this transaction
 */
export default interface ThreeDSecureResponse {
    authenticationResult: 'AUTHENTICATION_SUCCEEDED' | 'AUTHENTICATION_UNAVAILABLE';
}
