import VendorPrincipalResponse from '../vendorPrincipal/VendorPrincipalResponse';
import VendorAgreementResponse from '../vendorAgreement/VendorAgreementResponse';
import PayoutInfoResponse from '../payoutInfo/PayoutInfoResponse';
import VerificationResponse from '../verification/VerificationResponse';
import ValidatedResponse from '../../../errors/models/ValidatedResponse';

export default interface VendorResponse extends ValidatedResponse {
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
