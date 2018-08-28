import React, { Component } from "react";
import { connect } from "react-redux";

class CharacterProfile extends Component {
  render() {
    return (
      <div>
        <h1>CharacterProfile</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(CharacterProfile);
