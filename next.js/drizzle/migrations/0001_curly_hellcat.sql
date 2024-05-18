CREATE TABLE IF NOT EXISTS "races" (
	"race_id" "smallserial" PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"name_official" text NOT NULL,
	"round_number" integer NOT NULL,
	"year" integer NOT NULL,
	"country" text NOT NULL,
	"city" text NOT NULL
);
