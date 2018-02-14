import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../react-scss/react-css/HeaderFrame.css";

class HeaderFrame extends Component {
  render() {
    return (
      <div className="header-box">
        <h1 className="app-title">Alpha Galactic Campaign Manager</h1>
        <div>
          <ul className="nav-flexer">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/characterMaker">
              <li>Character Creator</li>
            </Link>
            <Link to="/weaponGenerator">
              <li>Random Weapon Generator</li>
            </Link>
            <Link to="/login">
              <li>Login / Sign Up</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(HeaderFrame);
