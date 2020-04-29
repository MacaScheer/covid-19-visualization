import React from 'react';
import './App.css';
import axios from "axios"
// import DropDown from "./dropDown.js";
import Visualizer from "./visualizer/Visualizer.js"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wholeData: "",
      defaultState: "California"
    }
  }
  componentDidMount() {
    axios.get("https://covidtracking.com/api/v1/states/current.json", res => {
      this.setState({wholeData: res})
    })
  }

  render() {
    return (
      <div className="App">
        {/* <DropDown currentState={this.state.defaultState} /> */}
        <Visualizer data={this.state.wholeData[this.state.defaultState]} />
        </div>
    );
  }
}

export default App;
