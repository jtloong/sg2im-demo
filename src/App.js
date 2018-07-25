import React, { Component } from 'react';
import ObjectInput from './ObjectInput';
import './css/App.css';


class App extends Component {
  render() {
    var scene_graph = {
        "objects": [],
        "relationships": []
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sg2im Web Demo</h1>
        </header>
        <p className="intro">
          Welcome to the sg2im web demo! Use the input form below to enter objects you would like to visulize.
        </p>
        <ObjectInput scene_graph={scene_graph}/>
        <p className="intro">
          Add 
        </p>
      </div>
    );
  }
}

export default App;
