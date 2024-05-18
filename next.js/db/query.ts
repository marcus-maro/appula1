import { eq } from "drizzle-orm";

import { db } from "../drizzle/db";
import * as schema from "../drizzle/schema";

export const getDrivers = async () => {
  return await db.select().from(schema.Drivers);
};

export const getRaces = async () => {
  return await db.select().from(schema.Races);
};

export const getRace = async (id: number) => {
  const race = await db
    .select()
    .from(schema.Races)
    .where(eq(schema.Races.raceId, id));

  return race[0] || null;
};
