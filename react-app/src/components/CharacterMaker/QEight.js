import React, { Component } from "react";
import { connect } from "react-redux";

import { updateQuestionNumber } from "../../ducks/reducer.js";

class QEight extends Component {
  render() {
    const { updateQuestionNumber } = this.props;

    return (
      <div
        style={{ display: this.props.questionNumber === 8 ? "block" : "none" }}
      >
        <h1>Eighth Question</h1>
        <select>
          <option type="text" value="type1">
            Type One
          </option>
          <option type="text" value="type2">
            Type Two
          </option>
          <option type="text" value="type3">
            Type Three
          </option>
        </select>
        <br />
        <button onClick={() => updateQuestionNumber(9)}>Next Question</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { questionNumber } = state;

  return {
    questionNumber
  };
}

export default connect(mapStateToProps, { updateQuestionNumber })(QEight);
