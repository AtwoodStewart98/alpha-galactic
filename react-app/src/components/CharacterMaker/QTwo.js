import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updateQuestionNumber,
  updateAlignmentTwo
} from "../../ducks/reducer.js";

class QTwo extends Component {
  render() {
    const { updateQuestionNumber, updateAlignmentTwo } = this.props;

    return (
      <div
        style={{ display: this.props.questionNumber === 2 ? "block" : "none" }}
      >
        <p>
          You&#39;re doing business in an impoverished area of town. You have
          just recieved a pay packet from your most recent mission by your
          employer. As you make your way back to the spaceport, a clearly
          undernourished alien reaches a greasy claw out to you, pleading for
          something to help make it through the week.
        </p>
        <ol>
          <li>
            Homelessness is a travesty in an age where nations are the richest
            they&#39;ve ever been from among all known history. I hand over my
            entire pay packet, knowing I have enough to get by.
          </li>
          <li>
            I give him enough money to help him make it to the end of the week,
            as asked, but nothing more. I also offer to take him to the nearest
            economic support facility, where he can be guaranteed employment.
          </li>
          <li>
            It&#39;s a shame the situation the poor individual has gotten into,
            but I cannot offer anything; in my head, I silently wish him the
            best of luck. I can&#39;t guarantee where my next compensation is
            coming from, anyway, so I need to hang on to everything I have.
          </li>
          <li>
            I hand him my spare weapon and tell him to come with me. Robbery is
            always easier when you have a wingman.
          </li>
          <li>
            I ignore him and keep walking. The misfortune of others is not my
            problem.
          </li>
        </ol>
        <select onChange={e => updateAlignmentTwo(e.target.value)}>
          <option type="text" value="Good">
            1.
          </option>
          <option type="text" value="Lawful Good">
            2.
          </option>
          <option type="text" value="Neutral">
            3.
          </option>
          <option type="text" value="Chaotic Evil">
            4.
          </option>
          <option type="text" value="Evil">
            5.
          </option>
        </select>
        <br />
        <button onClick={() => updateQuestionNumber(3)}>Next Question</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { questionNumber, alignment2 } = state;

  return {
    questionNumber,
    alignment2
  };
}

export default connect(mapStateToProps, {
  updateQuestionNumber,
  updateAlignmentTwo
})(QTwo);
