import React, { Component } from "react";
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
            I have researched everything there is to know about the galaxy&#39;s
            different religions and unnatural phenomena science has failed to
            explain. My extensive knowledge of theology allows me to gain deeper
            insights into some of the more bizarre objects I encounter.
          </li>
          <li>
            Despite the vast resources available to us in the galaxy, there is
            still the potential to turn a profit off of scarce technologies and
            innovative ideas. I know how affect captial in the market, spin a
            favorable transaction, and entrepreneur economic genius.
          </li>
          <li>
            Numbers and equations practically solve themselves in my head. I
            have multiple certifications in chemistry, physics, and engineering,
            all of which contribute to my drive to analyze and explain all
            natural phenomena in the galaxy. Scientific knowledge now has the
            potential to unlock our reality&#39;s secrets, and I will be the
            first to discover them.
          </li>
          <li>
            Individuals are drawn to me, and I am drawn to people. In a day and
            age where technology and resources separate us somewhat, and we
            aren&#39;t as acutely aware of our neighbors, I know how to reach
            out others and empathize with them. I catalyze social change and
            know how to stand up for my beliefs.
          </li>
          <li>
            From where I come from, I am known as a respected representative or
            voice of the people&#39;s interests. My understanding of various
            governances allows me to twist loopholes to my advantage, and gain a
            legal advantage over my opposition. I know how to lighten a
            sentence, or give someone a harsher punishment.
          </li>
          <li>
            In this era, medical science has advanced to the point where
            previously incurable diseases or severe physical injuries can be
            completely reversible. But these technologies and medicines still
            require a hand to utilize these tools, and I am that hand. I know
            almost all configurations of biology, and what to do when any of it
            goes wrong.
          </li>
          <li>
            The galaxy is a treasure chest, and I am seeking to open it to find
            out what riches and experiences lie inside. I have no specific trade
            or speciality; I wander the galaxy picking up useful information and
            techniques as I go. I am a jack-of-all-trades who can use a firearm
            and whatever else I have at my disposal to make it from one day to
            the next.
          </li>
        </ol>
        <select onChange={e => updateTraining(e.target.value)}>
          <option
            type="text"
            value="Military background, learned in heavy arms and battlefield tactics"
          >
            1.
          </option>
          <option
            type="text"
            value="Religious background, learned in theological lore and mystical artifacts"
          >
            2.
          </option>
          <option
            type="text"
            value="Business background, learned in economics and brainstorming"
          >
            3.
          </option>
          <option
            type="text"
            value="Scientific background, learned in the hard sciences and critical analysis"
          >
            4.
          </option>
          <option
            type="text"
            value="Activist background, learned in social change and leadership"
          >
            5.
          </option>
          <option
            type="text"
            value="Legal background, learned in legislature and politics"
          >
            6.
          </option>
          <option
            type="text"
            value="Medical background, learned in medicine and sentient biology"
          >
            7.
          </option>
          <option
            type="text"
            value="Mercenary background, learned in various trades and survival skills"
          >
            8.
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

export default connect(mapStateToProps, {
  updateQuestionNumber,
  updateTraining
})(QFive);
