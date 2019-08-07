/**
 * Includes information about vendor payout and processing statuses.
 */
export interface VerificationResponse {
    payoutStatus: 'Incomplete' | 'Pending' | 'Approved' | 'Declined';
    processingStatus: 'Active' | 'Inactive';
    declineReason?: string;
    missingItems?: string[];
}
