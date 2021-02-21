import React, { Component } from "react";

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
        {/* <form className="form"> */}
        <input
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Search By Last Name"
        />
        <button
          onClick={() => this.props.handleFormSubmit(this.state.lastName)}
        >
          Submit
        </button>
        {/* </form> */}
      </div>
    );
  }
}

export default SearchForm;
