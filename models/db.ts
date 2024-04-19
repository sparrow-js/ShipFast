import { Pool } from "pg";

let globalPool: Pool;

export function getDb() {
  if (!globalPool) {
    // const connectionString = process.env.POSTGRES_URL;
    const connectionString = 'postgres://postgres.yzqjbjdaoiyvdhqxbswn:TZcv1SHWAwISf5Jd@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres'
    console.log("connectionString", connectionString);

    globalPool = new Pool({
      connectionString,
    });
  }

  return globalPool;
}
