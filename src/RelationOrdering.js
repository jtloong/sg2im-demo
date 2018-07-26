import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Select from 'react-select';

const relation_options = ["above", "standing on", "by", "behind", "in", "on", "below"];

class RelationOrdering extends React.Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div class='relation_row'>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={this.props.objectList}
        />
        // <select onchange={this.handleChage}>
        //   {this.props.objectList.map(function(object){ return <option value={object}>{object}</option>})}
        // </select>
        // <select>
        //   {relation_options.map(function(relation){ return <option value={relation}>{relation}</option>})}}
        // </select>
        // <select>
        //   {this.props.objectList.map(function(object){ return <option value={object}>{object}</option>})}
        // </select>
      </div>
    );
  }
}

export default RelationOrdering;
