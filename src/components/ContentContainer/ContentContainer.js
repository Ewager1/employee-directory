import React from "react";
import axios from "axios";
import ReactTable from "../ReactTable";
import SearchForm from "../SearchForm";

export default class ClassContainer extends React.Component {
  //Set text feild to null and create employeeInfo array to map over
  state = {
    employeeInfo: [],
    lastName: ""
  };

  //Calls Api using a seed to grab the same employees
  apGetAllEmployees = () => {
    return axios
      .get(`https://randomuser.me/api/?seed=foobar&results=25`)
      .then((res) => {
        const data = res.data.results.map((employee) => {
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
        //set the state with the mapped data
        this.setState({ employeeInfo: data });
      })
      .catch((err) => console.log(err));
  };

  //on start, get employeeData then display on screen
  componentDidMount() {
    this.apGetAllEmployees();
  }

  //when clicking reset btn, get employeeData then display on screen
  handleResetBtn = () => {
    this.apGetAllEmployees();
  };

  //filter only feilds that have a last name matching users input
  handleFormSubmit = (event) => {
    let filteredEmployee = this.state.employeeInfo.filter((employee) => {
      return employee.last === event;
    });
    //reset text box and update table to the filtered employee(s)
    this.setState({
      lastName: "",
      employeeInfo: filteredEmployee
    });
  };
  render() {
    if (!this.state.employeeInfo) return <div> no data </div>;

    return (
      <>
        <SearchForm
          employeeInfo={this.state.employeeInfo}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleResetBtn={this.handleResetBtn}
        />

        <ReactTable
          employeeInfo={this.state.employeeInfo}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}
