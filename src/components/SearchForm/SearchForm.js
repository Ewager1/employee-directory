import React, { Component } from "react";
import ResetFormBtn from "../ResetFormBtn";

//Note: Altered from React Activity 1

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "" };
  }

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <input
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Search By Last Name"
        />
        <button
          className="ml-1 mb-3"
          onClick={() => this.props.handleFormSubmit(this.state.lastName)}
        >
          Submit
        </button>
        <ResetFormBtn handleResetBtn={this.props.handleResetBtn} />
      </div>
    );
  }
}

export default SearchForm;
