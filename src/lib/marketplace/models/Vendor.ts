import {VendorPrincipalRequest, VendorPrincipalResponse} from './VendorPrincipal';
import {VendorAgreementRequest, VendorAgreementResponse} from './VendorAgreement';
import {PayoutInfoRequest, PayoutInfoResponse} from './PayoutInfo';
import {ValidatedResponse} from '../../errors/models/ValidatedResponse';
import {VerificationResponse} from './Verification';

export interface VendorRequest {
    email: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: string;
    city?: string;
    country: string;
    state?: string;
    zip?: string;
    taxId?: string;
    vatId?: string;
    defaultPayoutCurrency?: string;
    frequency?: string;
    delay?: number;
    vendorPrincipal?: VendorPrincipalRequest;
    vendorAgreement?: VendorAgreementRequest;
    payoutInfo?: PayoutInfoRequest;
}

export interface VendorResponse extends ValidatedResponse {
    vendorId: number;
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    state: string;
    zip: string;
    taxId: string;
    vatId: string;
    defaultPayoutCurrency: string;
    frequency: string;
    delay: number;
    vendorPrincipal: VendorPrincipalResponse;
    vendorAgreement: VendorAgreementResponse;
    payoutInfo: PayoutInfoResponse;
    verification: VerificationResponse;
}
