import React, { Component } from "react";
import { connect } from "react-redux";

import { updateQuestionNumber, resetQuestions } from "../../ducks/reducer.js";

class QResults extends Component {
  render() {
    const { updateQuestionNumber, resetQuestions } = this.props;

    return (
      <div
        style={{ display: this.props.questionNumber === 10 ? "block" : "none" }}
      >
        <h1>Results:</h1>
        <p>Name: {this.props.charName}</p>
        <p>Alignment: {this.props.trueAlignment}</p>
        <p>Race: {this.props.race}</p>
        <p>Experience: {this.props.training}</p>
        <p>Faction: {this.props.faction}</p>
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
