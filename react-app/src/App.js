import React, { Component } from "react";
import { connect } from "react-redux";
import "./react-scss/react-css/App.css";

import HeaderFrame from "./components/HeaderFrame/HeaderFrame.js";
import router from "./router.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hello: ""
    };

    this.handleHelloChange = this.handleHelloChange.bind(this);
  }

  handleHelloChange(event) {
    this.setState({ hello: event.target.value });
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
