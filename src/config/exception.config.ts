import { Request, Response, NextFunction } from "express";
import InternalServerErrorException from "../exceptions/InternalServerError.exception";

export async function handleExceptions(error: unknown, _req: Request, res: Response, next: NextFunction) {
  if (!error) {
    return next()
  }
  if (error instanceof InternalServerErrorException) {
    return res.status(500).json({ message: error.message })
  }
  return res.status(500).json({ message: 'Unknown Error' })
}
