/**
 * Contains information about the credit card holder
 */

export interface CardHolderInfoRequest {
    firstName: string;
    lastName: string;
    email?: string;
    country?: string;
    state?: string;
    address?: string;
    address2?: string;
    city?: string;
    zip?: string;
    phone?: string;
    merchantShopperId?: string;
    personalIdentificationNumber?: string;
}

export interface CardHolderInfoResponse {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    state: string;
    address: string;
    address2: string;
    city: string;
    zip: string;
    phone: string;
    merchantShopperId: string;
    personalIdentificationNumber: string;
}
