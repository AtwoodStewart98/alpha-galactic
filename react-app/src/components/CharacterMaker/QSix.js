import React, { Component } from "react";
import { connect } from "react-redux";

import { updateQuestionNumber, updateCharName } from "../../ducks/reducer.js";

class QSix extends Component {
  render() {
    const { updateQuestionNumber, updateCharName } = this.props;

    return (
      <div
        style={{
          display: this.props.questionNumber === 6 ? "block" : "none"
        }}
      >
        <p>Name your character.</p>
        <input
          placeholder="character name"
          type="text"
          onChange={e => updateCharName(e.target.value)}
        />
        <br />
        <button onClick={() => updateQuestionNumber(7)}>Next Question</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { questionNumber, charName } = state;

  return {
    questionNumber,
    charName
  };
}

export default connect(mapStateToProps, {
  updateQuestionNumber,
  updateCharName
})(QSix);
