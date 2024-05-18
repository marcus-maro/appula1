import fastf1

import fastf1_query as f1q


def test_get_driver_info():
    session = fastf1.get_session(2024, "Bahrain", "R")
    session.load()

    driver_info = f1q.get_driver_info(session)

    # Check that the DataFrame has the expected columns
    assert set(driver_info.columns) == {
        "name_full",
        "name_first",
        "name_last",
        "name_broadcast",
        "name_abbreviated",
        "country_code",
        "headshot_url",
        "number",
        "driver_id",
    }

    # Check that the DataFrame has the expected data types
    assert driver_info["number"].dtype == int

    # Check that the driver_id is correctly generated
    assert (
        driver_info["driver_id"]
        == driver_info["name_first"].str.lower()
        + "_"
        + driver_info["name_last"].str.lower()
    ).all()

    # Check that the name_broadcast is correctly generated
    assert (
        driver_info["name_broadcast"]
        == driver_info["name_first"].str.upper().str[0]
        + " "
        + driver_info["name_last"].str.upper()
    ).all()


def test_get_event_schedule():
    event_schedule = f1q.get_event_schedule(2024)

    # Check that the DataFrame has the expected columns
    assert set(event_schedule.columns) == {
        "name",
        "name_official",
        "round",
        "year",
        "country",
        "city",
    }

    # Check that the DataFrame has the expected data types
    assert event_schedule["year"].dtype == int
    assert event_schedule["round"].dtype == int
