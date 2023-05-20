export class NotFoundException extends Error {
  private static readonly defaultMessage = "Not found";

  constructor() {
    super(NotFoundException.defaultMessage);
  }
}
