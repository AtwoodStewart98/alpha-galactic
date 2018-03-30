import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updateQuestionNumber,
  updateCharName
} from "../../../ducks/reducer.js";

class QEight extends Component {
  render() {
    const { updateQuestionNumber, updateCharName } = this.props;

    return (
      <div
        style={{
          display: this.props.questionNumber === 8 ? "block" : "none"
        }}
      >
        <p>Name your character.</p>
        <input
          placeholder="character name"
          type="text"
          onChange={e => updateCharName(e.target.value)}
        />
        <br />
        <div
          className={
            this.props.charName.length < 3 ? "disabled-button" : "next-button"
          }
        >
          <button
            disabled={this.props.charName < 3}
            onClick={() => {
              updateQuestionNumber(9);
            }}
          >
            Next Question
          </button>
        </div>
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
})(QEight);
