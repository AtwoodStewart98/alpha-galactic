import React, { Component } from "react";
import { connect } from "react-redux";

import Xiphave from "../../assets/xiphaverace.png";
import Arktonian from "../../assets/arktonianrace.png";
import Thrax from "../../assets/thraxrace.png";
import Holkovrhys from "../../assets/holkovrhysrace.png";
import Porturuxean from "../../assets/porturuxeanrace.png";
import Draconis from "../../assets/draconisrace.png";
import Gob from "../../assets/gobrace.png";
import Tomlin from "../../assets/tomlinrace.png";
import Arthrotera from "../../assets/arthroterarace.png";

import { updateQuestionNumber, resetQuestions } from "../../ducks/reducer.js";

class QResults extends Component {
  render() {
    const { updateQuestionNumber, resetQuestions } = this.props;

    return (
      <div
        style={{ display: this.props.questionNumber === 10 ? "block" : "none" }}
      >
        <div>
          {this.props.race !== "" ? (
            <img src={this.props.race} alt="race" />
          ) : null}
          <p>Name: {this.props.charName}</p>
          <p>Alignment: {this.props.trueAlignment}</p>
          <p>Experience: {this.props.training}</p>
          <p>Faction: {this.props.faction}</p>
        </div>
        <br />
        <button
          onClick={() => {
            updateQuestionNumber(0);
            resetQuestions();
          }}
        >
          Restart
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    questionNumber,
    alignment,
    alignment2,
    alignment3,
    trueAlignment,
    race,
    training,
    faction,
    charName
  } = state;
  return {
    questionNumber,
    alignment,
    alignment2,
    alignment3,
    trueAlignment,
    race,
    training,
    faction,
    charName
  };
};

export default connect(mapStateToProps, {
  updateQuestionNumber,
  resetQuestions
})(QResults);
