import { Request, Response, NextFunction } from "express";

export async function indexPageGreeting(_req: Request, res: Response, next: NextFunction) {
  try {
    return res.json({
      name: 'Hari Acharya',
      age: 22,
      email: 'hariacharyanepal7@gmil.com'
    }).end()
  } catch (err) {
    return next(err)
  }
}
