/**
 * Contains billing contact information
 */
export interface BillingContactInfoRequest {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    state?: string;
    zip: string;
    country: string;
    personalIdentificationNumber?: string;
}
export interface BillingContactInfoResponse {
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    personalIdentificationNumber: string;
}
