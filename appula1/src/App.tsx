import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ModeToggle } from "./components/mode-toggle";

import { ThemeProvider } from "@/components/theme-provider";

const results = [
  { Position: 1, Abbreviation: "VER", Points: 26 },
  { Position: 2, Abbreviation: "PER", Points: 18 },
  { Position: 3, Abbreviation: "SAI", Points: 15 },
  { Position: 4, Abbreviation: "LEC", Points: 12 },
  { Position: 5, Abbreviation: "RUS", Points: 10 },
  { Position: 6, Abbreviation: "NOR", Points: 8 },
  { Position: 7, Abbreviation: "HAM", Points: 6 },
  { Position: 8, Abbreviation: "PIA", Points: 4 },
  { Position: 9, Abbreviation: "ALO", Points: 2 },
  { Position: 10, Abbreviation: "STR", Points: 1 },
  { Position: 11, Abbreviation: "ZHO", Points: 0 },
  { Position: 12, Abbreviation: "MAG", Points: 0 },
  { Position: 13, Abbreviation: "RIC", Points: 0 },
  { Position: 14, Abbreviation: "TSU", Points: 0 },
  { Position: 15, Abbreviation: "ALB", Points: 0 },
  { Position: 16, Abbreviation: "HUL", Points: 0 },
  { Position: 17, Abbreviation: "OCO", Points: 0 },
  { Position: 18, Abbreviation: "GAS", Points: 0 },
  { Position: 19, Abbreviation: "BOT", Points: 0 },
  { Position: 20, Abbreviation: "SAR", Points: 0 },
];

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Place</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead className="text-right">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.Position}>
              <TableCell className="font-medium p-1">
                {result.Position}
              </TableCell>
              <TableCell className="p-1">{result.Abbreviation}</TableCell>
              <TableCell className="text-right p-1">{result.Points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ThemeProvider>
  );
}

export default App;
