import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import "../envConfig";

const migrationClient = postgres(process.env.POSTGRES_URL as string, {
  max: 1,
});

async function main() {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "./drizzle/migrations",
  });

  await migrationClient.end();
}

main();
