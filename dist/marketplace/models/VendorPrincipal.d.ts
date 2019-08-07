export interface VendorPrincipalRequest {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    city: string;
    country: string;
    zip: string;
    dob: string;
    personalIdentificationNumber: string;
    driverLicenseNumber?: string;
    passportNumber?: string;
    email: string;
}
export interface VendorPrincipalResponse {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    city: string;
    country: string;
    zip: string;
    dob: string;
    personalIdentificationNumber: string;
    driverLicenseNumber?: string;
    passportNumber?: string;
    email: string;
}
