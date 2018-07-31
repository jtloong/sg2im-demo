import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class AddOrderElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // console.log(this.state.value);
    console.log('Hello');
    event.preventDefault();
  }

  render() {
    return (
      <button onClick={this.handleSubmit} class="add_button">+</button>
    );
  }
}

export default AddOrderElement;
