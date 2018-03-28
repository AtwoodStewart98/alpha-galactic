import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updateQuestionNumber,
  updateCharDesc
} from "../../../ducks/reducer.js";

class QEight extends Component {
  render() {
    const { updateQuestionNumber, updateCharDesc } = this.props;

    return (
      <div
        style={{
          display: this.props.questionNumber === 8 ? "block" : "none"
        }}
      >
        <p className="desc-intro">
          Create a short description of your character&#39;s history.
        </p>
        <textarea
          className="desc-input"
          name="text"
          placeholder="Write a background..."
          maxlength="500"
          wrap="soft"
          onChange={e => updateCharDesc(e.target.value)}
        />
        <br />
        <p
          className="desc-counter"
          style={{
            color: this.props.charDesc.length > 480 ? "red" : "inherit"
          }}
        >
          {this.props.charDesc.length} / 500
        </p>
        <div
          className={
            this.props.charDesc.length < 10 ? "disabled-button" : "next-button"
          }
        >
          <button
            disabled={this.props.charDesc < 10}
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
  const { questionNumber, charDesc } = state;
  return { questionNumber, charDesc };
};

export default connect(mapStateToProps, {
  updateQuestionNumber,
  updateCharDesc
})(QEight);
