import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../react-scss/react-css/HeaderFrame.css";

import { updateQuestionNumber } from "../../ducks/reducer.js";

class HeaderFrame extends Component {
  render() {
    const { updateQuestionNumber } = this.props;

    return (
      <div className="header-box">
        <h1 className="app-title">Alpha Galactic Campaign Manager</h1>
        <div>
          <ul className="nav-flexer">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/characterMaker" onClick={() => updateQuestionNumber(0)}>
              <li>Character Creator</li>
            </Link>
            <Link to="/">
              <li>Enemy Encounters</li>
            </Link>
            <Link to="/weaponGenerator">
              <li>Weapon Generator</li>
            </Link>
            <Link to="/auth">
              <li>Login / Sign Up</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { questionNumber } = state;

  return {
    questionNumber
  };
}

export default connect(mapStateToProps, { updateQuestionNumber })(HeaderFrame);
