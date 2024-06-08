import { Request, Response, NextFunction } from "express";
import { redisClient } from '..';

export async function setRedisCache(req: Request, res: Response, next: NextFunction) {
  try {

    const { cacheKey, cacheValue } = req.body;
    const rds = await redisClient;
    await rds.set(`${cacheKey}`, `${cacheValue}_from_redis`);
    const val = await rds.get(cacheKey);
    console.log(val)
    return res.status(200).json({ key: cacheKey, value: val });
  } catch (error) {
    console.error(error)
    return next(error)
  }
}
