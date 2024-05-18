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
                    (slug, name_full, name_first, name_last, name_broadcast, country_code, headshot_url, number)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s);
                    """,
                    (
                        row["slug"],
                        row["name_full"],
                        row["name_first"],
                        row["name_last"],
                        row["name_broadcast"],
                        row["country_code"],
                        row["headshot_url"],
                        row["number"],
                    ),
                )


def insert_event_schedule(year: int) -> None:
    df_event_schedule = fastf1_query.get_event_schedule(year)

    with psycopg2.connect(os.environ["DSN"]) as conn:
        with conn.cursor() as cur:
            for _, row in df_event_schedule.iterrows():
                cur.execute(
                    """
                    INSERT INTO races
                    (slug, year, round_number, name, name_official, country, city)
                    VALUES (%s, %s, %s, %s, %s, %s, %s);
                    """,
                    (
                        row["slug"],
                        row["year"],
                        row["round"],
                        row["name"],
                        row["name_official"],
                        row["country"],
                        row["city"],
                    ),
                )


def update_event_schedule(year: int) -> None:
    df_event_schedule = fastf1_query.get_event_schedule(year)

    with psycopg2.connect(os.environ["DSN"]) as conn:
        with conn.cursor() as cur:
            for _, row in df_event_schedule.iterrows():
                cur.execute(
                    """
                    UPDATE races
                    SET name_official = %s, country = %s, city = %s
                    WHERE year = %s AND round_number = %s
                    """,
                    (
                        row["name_official"],
                        row["country"],
                        row["city"],
                        row["year"],
                        row["round"],
                    ),
                )
