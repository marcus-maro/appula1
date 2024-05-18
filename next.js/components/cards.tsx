import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRace } from "@/db/query";
import { MapPin } from "lucide-react";

export const RaceCard = async () => {
  const race = await getRace(3);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{race.nameOfficial}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-2 items-center text-xl pb-2">
          <MapPin size={20} />
          {race.city}, {race.country}
        </div>
      </CardContent>
    </Card>
  );
};
