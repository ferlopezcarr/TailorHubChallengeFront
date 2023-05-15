export class InvalidFieldException extends Error {
    private static readonly defaultMessage = "Invalid field";
    constructor() {
        super(InvalidFieldException.defaultMessage);
    }
}