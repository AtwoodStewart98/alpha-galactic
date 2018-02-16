import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { updateQuestionNumber, updateTraining } from "../../ducks/reducer.js";

class QFive extends Component {
  render() {
    const { updateQuestionNumber, updateTraining } = this.props;

    return (
      <div
        style={{ display: this.props.questionNumber === 5 ? "block" : "none" }}
      >
        <p>
          From among the following, which is closest to what your character is
          most extensively trained or knowledgeable in?
        </p>
        <ol>
          <li>
            Put any heavy arms rifle in my hands, and I&#39;ll know how to use
            it with practiced efficiency. My military background has given me
            plenty of experience with everything and anything that could happen
            on the battlefield. I am learned in many advanced assault tactics.
          </li>
          <li>
            Growing up, my homeworld and community did not provide for me or
            support me in any way, so I had to learn to fend for myself, if
            sometimes a little dishonestly. I am very streetwise and dodging
            through the alleys and layouts of the inner cities is second nature
            to me. I can also establish a rapport with just about anyone
            who&#39;s as down-to-the-ground as I am.
          </li>
        </ol>
        <select>
          <option
            type="text"
            value="Military background, learned in heavy arms and battlefield tactics"
          >
            1.
          </option>
          <option type="text" value="type2">
            2.
          </option>
          <option type="text" value="type3">
            3.
          </option>
        </select>
        <br />
        <button onClick={() => updateQuestionNumber(6)}>Next Question</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { questionNumber, training } = state;

  return {
    questionNumber,
    training
  };
}

export default connect(mapStateToProps, { updateQuestionNumber })(QFive);
