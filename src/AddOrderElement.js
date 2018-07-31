import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class AddOrderElement extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // console.log(this.state.value);
    console.log('Hello');
    this.props.callbackFromParent('True');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit} class="add_button">+</button>
      </div>
    );
  }
}

export default AddOrderElement;
