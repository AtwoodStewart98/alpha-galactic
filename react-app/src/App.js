import React, { Component } from "react";
import { connect } from "react-redux";
import "./react-scss/react-css/App.css";

import HeaderFrame from "./components/HeaderFrame/HeaderFrame.js";
import router from "./router.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionNumber: 0,
      alignment: "Lawful Good",
      alignment2: "Good",
      alignment3: "Neutral",
      trueAlignment: "Neutral"
    };

    this.handleQuestionNumber = this.handleQuestionNumber.bind(this);
    this.handleAlignment = this.handleAlignment.bind(this);
    this.handleAlignmentTwo = this.handleAlignmentTwo.bind(this);
    this.handleAlignmentThree = this.handleAlignmentThree.bind(this);
  }

  handleQuestionNumber(value) {
    this.setState({ questionNumber: value });
  }
  handleAlignment(event) {
    this.setState({ alignment: event.target.value });
  }
  handleAlignmentTwo(event) {
    this.setState({ alignment2: event.target.value });
  }
  handleAlignmentThree(event) {
    this.setState({ alignment3: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <HeaderFrame />
        <div>{router}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(App);
