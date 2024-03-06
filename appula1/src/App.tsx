import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

const results = [
  {
    Position: 1,
    FullName: "Max Verstappen",
    TeamName: "Red Bull Racing",
    Points: 26,
  },
  {
    Position: 2,
    FullName: "Sergio Perez",
    TeamName: "Red Bull Racing",
    Points: 18,
  },
  { Position: 3, FullName: "Carlos Sainz", TeamName: "Ferrari", Points: 15 },
  { Position: 4, FullName: "Charles Leclerc", TeamName: "Ferrari", Points: 12 },
  { Position: 5, FullName: "George Russell", TeamName: "Mercedes", Points: 10 },
  { Position: 6, FullName: "Lando Norris", TeamName: "McLaren", Points: 8 },
  { Position: 7, FullName: "Lewis Hamilton", TeamName: "Mercedes", Points: 6 },
  { Position: 8, FullName: "Oscar Piastri", TeamName: "McLaren", Points: 4 },
  {
    Position: 9,
    FullName: "Fernando Alonso",
    TeamName: "Aston Martin",
    Points: 2,
  },
  {
    Position: 10,
    FullName: "Lance Stroll",
    TeamName: "Aston Martin",
    Points: 1,
  },
  { Position: 11, FullName: "Guanyu Zhou", TeamName: "Kick Sauber", Points: 0 },
  {
    Position: 12,
    FullName: "Kevin Magnussen",
    TeamName: "Haas F1 Team",
    Points: 0,
  },
  { Position: 13, FullName: "Daniel Ricciardo", TeamName: "RB", Points: 0 },
  { Position: 14, FullName: "Yuki Tsunoda", TeamName: "RB", Points: 0 },
  {
    Position: 15,
    FullName: "Alexander Albon",
    TeamName: "Williams",
    Points: 0,
  },
  {
    Position: 16,
    FullName: "Nico Hulkenberg",
    TeamName: "Haas F1 Team",
    Points: 0,
  },
  { Position: 17, FullName: "Esteban Ocon", TeamName: "Alpine", Points: 0 },
  { Position: 18, FullName: "Pierre Gasly", TeamName: "Alpine", Points: 0 },
  {
    Position: 19,
    FullName: "Valtteri Bottas",
    TeamName: "Kick Sauber",
    Points: 0,
  },
  { Position: 20, FullName: "Logan Sargeant", TeamName: "Williams", Points: 0 },
];

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-row gap-2 p-4">
        <ModeToggle />
        <Button>Click me</Button>
      </div>
      <div className="p-4 pt-0">
        <Card className="p-4">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="p-1">Position</TableHead>
                  <TableHead>Driver</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result) => (
                  <TableRow key={result.Position}>
                    <TableCell className="p-1 text-sm">
                      {result.Position}
                    </TableCell>
                    <TableCell className="p-1 text-sm">
                      {result.FullName}
                    </TableCell>
                    <TableCell className="p-1 text-sm">
                      {result.TeamName}
                    </TableCell>
                    <TableCell className="p-1 text-sm">
                      {result.Points}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
