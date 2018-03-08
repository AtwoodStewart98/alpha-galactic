import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updateQuestionNumber,
  updateAlignmentThree,
  updateTrueAlignment
} from "../../ducks/reducer.js";

class QThree extends Component {
  render() {
    const {
      updateQuestionNumber,
      updateAlignmentThree,
      updateTrueAlignment,
      alignment,
      alignment2,
      alignment3
    } = this.props;

    return (
      <div
        style={{ display: this.props.questionNumber === 3 ? "block" : "none" }}
      >
        <p>
          You&#39;re ready to take on your next mission. You approach the job
          board at your preferred local mercenary hub and browse the posting for
          a mission that seems specially tasked for your set of skills. Which
          assignment do you choose to accept?
        </p>
        <ol>
          <li>
            Whichever pays the best, of course. What did I come here for
            otherwise? I might stray away from the more tasteless assignments,
            but money is the fuel that powers my adventure.
          </li>
          <li>
            An unnamed contact claims a politician in a position to abuse their
            power has spurned a a group of people represented by said contact. I
            will be paid handsomely in money and secrets if said politician is
            dispatched of carefully and quietly.
          </li>
          <li>I haven&#39;t tried arson before. Arson sounds like fun.</li>
          <li>
            I wouldn&#39;t be at some questionable dive getting my assignments.
            The Galactic Department of Security is always offering perfectly
            legal peacekeeping assignments to honorable mercenaries such as
            myself. Recapturing criminals and protecting transports is my
            specialty.
          </li>
          <li>
            There&#39;s one mission calling for someone to help out a local
            merchant whose goods were stolen by the Xiphave. The goods are a few
            tons of a recently developed compound that could have valuable
            infrastructural applications. Helping out the locals plus I get to
            rid the universe of a few more scumbag pirates? Sign me up!
          </li>
        </ol>
        <select onChange={e => updateAlignmentThree(e.target.value)}>
          <option type="text" value="Neutral">
            1.
          </option>
          <option type="text" value="Evil">
            2.
          </option>
          <option type="text" value="Chaotic Evil">
            3.
          </option>
          <option type="text" value="Lawful Good">
            4.
          </option>
          <option type="text" value="Good">
            5.
          </option>
        </select>
        <br />
        <button
          onClick={() => {
            updateQuestionNumber(4);
            updateTrueAlignment(alignment, alignment2, alignment3);
          }}
        >
          Next Question
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    questionNumber,
    alignment,
    alignment2,
    alignment3,
    trueAlignment
  } = state;

  return {
    questionNumber,
    alignment,
    alignment2,
    alignment3,
    trueAlignment
  };
}

export default connect(mapStateToProps, {
  updateQuestionNumber,
  updateAlignmentThree,
  updateTrueAlignment
})(QThree);
