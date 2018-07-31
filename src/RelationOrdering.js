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
    // console.log(selectedOption);
    var selection = selectedOption.value, position = selectedOption.position;
    switch(position){
      case 0:
        this.props.callbackFromParent({value: selection, position: 0, index: selectedOption.index})
        break;
      case 1:
        this.props.callbackFromParent({value: selection, position: 1, index: selectedOption.index})
        break;
      case 2:
        this.props.callbackFromParent({value: selection, position: 2, index: selectedOption.index})
        break;
    }
  }



  render() {

    const { first_selection } = this.state;
    const { relation_selection } = this.state;
    const { second_selection } = this.state;
    const objects_0 = [], objects_1 = [];
    const relationships = [];
    relation_options.map(function(relation, index){ return relationships.push({ value: relation, label: relation, position: 1, index: index})});
    this.props.objectList.map(function(object, index){ return objects_0.push({ value: object, label: object, position: 0, index: index})});
    this.props.objectList.map(function(object, index){ return objects_1.push({ value: object, label: object, position: 2, index: index})});

    return (
      <div class='relation_row'>
        <Select
          placeholder = { 'Object' }
          value={first_selection}
          onChange={this.handleChange}
          options={objects_0}
        />
        <Select
          placeholder = { 'Relationship' }
          value={relation_selection}
          onChange={this.handleChange}
          options={relationships}
        />
        <Select
          placeholder = { 'Object'}
          value={second_selection}
          onChange={this.handleChange}
          options={objects_1}
        />
      </div>
    );
  }
}



export default RelationOrdering;
