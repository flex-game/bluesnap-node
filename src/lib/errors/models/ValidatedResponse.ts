import ErrorMessage from './ErrorMessage';

/**
 * A validated response handles errors with details returned from the BlueSnap Api.
 */
export default interface ValidatedResponse {
    message: ErrorMessage[];
}
