import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import QOne from "./QOne.js";
import QTwo from "./QTwo.js";
import QThree from "./QThree.js";
import QFour from "./QFour.js";
import QFive from "./QFive.js";
import QSix from "./QSix.js";
import QSeven from "./QSeven.js";
import QEight from "./QEight.js";
import QNine from "./QNine.js";
import QResults from "./QResults.js";

import "../../react-scss/react-css/CharacterMaker.css";

import { updateQuestionNumber } from "../../ducks/reducer.js";

class CharacterMaker extends Component {
  render() {
    const { updateQuestionNumber } = this.props;

    return (
      <div className="character-container">
        <h1>Make A Character</h1>
        <section>
          <div
            style={{
              display: this.props.questionNumber === 0 ? "block" : "none"
            }}
          >
            <p>
              Get started with a set of questions to flesh out your character!
            </p>
            <button onClick={() => updateQuestionNumber(1)}>
              First Question
            </button>
          </div>
          <QOne />
          <QTwo />
          <QThree />
          <QFour />
          <QFive />
          <QSix />
          <QSeven />
          <QEight />
          <QNine />
          <QResults />
        </section>
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

export default connect(mapStateToProps, { updateQuestionNumber })(
  CharacterMaker
);
