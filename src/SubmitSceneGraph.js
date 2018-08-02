import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SubmitSceneGraph extends React.Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {

  }



  render() {

    return (
      <input class='generate-button' type="submit" value="Generate" />
    );
  }
}



export default SubmitSceneGraph;
