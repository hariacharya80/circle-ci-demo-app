class InternalServerErrorException extends Error {
  static message: string
  constructor(message?: string) {
    super()
    this.message = message ? message : 'Internal Server Error';
  }
}
export default InternalServerErrorException;
