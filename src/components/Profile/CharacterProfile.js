import React, { Component } from "react";
import { connect } from "react-redux";

import CharacterOne from "./Characters/CharacterOne.js"
import CharacterTwo from "./Characters/CharacterTwo.js"
import CharacterThree from "./Characters/CharacterThree.js"

import { getUser } from "../../ducks/reducer.js"

class CharacterProfile extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return (
      <div className="character-container">
        <CharacterOne />
        <CharacterTwo />
        <CharacterThree />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getUser })(CharacterProfile);
