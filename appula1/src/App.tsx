import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

import { RaceResultsTable } from "./components/tables";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-row gap-2 p-4">
        <ModeToggle />
        <Button>Click me</Button>
      </div>
      <div className="p-4 pt-0">
        <RaceResultsTable />
      </div>
    </ThemeProvider>
  );
}

export default App;
