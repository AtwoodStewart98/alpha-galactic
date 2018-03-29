import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../react-scss/react-css/HeaderFrame.css";

import { updateQuestionNumber } from "../../ducks/reducer.js";

class HeaderFrame extends Component {
  render() {
    const { updateQuestionNumber } = this.props;

    return (
      <div className="nav-flexer">
        <Link to="/">
          <h1 className="app-title">ALPHA GALACTIC</h1>
        </Link>
        <ul>
          <Link to="/">
            <li>HOME</li>
          </Link>
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
    );
  }
}

const mapStateToProps = state => {
  const { questionNumber } = state;
  return { questionNumber };
};

export default connect(mapStateToProps, { updateQuestionNumber })(HeaderFrame);
