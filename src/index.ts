import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mainRouter from './routes/mainRouter';
import EnvConfig from './config/env.config';
import { handleExceptions } from './config/exception.config';
import { Database } from './config/database.config';
export const app = express()


app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(mainRouter)
app.use(handleExceptions)


async function main() {
  try {
    const db = new Database()
    await db.connect();
    app.listen(EnvConfig.PORT, () => {
      console.log(`Application started and listening on port ${EnvConfig.PORT}`)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main();
