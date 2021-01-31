import React, { Component } from "react";
import { connect } from "react-redux";

class CharacterThree extends Component {
  render() {
    return (
      <div style={{ display: "none" }}>
        <h2>Character Three</h2>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(CharacterThree);
