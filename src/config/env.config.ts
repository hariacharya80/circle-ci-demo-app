import { config } from 'dotenv';
config();

const EnvConfig = {
  PORT: process.env.PORT,
  REDIS_URL: process.env.REDIS_URL
}

export default EnvConfig;
