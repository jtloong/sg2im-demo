import React, { Component } from 'react';
import ObjectInput from './ObjectInput';
import RelationOrdering from './RelationOrdering';
import './css/App.css';
import './css/RelationOrdering.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene_graph : {
          "objects": [],
          "relationships": []
      }
    };
  }


  addObjects = (object) => {
      this.state.scene_graph.objects.push(object);
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
        <p className="intro">
          Use the widgets below to create relationships between your objects.
        </p>
        <RelationOrdering objectList={this.state.scene_graph.objects}/>
      </div>
    );
  }
}

export default App;
