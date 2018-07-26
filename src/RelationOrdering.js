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
    console.log(selectedOption);
    var selection = selectedOption.value, position = selectedOption.position;
    switch(position){
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
    }
  }

  render() {

    const { selectedOption } = this.state;
    const objects_0 = [], objects_1 = [];
    const relationships = [];
    relation_options.map(function(relation){ return relationships.push({ value: relation, label: relation, position: 1})});
    this.props.objectList.map(function(object){ return objects_0.push({ value: object, label: object, position: 0})});
    this.props.objectList.map(function(object){ return objects_1.push({ value: object, label: object, position: 2})});
    // console.log(options);

    return (
      <div class='relation_row'>
        <Select
          placeholder = { 'Object' }
          value={selectedOption}
          onChange={this.handleChange}
          options={objects_0}
        />
        <Select
          placeholder = { 'Relationship' }
          value={selectedOption}
          onChange={this.handleChange}
          options={relationships}
        />
        <Select
          placeholder = { 'Object'}
          value={selectedOption}
          onChange={this.handleChange}
          options={objects_1}
        />
      </div>
    );
  }
}

export default RelationOrdering;
