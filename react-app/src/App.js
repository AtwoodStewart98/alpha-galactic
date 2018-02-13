import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

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
    return <div>{router}</div>;
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(App);
