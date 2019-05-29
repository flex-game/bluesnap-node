/**
 * If fraud prevention is enabled, the fraudResultInfo object is returned in the response to the following requests: Auth Capture, Auth Only, Create Vaulted Shopper, Update Vaulted Shopper, Create Subscription
 */
export default interface FraudResultInfoResponse {
    deviceDataCollector: 'Y' | 'N';
}
