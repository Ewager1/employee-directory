import React from "react";
import axios from "axios";
import EmployeeTable from "../EmployeeTable/EmployeeTable";

export default class API extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=50`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    if (!this.state.persons.results) return <div> no data </div>;

    return (
      <>
        <EmployeeTable employeeInfo={this.state.persons.results} />{" "}
      </>
    );
  }
}
