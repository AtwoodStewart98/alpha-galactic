import React, { Component } from "react";
import { connect } from "react-redux";

import Xiphave from "../../../assets/xiphaverace.png";
import Arktonian from "../../../assets/arktonianrace.png";
import Thrax from "../../../assets/thraxrace.png";
import Holkovrhys from "../../../assets/holkovrhysrace.png";
import Porturuxean from "../../../assets/porturuxeanrace.png";
import Draconis from "../../../assets/draconisrace.png";
import Gob from "../../../assets/gobrace.png";
import Tomlin from "../../../assets/tomlinrace.png";
import Arthrotera from "../../../assets/arthroterarace.png";

import {
  updateQuestionNumber,
  resetQuestions
} from "../../../ducks/reducer.js";

class QResults extends Component {
  render() {
    const { updateQuestionNumber, resetQuestions } = this.props;

    return (
      <div
        style={{ display: this.props.questionNumber === 10 ? "block" : "none" }}
      >
        <div className="results-flex">
          <div>
            {this.props.race === "Porturuxean" ? (
              <img src={Porturuxean} alt="race" />
            ) : this.props.race === "Arthrotera" ? (
              <img src={Arthrotera} alt="race" />
            ) : this.props.race === "Draconis" ? (
              <img src={Draconis} alt="race" />
            ) : this.props.race === "Gob" ? (
              <img src={Gob} alt="race" />
            ) : this.props.race === "Thrax" ? (
              <img src={Thrax} alt="race" />
            ) : this.props.race === "Tomlin" ? (
              <img src={Tomlin} alt="race" />
            ) : this.props.race === "Xiphave" ? (
              <img src={Xiphave} alt="race" />
            ) : this.props.race === "Holkovrhys" ? (
              <img src={Holkovrhys} alt="race" />
            ) : this.props.race === "Arktonian" ? (
              <img src={Arktonian} alt="race" />
            ) : null}
            <p>
              <strong>Race:</strong> {this.props.race}
            </p>
          </div>
          <div className="results-info">
            <p>
              <strong>Name:</strong>
            </p>
            <h2>{this.props.charName}</h2>
            <p>
              <strong>Alignment:</strong>
              <br />
              {this.props.trueAlignment}
            </p>
            <p>
              <strong>Experience:</strong>
              <br />
              {this.props.training}
            </p>
            <p>
              <strong>Faction:</strong>
              <br />
              {this.props.faction}
            </p>
            <p>
              <strong>Description:</strong>
              <br />
              {this.props.charDesc}
            </p>
          </div>
        </div>
        <br />
        <div className="next-button">
          <button
            style={{
              display: this.props.user !== undefined ? "inline-block" : "none"
            }}
            onClick={() => {
              updateQuestionNumber(11);
            }}
          >
            SAVE
          </button>
          <button
            onClick={() => {
              updateQuestionNumber(0);
              resetQuestions();
            }}
          >
            CANCEL
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    user,
    questionNumber,
    alignment,
    alignment2,
    alignment3,
    trueAlignment,
    race,
    training,
    faction,
    charDesc,
    charName
  } = state;
  return {
    user,
    questionNumber,
    alignment,
    alignment2,
    alignment3,
    trueAlignment,
    race,
    training,
    faction,
    charDesc,
    charName
  };
};

export default connect(mapStateToProps, {
  updateQuestionNumber,
  resetQuestions
})(QResults);
