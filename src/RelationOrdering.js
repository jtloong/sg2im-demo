import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const relation_options = ["above", "standing on", "by", "behind", "in", "on", "below"];

class RelationOrdering extends React.Component {
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
    this.props.callbackFromParent(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class='relation_row'>
        <select>
          {this.props.objectList.map(function(object){ return <option value={object}>{object}</option>})}
        </select>
        <select>
          {relation_options.map(function(relation){ return <option value={relation}>{relation}</option>})}}
        </select>
        <select>
          {this.props.objectList.map(function(object){ return <option value={object}>{object}</option>})}
        </select>
      </div>
    );
  }
}

export default RelationOrdering;
