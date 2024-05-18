import fastf1
import pandas as pd
from unidecode import unidecode


def get_driver_info(session: fastf1.core.Session) -> pd.DataFrame:
    results = session.results

    column_mapping = {
        "FullName": "name_full",
        "FirstName": "name_first",
        "LastName": "name_last",
        "BroadcastName": "name_broadcast",
        "Abbreviation": "name_abbreviated",
        "CountryCode": "country_code",
        "HeadshotUrl": "headshot_url",
        "DriverNumber": "number",
    }

    results = results[column_mapping.keys()]
    results = results.rename(columns=column_mapping)
    results["slug"] = (results["name_first"] + "-" + results["name_last"]).str.lower()
    results["number"] = results["number"].astype(int)

    return results


def get_event_schedule(year: int) -> pd.DataFrame:
    df = fastf1.get_event_schedule(year)

    column_mapping = {
        "EventName": "name",
        "OfficialEventName": "name_official",
        "RoundNumber": "round",
        "Country": "country",
        "Location": "city",
    }

    df = df[column_mapping.keys()]
    df = df.rename(columns=column_mapping)
    df.insert(3, "year", year)

    df["slug"] = (
        df["name"].str.replace(" Grand Prix", "").str.replace(" ", "-").str.lower()
        + f"-{year}"
    ).apply(unidecode)

    df["name_official"] = (
        df["name_official"].str.replace("FORMULA 1 ", "").str.replace(f" {year}", "")
    )

    # Manual corrections
    df["country"] = df["country"].replace({"Las Vegas": "United States"})

    return df
