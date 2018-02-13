import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class WeaponGenerator extends Component {
  render() {
    return (
      <div>
        <h1>Random Weapon Generator</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(WeaponGenerator);
