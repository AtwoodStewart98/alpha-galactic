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
        <br />
        <button onClick={() => updateQuestionNumber(0)}>Next Question</button>
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
    trueAlignment
  } = state;

  return {
    questionNumber,
    alignment,
    alignment2,
    alignment3,
    trueAlignment
  };
}

export default connect(mapStateToProps, { updateQuestionNumber })(QResults);
