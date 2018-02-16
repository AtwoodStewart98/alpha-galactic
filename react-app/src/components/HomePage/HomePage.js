import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>
          Welcome to the Alpha Galactic campaign manager. Build a character,
          create random encounters, access extensive lore in the universe, and
          randomly generate weapon drops.
        </p>
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
