import { getRaces } from "@/db/query";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function DemoPage() {
  const races = await getRaces();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={races} />
    </div>
  );
}
