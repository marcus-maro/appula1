import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const Drivers = pgTable("drivers", {
  driverId: text("driver_id").primaryKey(),
  nameFull: text("name_full").notNull(),
  nameFirst: text("name_first").notNull(),
  nameLast: text("name_last").notNull(),
  nameBroadcast: text("name_broadcast").notNull(),
  countryCode: text("country_code").notNull(),
  headshotUrl: text("headshot_url").notNull(),
  number: integer("number").notNull(),
});
