import React, { Component } from "react";
import { connect } from "react-redux";

class CharacterTwo extends Component {
  render() {
    return (
      <div style={{ display: "none" }}>
        <h2>Character Two</h2>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(CharacterTwo);
