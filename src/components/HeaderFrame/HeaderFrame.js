import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../react-scss/react-css/HeaderFrame.css";

import { updateBurger, updateQuestionNumber } from "../../ducks/reducer.js";

class HeaderFrame extends Component {
  render() {
    const { updateBurger, updateQuestionNumber } = this.props;

    return (
      <div className="header-nav">
        <div className="nav-flexer">
          <div className="burger-menu" onClick={() => updateBurger()}>
            <div />
            <div />
            <div />
          </div>
          <Link to="/">
            <h1 className="app-title">ALPHA GALACTIC</h1>
          </Link>
          <ul>
            <Link to="/characterMaker" onClick={() => updateQuestionNumber(0)}>
              <li>CHARACTER</li>
            </Link>
            <Link to="/weaponGenerator">
              <li>WEAPONS</li>
            </Link>
            <Link to="/enemyLore">
              <li>LORE</li>
            </Link>
            <Link to="/encounterGenerator">
              <li>ENEMIES</li>
            </Link>
            <Link to="/login">
              <li>LOGIN</li>
            </Link>
          </ul>
        </div>
        <div
          className="dropdown-menu"
          style={{ display: this.props.toggleBurger ? "block" : "none" }}
        >
          <ul>
            <Link to="/characterMaker" onClick={() => updateQuestionNumber(0)}>
              <li>CHARACTER</li>
            </Link>
            <Link to="/weaponGenerator">
              <li>WEAPONS</li>
            </Link>
            <Link to="/enemyLore">
              <li>LORE</li>
            </Link>
            <Link to="/encounterGenerator">
              <li>ENEMIES</li>
            </Link>
            <Link to="/login">
              <li>LOGIN</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { burgerToggle, questionNumber } = state;
  return { burgerToggle, questionNumber };
};

export default connect(
  mapStateToProps,
  { updateBurger, updateQuestionNumber }
)(HeaderFrame);
