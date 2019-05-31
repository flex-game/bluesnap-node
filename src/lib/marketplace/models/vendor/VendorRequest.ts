import VendorPrincipalRequest from '../vendorPrincipal/VendorPrincipalRequest';
import VendorAgreementRequest from '../vendorAgreement/VendorAgreementRequest';
import PayoutInfoRequest from '../payoutInfo/PayoutInfoRequest';

export default interface VendorRequest {
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
