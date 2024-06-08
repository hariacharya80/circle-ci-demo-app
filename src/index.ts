import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mainRouter from './routes/mainRouter';
import EnvConfig from './config/env.config';
import { handleExceptions } from './config/exception.config';
const app = express()


app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(mainRouter)
app.use(handleExceptions)

app.listen(EnvConfig.PORT, () => {
  console.log(`Application started and listening on port ${EnvConfig.PORT}`)
})
