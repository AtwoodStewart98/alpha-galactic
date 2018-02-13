import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class CharacterMaker extends Component {
  render() {
    return (
      <div>
        <h1>Make A Character</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(CharacterMaker);
