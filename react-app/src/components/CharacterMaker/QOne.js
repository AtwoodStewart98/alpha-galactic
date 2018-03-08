import React, { Component } from "react";
import { connect } from "react-redux";

import { updateQuestionNumber, updateAlignment } from "../../ducks/reducer.js";

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
        <ol>
          <li>
            I comply with the law and submit to accompany the authorities to the
            local enforcement station, where a standard DNA test will be
            performed, thereby proving my innocence.
          </li>
          <li>
            Realizing I just brushed past the individual responsible a couple
            blocks back, I direct the authorities in the direction where I last
            saw the thief headed. I might even tag along to watch the idiot get
            arrested.
          </li>
          <li>
            I offer to help the cops track down the thief, in exchange for a
            small compensation package of course. Mercenary work doesn&#39;t pay
            itself, you know.
          </li>
          <li>
            Foreseeing this situation, I&#39;ve already had an alibi prepared
            and brought evidence to help indicate elsewhere. Eventually, I
            persuade the cops I&#39;m not guilty without ever subjecting myself
            to a test. Once finished, I go to my arranged dropoff location to
            collect my paycheck.
          </li>
          <li>
            I shoot them both with my firearm and make a run for it. I
            didn&#39;t steal whatever it is they&#39;re talking about, but screw
            cops, man.
          </li>
        </ol>
        <select onChange={e => updateAlignment(e.target.value)}>
          <option type="text" value="Lawful Good">
            1.
          </option>
          <option type="text" value="Good">
            2.
          </option>
          <option type="text" value="Neutral">
            3.
          </option>
          <option type="text" value="Evil">
            4.
          </option>
          <option type="text" value="Chaotic Evil">
            5.
          </option>
        </select>
        <br />
        <button onClick={() => updateQuestionNumber(2)}>Next Question</button>
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
