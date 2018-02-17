import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { updateQuestionNumber } from "../../ducks/reducer.js";

class QResults extends Component {
  render() {
    const { updateQuestionNumber } = this.props;

    return (
      <div
        style={{ display: this.props.questionNumber === 10 ? "block" : "none" }}
      >
        <h1>Results:</h1>
        <p>Alignment: {this.props.trueAlignment}</p>
        <p>Race: {this.props.race}</p>
        <p>Experience: {this.props.training}</p>
        <br />
        <button onClick={() => updateQuestionNumber(0)}>Restart</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    questionNumber,
    alignment,
    alignment2,
    alignment3,
    trueAlignment,
    race,
    training
  } = state;

  return {
    questionNumber,
    alignment,
    alignment2,
    alignment3,
    trueAlignment,
    race,
    training
  };
}

export default connect(mapStateToProps, { updateQuestionNumber })(QResults);
