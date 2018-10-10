import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../react-scss/react-css/HeaderFrame.css";

import { updateQuestionNumber } from "../../ducks/reducer.js";

class HeaderFrame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBurger: false
    };

    this.updateBurger = this.updateBurger.bind(this);
    this.screenDetector = this.screenDetector.bind(this);
  }

  updateBurger() {
    this.setState(state => ({
      showBurger: !state.showBurger
    }));
  }

  screenDetector(el) {
    if (el.matches) {
      this.setState(state => ({
        showBurger: false
      }));
    }
  }

  render() {
    const { updateQuestionNumber } = this.props;

    let mediaMatch = window.matchMedia("(min-width: 965px)");
    mediaMatch.addListener(this.screenDetector);

    return (
      <div className="header-nav">
        <div className="nav-flexer">
          <div className="burger-menu" onClick={this.updateBurger}>
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
          style={{ display: this.state.showBurger ? "block" : "none" }}
        >
          <ul>
            <Link
              to="/characterMaker"
              onClick={(() => updateQuestionNumber(0), this.updateBurger)}
            >
              <li>CHARACTER</li>
            </Link>
            <Link to="/weaponGenerator" onClick={this.updateBurger}>
              <li>WEAPONS</li>
            </Link>
            <Link to="/enemyLore" onClick={this.updateBurger}>
              <li>LORE</li>
            </Link>
            <Link to="/encounterGenerator" onClick={this.updateBurger}>
              <li>ENEMIES</li>
            </Link>
            <Link to="/login" onClick={this.updateBurger}>
              <li>LOGIN</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { questionNumber } = state;
  return { questionNumber };
};

export default connect(
  mapStateToProps,
  { updateQuestionNumber }
)(HeaderFrame);
