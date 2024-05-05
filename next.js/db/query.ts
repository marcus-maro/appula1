import { db } from "../drizzle/db";
import * as schema from "../drizzle/schema";

export const getDrivers = async () => {
  return await db.select().from(schema.Drivers);
};
