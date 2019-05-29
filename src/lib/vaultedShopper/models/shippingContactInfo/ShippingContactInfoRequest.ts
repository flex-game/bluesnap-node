/**
 * Contains shipping contact information
 */
export default interface ShippingContactInfoRequest {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    state?: string;
    zip: string;
    country: string;
}
