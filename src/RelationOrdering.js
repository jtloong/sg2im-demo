import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Select from 'react-select';


class RelationOrdering extends React.Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const relation_options = ["above", "standing on", "by", "behind", "in", "on", "below"];
    const { selectedOption } = this.state;
    const options = [];
    const relationships = [];
    relation_options.map(function(relation){ return relationships.push({ value: relation, label: relation})});
    this.props.objectList.map(function(object){ return options.push({ value: object, label: object})});
    console.log(options);

    return (
      <div class='relation_row'>
        <Select
          placeholder = { 'Object'}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <Select
          placeholder = { 'Relationship'}
          value={selectedOption}
          onChange={this.handleChange}
          options={relationships}
        />
        <Select
          placeholder = { 'Object'}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

export default RelationOrdering;
