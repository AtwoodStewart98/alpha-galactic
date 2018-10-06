import React, { Component } from "react";
import { connect } from "react-redux";

import "./react-scss/react-css/App.css";

import HeaderFrame from "./components/HeaderFrame/HeaderFrame.js";
import router from "./router.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      isLoading: false,
      didErr: false,
      errMessage: null,
      questionNumber: 0,
      alignment: "",
      alignment2: "",
      alignment3: "",
      trueAlignment: "",
      race: "",
      training: "",
      faction: "",
      charDesc: "",
      charName: "",
      spawnWeapon: {},
      savedCharacter: {},
      savedWeapons: {},
      encounter: "",
      lore: ""
    };
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
