import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";

import "../envConfig";

const client = postgres(process.env.POSTGRES_URL as string);
export const db = drizzle(client, { schema, logger: true });
