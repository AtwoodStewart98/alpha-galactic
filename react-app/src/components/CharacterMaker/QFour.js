import React, { Component } from "react";
import { connect } from "react-redux";

import { updateQuestionNumber, updateRace } from "../../ducks/reducer.js";
import Xiphave from "../../assets/xiphaverace.png";
import Arktonian from "../../assets/arktonianrace.png";
import Thrax from "../../assets/thraxrace.png";
import Holkovrhys from "../../assets/holkovrhysrace.png";
import Porturuxean from "../../assets/porturuxeanrace.png";
import Draconis from "../../assets/draconisrace.png";
import Gob from "../../assets/gobrace.png";
import Tomlin from "../../assets/tomlinrace.png";
import Arthrotera from "../../assets/arthroterarace.png";

class QFour extends Component {
  render() {
    const { updateQuestionNumber, updateRace } = this.props;

    return (
      <div
        style={{ display: this.props.questionNumber === 4 ? "block" : "none" }}
      >
        <p>What is your character&#39;s race?</p>
        <form className="question-block race-questions">
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateRace("Porturuxean")}
              name="q4"
            />
            <img src={Porturuxean} alt="race1" width="170px" />
            <label>
              <strong>PORTURUXEAN</strong>
              <br />
              Humanoid race with distinctive crimson skin tone and feathered
              wings extending from the shoulder blades which been rendered
              vestigial after generations of disuse; only strong enough for
              gliding. Slightly protruding jaws with sharp canine teeth for
              carnivorous consumption. Belonging to one of the most prominent
              races in the Galactic Alliance.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateRace("Arthrotera")}
              name="q4"
            />
            <img src={Arthrotera} alt="race2" width="170px" />
            <label>
              <strong>ARTHROTERA</strong>
              <br />
              Insectoid race reminiscent of a stag beetle with a dark brown
              exoskeleton that has a green sheen in direct lighting. Six
              compound eyes allow them to detect even the tiniest movements, but
              they are particularly vulnerable to disorientating visuals.
              Another member of the Galactic Alliance.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateRace("Draconis")}
              name="q4"
            />
            <img src={Draconis} alt="race3" width="170px" />
            <label>
              <strong>DRACONIS</strong>
              <br />
              Reptilian lizardlike race with varying colored scales ranging from
              jet black to ochre and sandy brown. There exist two subspecies;
              one that possesses leathery wings with enough strength to allow
              low levels of flight, and one with a combustion organ in their
              chest that lets them exhale fire at a substantial physical drain.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateRace("Gob")}
              name="q4"
            />
            <img src={Gob} alt="race4" width="170px" />
            <label>
              <strong>GOB</strong>
              <br />
              Short-statured humanoid race with thin lime green skin, and
              possess efficient auditory, olfactory, and visual senses. Former
              enemy race of the Galactic Alliance, but have made a complete
              turnaround and now make up a vast majority of the Galactic
              Department of Security.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateRace("Holkovrhys")}
              name="q4"
            />
            <img src={Holkovrhys} alt="race5" width="170px" />
            <label>
              <strong>HOLKOVRHYS</strong>
              <br />
              Towering reptilian race with small indigo scales and bony horns
              curving back from the forehead; males have two large horns and
              females have a crown of smaller spikes. Prideful of their culture,
              bitterly racist towards Porturuxeans and vehement enemies of the
              Galactic Alliance.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateRace("Xiphave")}
              name="q4"
            />
            <img src={Xiphave} alt="race6" width="170px" />
            <label>
              <strong>XIPHAVE</strong>
              <br />
              Leathery-skinned, hairless race with bony features and a distinct
              flat, &#34;winged&#34; skull structure. External fangs protrude
              around the mouth, and their slit irises allow nightvision. Only
              race that totally comprises the Hyjakker space pirate empire.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateRace("Thrax")}
              name="q4"
            />
            <img src={Thrax} alt="race7" width="170px" />
            <label>
              <strong>THRAX</strong>
              <br />
              Humanoid race with tangerine-colored skin related to the Gob, but
              considered separate due to their obsession with genetic
              enhancements, deviating themselves from their biological cousins.
              Strongly atheistic and anti-religion, and almost always seen with
              open cybernetics. Raiding race with complete territory of the
              center of the galaxy.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateRace("Arktonian")}
              name="q4"
            />
            <img src={Arktonian} alt="race8" width="170px" />
            <label>
              <strong>ARKTONIAN</strong>
              <br />
              Insectoid race reminiscent of a cross between a centaur and a
              scorpion, with four legs supporting a carapaced torso, and a back
              end connected to a tail with a venomous stinger, which takes a
              week or so to regrow after use. Does not possess auditory senses,
              and communicates using body language and pheromones.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              type="radio"
              onClick={e => updateRace("Tomlin")}
              name="q4"
            />
            <img src={Tomlin} alt="race9" width="170px" />
            <label>
              <strong>TOMLIN</strong>
              <br />
              Avian race feathered in various shades of green and fully
              developed, strong wings, but no true arms. Among their four legs,
              the front pair have semi-opposable claws that allow handling of
              objects, with minor difficulty. Brilliantly empathetic and
              extremely social.
            </label>
          </p>
        </form>
        <br />
        <div
          className={this.props.race === "" ? "disabled-button" : "next-button"}
        >
          <button
            disabled={!this.props.race}
            onClick={() => {
              updateQuestionNumber(5);
            }}
          >
            Next Question
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { questionNumber, race } = state;

  return {
    questionNumber,
    race
  };
}

export default connect(mapStateToProps, { updateQuestionNumber, updateRace })(
  QFour
);
