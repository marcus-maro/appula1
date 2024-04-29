import fastf1
import pandas as pd

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
    results["driver_id"] = (results["name_first"] + "_" + results["name_last"]).str.lower()
    results["number"] = results["number"].astype(int)

    return results