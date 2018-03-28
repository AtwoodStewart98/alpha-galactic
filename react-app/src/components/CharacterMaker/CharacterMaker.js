import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import QOne from "./Questions/QOne.js";
import QTwo from "./Questions/QTwo.js";
import QThree from "./Questions/QThree.js";
import QFour from "./Questions/QFour.js";
import QFive from "./Questions/QFive.js";
import QSix from "./Questions/QSix.js";
import QSeven from "./Questions/QSeven.js";
import QEight from "./Questions/QEight.js";
import QNine from "./Questions/QNine.js";
import QResults from "./Questions/QResults.js";
import InitialWeapons from "./Questions/InitialWeapons.js";

import "../../react-scss/react-css/CharacterMaker.css";

import { updateQuestionNumber, resetQuestions } from "../../ducks/reducer.js";
import characterDesignSplash from "../../assets/characterDesignSplash.png";

class CharacterMaker extends Component {
  componentDidMount() {
    this.props.resetQuestions();
  }
  render() {
    const { updateQuestionNumber } = this.props;

    return (
      <div className="character-container">
        <div>
          <img
            className="character-splash"
            src={characterDesignSplash}
            alt="character splash"
          />
        </div>
        <section className="char-questions">
          <h1>CREATE YOUR CHARACTER</h1>
          <div
            style={{
              display: this.props.questionNumber === 0 ? "block" : "none"
            }}
          >
            <p>
              In order to get started as a player, you must first design a
              unique character you will be portraying and role-playing as in the
              world of Sector Alpha. The galaxy is full of various sentient
              races with adaptations relating to evolutionary patterns on their
              respective homeworlds, so remember that race is a determining
              factor in your character&#39;s strengths and weaknesses.
            </p>
            <p>
              Your character could be a swashbuckling insectoid space pirate on
              an eternal voyage for adventure, or a medic from the Galactic
              Alliance seeking out technology leading to the next great medical
              breakthough, or even an evil reptilian commando with an agenda to
              interally destabilize the government. Who your character is, what
              their strengths and knowledge are, and their background will be
              determined by the following multiple-choice and fill-in-the-blank
              questions.
            </p>
            <p>
              It is encouraged you take the time to carefully explore all the
              options before making your selections. Many questions do not
              directly ask for certain qualities, but are more of a gauge that
              determine your traits. Also, while it is not possible to use the
              back button to change an answer, there will be a &#39;Cancel&#39;
              option at the very end that will allow you to restart the process.
            </p>
            {this.props.user.username ? null : (
              <p>
                CAUTION: you will not be able to save your character without
                logging in. Consider{" "}
                <Link to="/login">logging in or creating an account</Link> to do
                so.
              </p>
            )}
            <div className="next-button">
              <button onClick={() => updateQuestionNumber(1)}>
                GET STARTED
              </button>
            </div>
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
        <InitialWeapons />
        <div className="home-footer">
          <p>
            This website and its content, excepting images, is copyright of
            Stewart Atwood - ©Stewart Atwood 2018. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { questionNumber, user } = state;
  return { questionNumber, user };
};

export default connect(mapStateToProps, {
  updateQuestionNumber,
  resetQuestions
})(CharacterMaker);
