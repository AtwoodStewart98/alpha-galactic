import React, { Component } from "react";
import { connect } from "react-redux";

import { updateQuestionNumber, updateCharName } from "../../ducks/reducer.js";

class QNine extends Component {
  render() {
    const { updateQuestionNumber, updateCharName } = this.props;

    return (
      <div
        style={{
          display: this.props.questionNumber === 9 ? "block" : "none"
        }}
      >
        <p>Name your character.</p>
        <input
          placeholder="character name"
          type="text"
          onChange={e => updateCharName(e.target.value)}
        />
        <br />
        <button onClick={() => updateQuestionNumber(10)}>Next Question</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { questionNumber, charName } = state;
  return { questionNumber, charName };
};

export default connect(mapStateToProps, {
  updateQuestionNumber,
  updateCharName
})(QNine);
