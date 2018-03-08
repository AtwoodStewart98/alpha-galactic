import React, { Component } from "react";
import { connect } from "react-redux";

import { updateQuestionNumber, updateRace } from "../../ducks/reducer.js";

class QFour extends Component {
  render() {
    const { updateQuestionNumber, updateRace } = this.props;

    return (
      <div
        className="q-four"
        style={{ display: this.props.questionNumber === 4 ? "block" : "none" }}
      >
        <p>What is your character&#39;s race?</p>
        <ul>
          <li>
            <strong>Porturuxean</strong> - Humanoid race with distinctive
            crimson skin tone and feathered wings extending from the shoulder
            blades which been rendered vestigial after generations of disuse;
            only strong enough for gliding. Slightly protruding jaws with sharp
            canine teeth for carnivorous consumption. Belonging to one of the
            most prominent races in the Galactic Alliance.
          </li>
          <li>
            <strong>Arthrotera</strong> - Insectoid race reminiscent of a stag
            beetle with a dark brown exoskeleton that has a green sheen in
            direct lighting. Six compound eyes allow them to detect even the
            tiniest movements, but they are particularly vulnerable to
            disorientating visuals. Another member of the Galactic Alliance.
          </li>
          <li>
            <strong>Draconis</strong> - Reptilian lizardlike race with varying
            colored scales ranging from jet black to ochre and sandy brown.
            There exist two subspecies; one that possesses leathery wings with
            enough strength to allow low levels of flight, and one with a
            combustion organ in their chest that lets them exhale fire at a
            substantial physical drain.
          </li>
          <li>
            <strong>Gob</strong> - Short-statured humanoid race with thin lime
            green skin, and possess efficient auditory, olfactory, and visual
            senses. Former enemy race of the Galactic Alliance, but have made a
            complete turnaround and now make up a vast majority of the Galactic
            Department of Security.
          </li>
          <li>
            <strong>Holkovrhys</strong> - Towering reptilian race with small
            indigo scales and bony horns curving back from the forehead; males
            have two large horns and females have a crown of smaller spikes.
            Prideful of their culture, bitterly racist towards Porturuxeans and
            vehement enemies of the Galactic Alliance.
          </li>
          <li>
            <strong>Xiphave</strong> - Leathery-skinned, hairless race with bony
            features and a distinct flat, &#34;winged&#34; skull structure.
            External fangs protrude around the mouth, and their slit irises
            allow nightvision. Only race that totally comprises the Hyjakker
            space pirate empire.
          </li>
          <li>
            <strong>Thrax</strong> - Humanoid race with tangerine-colored skin
            related to the Gob, but considered separate due to their obsession
            with genetic enhancements, deviating themselves from their
            biological cousins. Strongly atheistic and anti-religion, and almost
            always seen with open cybernetics. Raiding race with complete
            territory of the center of the galaxy.
          </li>
          <li>
            <strong>Arktonian</strong> - Insectoid race reminiscent of a cross
            between a centaur and a scorpion, with four legs supporting a
            carapaced torso, and a back end connected to a tail with a venomous
            stinger, which takes a week or so to regrow after use. Does not
            possess auditory senses, and communicates using body language and
            pheromones.
          </li>
          <li>
            <strong>Tomlin</strong> - Avian race feathered in various shades of
            green and fully developed, strong wings, but no true arms. Among
            their four legs, the front pair have semi-opposable claws that allow
            handling of objects, with minor difficulty. Brilliantly empathetic
            and extremely social.
          </li>
        </ul>
        <select onChange={e => updateRace(e.target.value)}>
          <option type="text" value="Porturuxean">
            Porturuxean
          </option>
          <option type="text" value="Arthrotera">
            Arthrotera
          </option>
          <option type="text" value="Draconis">
            Draconis
          </option>
          <option type="text" value="Gob">
            Gob
          </option>
          <option type="text" value="Holkovrhys">
            Holkovrhys
          </option>
          <option type="text" value="Xiphave">
            Xiphave
          </option>
          <option type="text" value="Thrax">
            Thrax
          </option>
          <option type="text" value="Arktonian">
            Arktonian
          </option>
          <option type="text" value="Tomlin">
            Tomlin
          </option>
        </select>
        <br />
        <button onClick={() => updateQuestionNumber(5)}>Next Question</button>
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
