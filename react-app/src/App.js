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
      trueAlignment: "Neutral",
      race: "Porturuxean",
      training:
        "Military background, learned in heavy arms and battlefield tactics",
      charName: "",
      spawnWeapon: {}
    };

    this.handleCharName = this.handleCharName.bind(this);
  }

  handleCharName(event) {
    this.setState({ charName: event.target.value });
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

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
