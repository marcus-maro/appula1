import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

import race from "@/data/race.json";

export const RaceCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{race.OfficialEventName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-2 items-center text-xl pb-2">
          <MapPin size={20} />
          {race.Location}, {race.Country}
        </div>
        <p className="text-lg">{race.EventDate}</p>
      </CardContent>
    </Card>
  );
};
