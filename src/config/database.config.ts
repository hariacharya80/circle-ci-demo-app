import { PrismaClient } from "@prisma/client";

export class Database extends PrismaClient {
  public client: PrismaClient;
  constructor() {
    super()
    const client = new PrismaClient();
    this.client = client
  }
  async connect() {
    await this.client.$connect();
    await this.client.$executeRaw`SELECT 1+1;`
    console.log(`Database Connected Successfully`);
    return this.client
  }
}
