/**
 * Contains information about a shopper who is paying with the alternative payment method
 */

export interface PayerInfoRequest {
    firstName: string;
    lastName: string;
    personalIdentificationNumber?: string;
    email?: string;
    country?: string;
    state?: string;
    address?: string;
    address2?: string;
    city?: string;
    zip?: string;
    phone?: string;
    companyName?: string;
    merchantShopperId?: string;
}

export interface PayerInfoResponse {
    firstName: string;
    lastName: string;
    personalIdentificationNumber: string;
    email: string;
    country: string;
    state: string;
    address: string;
    address2: string;
    city: string;
    zip: string;
    phone: string;
}
