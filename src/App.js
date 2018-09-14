import React, {Component} from 'react';
import {PropEx} from './PropEx';
// import logo from './logo.svg';
import './App.css';

// two primary attribute: prop and state
// prop is somthing that floats arount entire app.
// state is something that is specific  for one component.

class App extends Component {
  constructor(){
      super();

      this.state = {
        test: "good"
      }
  }

  componentWillMount(){
    // This method gets call when the Component FIRST loads
  }

  componentDidMount() {
    // This method runs after the render() executes
  }

  componentWillReceiveProps(){
    // This function runs when the component receives new prop
  }

  render() {
    return (
      <div className="App">
        <div>GI 🤘🏿</div>
        <PropEx propAtt="GI" />
      {this.state.test}
      </div>
    );
  }
}

export default App;
