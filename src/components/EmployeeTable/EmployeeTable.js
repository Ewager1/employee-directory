import React from "react";
import axios from "axios";
import "./styles.css";

function EmployeeTable(props) {
  console.log("test", props);
  return <div>{props.employeeInfo[0].gender}</div>;
}

export default EmployeeTable;
