import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";

import "../envConfig.ts";

const client = postgres(process.env.DATABASE_CONNECTION_STRING as string);
export const db = drizzle(client, { schema, logger: true });
