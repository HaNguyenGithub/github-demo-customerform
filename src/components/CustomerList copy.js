import React from "react";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { columnDef } from "./columns";
import "./CustomerList.css";

function CustomerList() {
  const [customer, setCustomer] = useState([]);
  //   const finalData = React.useMemo(() => customer, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);
  const table = useReactTable({
    columns: finalColumnDef,
    data: customer,
    getCoreRowModel: getCoreRowModel(),
  });

  //   This required option is a factory for a function that computes and returns the core row model for the table. It is called once per table and should return a new function which will calculate and return the row model for the table.

  // A default implementation is provided via any table adapter's { getCoreRowModel } export.
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
                {/* 
                    +getHeaderGroups() lấy tiêu đề của table
                    +.header là tên của Header khai báo bên column
                    +flexRender hiển thị nội dung của tiêu đề cột hoặc nhóm cột
                    +table.getRowModel().rows trả về một mảng các đối tượng, 
                    mỗi đối tượng đại diện cho một hàng trong bảng. 
                    Mỗi đối tượng này có các thuộc tính và phương thức để truy cập thông tin và dữ liệu liên quan đến hàng đó.
                    +cellData.column.columnDef.cell nội dung của dòng 
                    +{roData.getVisibleCells().map((cellData) => { ... })}: Đây là một vòng lặp để lặp qua các ô (cell) trong hàng hiện tại. roData.getVisibleCells() là một phương thức để lấy danh sách các ô cụ thể trong hàng, và .map() lặp qua từng ô.
                  +getContext(): là thông tin ngữ cảnh liên quan đến ô, bao gồm các tùy chọn và dữ liệu liên quan đến ô cụ thể. Các tham số này được sử dụng để hiển thị nội dung của ô dựa trên các tùy chọn và quy tắc đã được xác định.
                */}
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
          {table.getRowModel().rows.map((roData) => {
            return (
              <tr key={roData.id}>
                {roData.getVisibleCells().map((cellData) => {
                  return (
                    <td key={cellData.id}>
                      {flexRender(
                        cellData.column.columnDef.cell,
                        cellData.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CustomerList;
