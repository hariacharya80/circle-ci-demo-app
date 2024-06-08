import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mainRouter from './routes/mainRouter';
import EnvConfig from './config/env.config';
import { handleExceptions } from './config/exception.config';
import Database from './config/database.config';
import { startRedis } from './config/redis.config';

export const app = express()
export const redisClient = startRedis()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(mainRouter)
app.use(handleExceptions)


async function main() {
  try {
    await Database.connect();
    app.listen(EnvConfig.PORT, () => {
      console.log(`Application started and listening on port ${EnvConfig.PORT}`)
    })
    return redisClient;
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main();
