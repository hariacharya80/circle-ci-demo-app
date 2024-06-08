import { PrismaClient } from "@prisma/client";

class Database {
  static client: PrismaClient;
  public static async connect() {
    const client = new PrismaClient()
    Database.client = client;
    await this.client.$connect()
    await this.client.$executeRaw`SELECT 1+1`;
    console.log(`Database connected successfully.`)
    return true
  }
}

export default Database; 
