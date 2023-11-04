import React from "react";
import { flexRender, useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { columnDef } from "./columns";  
import './CustomerList.css';

function CustomerList() {
  const [customer, setCustomer] = useState([]);
//   const finalData = React.useMemo(() => customer, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);
  const table = useReactTable({
    columns: finalColumnDef,
    data: customer,
    getCoreRowModel: getCoreRowModel(),
  });

//   console.log("test:", table.getHeaderGroups());

  const getCustomer = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/customers`
    );
    if (response.ok) {
      const data = await response.json();
      setCustomer(data);

    }
  };

  useEffect(() => {
    getCustomer();
    console.log("render");
  }, []);

  return (
    <>
      <h1>Customer List</h1>
      <table>
        <thead>
          {table.getHeaderGroups().map((hdata) => {
            return (
              <tr key={hdata.id}>
                {hdata.headers.map((coldata) => {
                  return (
                    <th key={coldata.id} colSpan={coldata.colSpan}>
                      {flexRender(
                        coldata.column.columnDef.header,
                        coldata.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
            {
                table.getRowModel().rows.map(roData => {
                    return(
                        <tr key={roData.id}>
                            {roData.getVisibleCells().map(cellData => {
                                return(
                                    <td key={cellData.id}>
                                        {
                                            flexRender(
                                                cellData.column.columnDef.cell,
                                                cellData.getContext(),
                                            )
                                        }
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })
            }
        </tbody>
      </table>
    </>
  );
}

export default CustomerList;
