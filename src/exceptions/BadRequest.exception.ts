class BadRequestException extends Error {
  message: string
  status: number
  constructor(message?: string, status?: number) {
    super()
    this.message = message ? message : 'Bad Request'
    this.status = status ? status : 400
  }
}
export default BadRequestException;
