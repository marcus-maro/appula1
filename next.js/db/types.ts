import * as schema from "../drizzle/schema";

export type DriverSelect = typeof schema.Drivers.$inferSelect;
export type RaceSelect = typeof schema.Races.$inferSelect;
