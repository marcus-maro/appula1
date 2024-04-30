import os

import psycopg2
from dotenv import load_dotenv

load_dotenv()

with psycopg2.connect(os.getenv("DSN")) as conn:
    with conn.cursor() as cur:
        cur.execute(
            """
            CREATE TABLE drivers (
                driver_id TEXT PRIMARY KEY,
                name_full TEXT NOT NULL,
                name_first TEXT NOT NULL,
                name_last TEXT NOT NULL,
                name_broadcast TEXT NOT NULL,
                name_abbreviated TEXT NOT NULL,
                country_code TEXT NOT NULL,
                headshot_url TEXT,
                number INTEGER NOT NULL
            )
            """
        )

        conn.commit()
