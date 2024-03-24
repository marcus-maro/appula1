import { Card, CardContent } from "@/components/ui/card";

import { RaceCard } from "@/components/cards";
import { FastestLap, TrackMap } from "@/components/data-vis";
import { RaceResultsTable } from "@/components/tables";

export default function Home() {
  return (
    <div>
      <div className="p-4 lg:72 xl:mx-96 flex flex-col gap-4">
        <RaceCard />
        <Card className="p-6">
          <CardContent className="p-0">
            <h1 className="pb-6">Track Map with Gear</h1>
            <TrackMap />
          </CardContent>
        </Card>
        <Card className="p-6">
          <CardContent className="p-0">
            <h1 className="pb-6">Fastest Lap</h1>
            <FastestLap />
          </CardContent>
        </Card>
        <RaceResultsTable />
      </div>
    </div>
  );
}
