import React, { Component } from "react";
import { connect } from "react-redux";

class EncounterGenerator extends Component {
  render() {
    return (
      <div>
        <p>Encounter Generator here</p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(EncounterGenerator);
