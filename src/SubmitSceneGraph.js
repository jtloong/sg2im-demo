import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SubmitSceneGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.props.scene_graph);
    var scene_graph = this.props.scene_graph;

    function createCORSRequest(method, url){
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr){
          xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined"){
          xhr = new XDomainRequest();
          xhr.open(method, url);
      } else {
          xhr = null;
      }
      return xhr;
    }

    function get_image(){
      
    }

    var request = createCORSRequest("post", 'http://127.0.0.1:5000/generate');
    if (request){
        request.onload = function() {
            console.log("Connection success!");
            console.log(request.status);
            if (request.status == 201){
              get_image();
            }
        };
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(JSON.stringify(scene_graph));

    }
    event.preventDefault();
  }


  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input class='generate-button' type="submit" value="Generate" />
      </form>
    );
  }
}



export default SubmitSceneGraph;
