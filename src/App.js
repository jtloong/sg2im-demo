import React, { Component } from 'react';
import ObjectInput from './ObjectInput';
import RelationOrdering from './RelationOrdering';
import AddOrderElement from './AddOrderElement';
import './css/App.css';
import './css/RelationOrdering.css';
import './css/AddOrderElement.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene_graph : {
          "objects": [],
          "relationships": [
            [null, null, null]
          ]
      }
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

  render() {
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
          <AddOrderElement />
        </div>

        <RelationOrdering callbackFromParent={this.addRelation} objectList={this.state.scene_graph.objects}/>
      </div>
    );
  }
}

export default App;
