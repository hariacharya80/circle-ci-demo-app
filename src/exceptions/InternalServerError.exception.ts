class InternalServerErrorException extends Error {
  static message: string
  constructor(message?: string) {
    super()
    if (message) {
      this.message = message;
    } else {
      this.message = 'Internal Server Error'
    }
  }
}
export default InternalServerErrorException;
