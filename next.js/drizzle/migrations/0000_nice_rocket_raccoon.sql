CREATE TABLE IF NOT EXISTS "drivers" (
	"driver_id" "smallserial" PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name_full" text NOT NULL,
	"name_first" text NOT NULL,
	"name_last" text NOT NULL,
	"name_broadcast" text NOT NULL,
	"country_code" text NOT NULL,
	"headshot_url" text NOT NULL,
	"number" integer NOT NULL,
	CONSTRAINT "drivers_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "races" (
	"race_id" "smallserial" PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"name_official" text NOT NULL,
	"round_number" integer NOT NULL,
	"year" integer NOT NULL,
	"country" text NOT NULL,
	"city" text NOT NULL,
	CONSTRAINT "races_slug_unique" UNIQUE("slug")
);
