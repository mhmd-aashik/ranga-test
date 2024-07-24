import { fetchDbBlogs } from "@/lib/actions/user.action";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Admin = async () => {
  const dbData = await fetchDbBlogs();
  const userData = dbData.user;

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <Table>
        <TableCaption className="text-white">
          A list of Solona Volobe Booster Users. {userData.length}
        </TableCaption>
        <TableHeader className="border">
          <TableRow>
            <TableHead className="w-[200px] text-white">Name</TableHead>
            <TableHead className="w-[200px] text-white">Network</TableHead>
            <TableHead className="w-[200px] text-white">Email</TableHead>
            <TableHead className="w-[200px] text-white">Telegram Id</TableHead>
            <TableHead className="w-[200px] text-right text-white">
              Transaction Address
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border">
          {userData.map((data) => {
            return (
              <TableRow key={data._id}>
                <TableCell className="w-[200px] text-white">
                  {data.name}
                </TableCell>
                <TableCell className="w-[200px] text-white">
                  {data.network}
                </TableCell>
                <TableCell className="w-[200px] text-white">
                  {data.email}
                </TableCell>
                <TableCell className="w-[200px] text-white">
                  {data.telegram}
                </TableCell>
                <TableCell className="w-[200px] text-right text-white">
                  {data.transaction}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Admin;
