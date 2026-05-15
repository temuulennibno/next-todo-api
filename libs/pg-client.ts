import { Client } from "pg";

export const client = await new Client({
  connectionString:
    "postgresql://neondb_owner:npg_EKSOdjpY63zf@ep-fancy-bird-aon2xxkq-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
}).connect();
