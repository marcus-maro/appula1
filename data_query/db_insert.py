import os

import fastf1
import psycopg2
from dotenv import load_dotenv

import fastf1_query

load_dotenv()


def insert_driver_info(session: fastf1.core.Session) -> None:
    df_driver_info = fastf1_query.get_driver_info(session)

    with psycopg2.connect(os.environ["DSN"]) as conn:
        with conn.cursor() as cur:
            for _, row in df_driver_info.iterrows():
                cur.execute(
                    """
                    INSERT INTO drivers
                    (driver_id, name_full, name_first, name_last, name_broadcast, country_code, headshot_url, number)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                    ON CONFLICT (driver_id) DO NOTHING
                    """,
                    (
                        row["driver_id"],
                        row["name_full"],
                        row["name_first"],
                        row["name_last"],
                        row["name_broadcast"],
                        row["country_code"],
                        row["headshot_url"],
                        row["number"],
                    ),
                )


session = fastf1.get_session(2024, "Bahrain", "R")
session.load()

insert_driver_info(session)
