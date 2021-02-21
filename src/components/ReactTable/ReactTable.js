import React from "react";
import "./styles.css";
import ReactTable from "react-table";


const Reacttable = (props) => {
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

  return (
    <ReactTable className= "directoryTable"
      data={props.employeeInfo}
      columns={columns}
      showPagination={false}
    />
  );
};

export default Reacttable;
