import { Request, Response, NextFunction } from "express";
import InternalServerErrorException from "../exceptions/InternalServerError.exception";

export async function getBooks(_req: Request, _res: Response, next: NextFunction) {
  try {
    throw new InternalServerErrorException()
  } catch (err) {
    return next(err)
  }
}
