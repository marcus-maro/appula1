import { getDrivers } from "@/db/query";
import { DriverSelect } from "@/db/types";
import Image from "next/image";

const Driver = ({ driver }: { driver: DriverSelect }) => {
  return (
    <div className="flex flex-row border p-4 rounded-lg">
      <div className="flex-grow">
        <h2 className="text-lg font-bold">{driver.nameFull}</h2>
        <p>{driver.number}</p>
        <p>{driver.countryCode}</p>
      </div>
      <div>
        <Image
          src={driver.headshotUrl}
          alt={driver.nameFull}
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

export default async function Drivers() {
  const drivers = await getDrivers();
  return (
    <div className="p-4 lg:72 xl:mx-96 flex flex-col gap-4">
      {drivers.map((driver) => (
        <Driver key={driver.driverId} driver={driver} />
      ))}
    </div>
  );
}
