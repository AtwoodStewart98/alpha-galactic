import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../react-scss/react-css/HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <p className="descriptor">
          Welcome to the Alpha Galactic campaign manager. Build a character,
          create random encounters, access extensive lore in the universe, and
          randomly generate weapon drops.
        </p>
        <div className="home-flex">
          <div>
            <Link to="/characterMaker">Create your own Character</Link>
          </div>
          <div>
            <Link to="/encounterGenerator">Spawn Random Encounters</Link>
          </div>
        </div>
        <div className="home-flex">
          <div>
            <Link to="/weaponGenerator">Arm your Character</Link>
          </div>
          <div>
            <Link to="/auth">Login / Sign Up</Link>
          </div>
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

export default connect(mapStateToProps)(HomePage);
