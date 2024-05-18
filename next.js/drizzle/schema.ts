import { integer, pgTable, smallserial, text } from "drizzle-orm/pg-core";

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

export const Races = pgTable("races", {
  raceId: smallserial("race_id").primaryKey(),
  name: text("name").notNull(),
  nameOfficial: text("name_official").notNull(),
  roundNumber: integer("round_number").notNull(),
  year: integer("year").notNull(),
  country: text("country").notNull(),
  city: text("city").notNull(),
});
