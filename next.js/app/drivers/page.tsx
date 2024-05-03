import { getDrivers } from "@/db/query";

export default async function Drivers() {
  const drivers = await getDrivers();
  return (
    <ul>
      {drivers.map((driver) => (
        <li key={driver.driverId}>{JSON.stringify(driver)}</li>
      ))}
    </ul>
  );
}
