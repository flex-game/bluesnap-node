/**
 * Contains shipping contact information
 */
export interface ShippingContactInfoRequest {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    state?: string;
    zip: string;
    country: string;
}
export interface ShippingContactInfoResponse {
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}
