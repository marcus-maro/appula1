import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

import { RaceCard } from "@/components/cards";
import { FastestLap, TrackMap } from "./components/data-vis";
import { RaceResultsTable } from "@/components/tables";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-row gap-2 p-4">
        <ModeToggle />
        <Button>Click me</Button>
      </div>
      <div className="p-4 pt-0 mx-0 lg:72 xl:mx-96 flex flex-col gap-4">
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
    </ThemeProvider>
  );
}

export default App;
