import React, { Component } from "react";
import { connect } from "react-redux";

import { updateQuestionNumber } from "../../../ducks/reducer.js";

class QSeven extends Component {
  render() {
    const { updateQuestionNumber } = this.props;

    return (
      <div
        style={{ display: this.props.questionNumber === 7 ? "block" : "none" }}
      >
        <h1>Seventh Question</h1>
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
        <button onClick={() => updateQuestionNumber(8)}>Next Question</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { questionNumber } = state;
  return { questionNumber };
};

export default connect(mapStateToProps, { updateQuestionNumber })(QSeven);
