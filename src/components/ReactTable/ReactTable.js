import React from "react";
import ReactTable from "react-table";
import "./styles.css";

const Reacttable = (props) => {
  const data = props.employeeInfo.map((employee) => {
    let single = {
      first: employee.name.first,
      last: employee.name.last,
      phone: employee.phone,
      email: employee.email,
      age: employee.dob.age,
      gender: employee.gender
    };

    return single;
  });

  const columns = [
    {
      Header: "First Name",
      accessor: "first"
    },
    {
      Header: "Last Name",
      accessor: "last"
    },
    {
      Header: "Phone number",
      accessor: "phone"
    },
    {
      Header: "Email",
      accessor: "email"
    },
    {
      Header: "Age",
      accessor: "age"
    },
    {
      Header: "Gender",
      accessor: "gender"
    }
  ];
  console.log("!!tabe data", data);
  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow
  // } = useTable({
  //   columns,
  //   data
  // });

  return (
    <ReactTable data={data} columns={columns} showPagination={false} />
    // <table className="table" {...getTableProps()}>
    //   <thead>
    //     {headerGroups.map((headerGroup) => (
    //       <tr {...headerGroup.getHeaderGroupProps()}>
    //         {headerGroup.headers.map((column) => (
    //           <th {...column.getHeaderProps()}>{column.render("Header")}</th>
    //         ))}
    //       </tr>
    //     ))}
    //   </thead>
    //   <tbody {...getTableBodyProps()}>
    //     {rows.map((row, i) => {
    //       prepareRow(row);
    //       return (
    //         <tr {...row.getRowProps()}>
    //           {row.cells.map((cell) => {
    //             return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
    //           })}
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    // </table>
  );
};

export default Reacttable;
