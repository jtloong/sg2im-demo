import React, { Component } from 'react';
import ObjectInput from './ObjectInput';
import RelationOrdering from './RelationOrdering';
import AddOrderElement from './AddOrderElement';
import SubmitSceneGraph from './SubmitSceneGraph';
import './css/App.css';
import './css/RelationOrdering.css';
import './css/AddOrderElement.css';
import './css/ObjectInput.css';
import './css/SubmitSceneGraph.css';
var gen = require('random-seed');

class App extends Component {
  constructor(props) {
    super(props);
    var seed = String(new Date());
    var rand = gen.create(seed);
    var id = rand(100000000000);

    this.state = {
      scene_graph : {
          "visitor_id" : id,
          "objects": [],
          "relationships": [
            [null, null, null]
          ]
      },

      num_rules : [0]
    };
  }


  addObjects = (object) => {
      this.state.scene_graph.objects.push(object);
      // console.log(this.state.scene_graph);
      this.forceUpdate();
  }

  addRelation = (input) => {
    // console.log(input)
    switch(input.position){
      case 0:
        this.state.scene_graph.relationships[0][0] = input.index;
        break;
      case 1:
        this.state.scene_graph.relationships[0][1] = input.value;
        break;
      case 2:
        this.state.scene_graph.relationships[0][2] = input.index;
        break;
    }
    console.log(this.state.scene_graph);
    this.forceUpdate();
  }

  addRule = (buttonPress) => {
    var rules = this.state.num_rules;
    var new_key = rules[rules.length] + 1
    rules.push(new_key);
    this.setState({num_rules: rules});
    this.forceUpdate();
    console.log(this.state.num_rules);
  }

  render() {
    var items = this.state.num_rules.map(function(instance) {
      return <RelationOrdering key={instance} callbackFromParent={this.addRelation} objectList={this.state.scene_graph.objects}/>
    }, this);



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sg2im Web Demo</h1>
        </header>
        <p className="intro">
          Welcome to the sg2im web demo! Use the input form below to enter objects you would like to visulize.
        </p>
        <ObjectInput callbackFromParent={this.addObjects}/>
        <div className='relation_container'>
          <p className="intro">
            Use the widgets below to create relationships between your objects.
          </p>
          <AddOrderElement callbackFromParent={this.addRule} />
        </div>
        {items}
        <SubmitSceneGraph scene_graph={this.state.scene_graph} />
      </div>
    );
  }
}

export default App;
