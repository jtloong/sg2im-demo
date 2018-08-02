import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SubmitSceneGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.props.scene_graph);
    // this.props.callbackFromParent(this.state.value);
    event.preventDefault();
  }


  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input class='generate-button' type="submit" value="Generate" />
      </form>
    );
  }
}



export default SubmitSceneGraph;
