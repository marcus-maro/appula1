CREATE TABLE IF NOT EXISTS "drivers" (
	"driver_id" text PRIMARY KEY NOT NULL,
	"name_full" text NOT NULL,
	"name_first" text NOT NULL,
	"name_last" text NOT NULL,
	"name_broadcast" text NOT NULL,
	"country_code" text NOT NULL,
	"headshot_url" text NOT NULL,
	"number" integer NOT NULL
);
