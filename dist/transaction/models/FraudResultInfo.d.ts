/**
 * If fraud prevention is enabled, the fraudResultInfo object is returned in the response to the following requests: Auth Capture, Auth Only, Create Vaulted Shopper, Update Vaulted Shopper, Create Subscription
 */
export interface FraudResultInfoResponse {
    deviceDataCollector: 'Y' | 'N';
}
