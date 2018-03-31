import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updateQuestionNumber,
  updateAlignment
} from "../../../ducks/reducer.js";

class QOne extends Component {
  render() {
    const { updateQuestionNumber, updateAlignment } = this.props;

    return (
      <div
        style={{ display: this.props.questionNumber === 1 ? "block" : "none" }}
      >
        <p>
          Your character is taking a stroll in the downtown area of a city you
          are visiting when two authority figures approach you and instruct you
          to stop where you are. Valuable experimental technology has been
          stolen from a nearby corporate warehouse, and the thief fits your
          description.
        </p>
        <form className="question-block">
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateAlignment("Lawful Good")}
              name="q1"
            />
            <label>
              I comply with the law and submit to accompany the authorities to
              the local enforcement station, where a standard DNA test will be
              performed, thereby proving my innocence.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateAlignment("Good")}
              name="q1"
            />
            <label>
              Realizing I just brushed past the individual responsible a couple
              blocks back, I direct the authorities in the direction where I
              last saw the thief headed. I might even tag along to watch the
              idiot get arrested.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateAlignment("Neutral")}
              name="q1"
            />
            <label>
              I offer to help the cops track down the thief, in exchange for a
              small compensation package of course. Mercenary work doesn&#39;t
              pay itself, you know.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateAlignment("Evil")}
              name="q1"
            />
            <label>
              Foreseeing this situation, I&#39;ve already had an alibi prepared
              and brought evidence to help indicate elsewhere. Eventually, I
              persuade the cops I&#39;m not guilty without ever subjecting
              myself to a test. Once finished, I go to my arranged dropoff
              location to collect my paycheck.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateAlignment("Chaotic Evil")}
              name="q1"
            />
            <label>
              I shoot them both with my firearm and make a run for it. I
              didn&#39;t steal whatever it is they&#39;re talking about, but
              screw cops, man.
            </label>
          </p>
        </form>
        <br />
        <div
          className={
            this.props.alignment === "" ? "disabled-button" : "next-button"
          }
        >
          <button
            disabled={!this.props.alignment}
            onClick={() => updateQuestionNumber(2)}
          >
            Next Question
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { questionNumber, alignment } = state;

  return {
    questionNumber,
    alignment
  };
}

export default connect(mapStateToProps, {
  updateQuestionNumber,
  updateAlignment
})(QOne);
