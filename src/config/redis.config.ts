import { createClient } from "redis";
import EnvConfig from "./env.config";

export async function startRedis() {
  const rds = createClient({
    url: EnvConfig.REDIS_URL
  })
  await rds.connect();
  return rds;
}

