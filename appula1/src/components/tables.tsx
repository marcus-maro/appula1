import { Clock } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

import raceResults from "@/data/race-results.json";

export const RaceResultsTable = () => {
  const tableHeadClassName = "p-1 md:p-2 h-fit text-sm md:text-base";
  const tableCellClassName = "p-1 md:p-2 text-sm md:text-base";

  return (
    <Card className="p-6">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={tableHeadClassName}>Position</TableHead>
              <TableHead className={tableHeadClassName}>Driver</TableHead>
              <TableHead className={tableHeadClassName}>Team</TableHead>
              <TableHead className={tableHeadClassName}>Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {raceResults["RaceResults"].map((result) => (
              <TableRow key={result.Position}>
                <TableCell className={tableCellClassName}>
                  {result.Position}
                </TableCell>
                <TableCell className={tableCellClassName}>
                  {result.Position === 1 ? (
                    <div className="flex flex-row items-center gap-2">
                      {result.FullName}
                      {result.Position === 1 && (
                        <div className="w-5 h-5 md:w-6 md:h-6">
                          <Clock className="w-full h-full" />
                        </div>
                      )}
                    </div>
                  ) : (
                    result.FullName
                  )}
                </TableCell>
                <TableCell className={tableCellClassName}>
                  {result.TeamName}
                </TableCell>
                <TableCell className={tableCellClassName}>
                  {result.Points}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
