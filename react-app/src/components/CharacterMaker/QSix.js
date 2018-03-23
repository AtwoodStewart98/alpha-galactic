import React, { Component } from "react";
import { connect } from "react-redux";

import { updateQuestionNumber, updateFaction } from "../../ducks/reducer.js";

class QSix extends Component {
  render() {
    const {
      updateQuestionNumber,
      updateFaction,
      faction,
      trueAlignment,
      race
    } = this.props;

    return (
      <div
        style={{
          display: this.props.questionNumber === 6 ? "block" : "none"
        }}
      >
        <p>
          Is your character aligned with a faction? Pick from the options below,
          or select &#39;None&#39;.
        </p>
        <form className="question-block">
          <p
            style={{
              display:
                trueAlignment !== "Evil" && trueAlignment !== "Chaotic Evil"
                  ? "block"
                  : "none"
            }}
          >
            <input
              className="radio-selector"
              onClick={e => updateFaction("G.D.O.S.")}
              type="radio"
              name="q6"
            />
            <label>
              <strong>G.D.O.S.</strong>
              <br />
              When the Galactic Alliance was first formed, the nations it was
              comprised of controlled almost a quarter of the known galaxy.
              Since this territory was so large, it had some difficulty
              protecting its citizens from raiding parties and evil empires. In
              order to rectify the problem, the nations assembled to develop an
              organization which became the first Galactic Department of
              Security. Originally, its membership was dominated by the defeated
              Gob nation paying off their war crimes, but now officers are more
              diverse than the Galactic Alliance itself. Anyone who swears
              allegiance to the preservation of peace and the well-being of
              others is eligible to take up arms and join the GDOS.
            </label>
          </p>
          <p
            style={{
              display:
                trueAlignment !== "Evil" &&
                trueAlignment !== "Chaotic Evil" &&
                race === "Porturuxean"
                  ? "block"
                  : "none"
            }}
          >
            <input
              className="radio-selector"
              onClick={e => updateFaction("Porturuxean Democracy")}
              type="radio"
              name="q6"
            />
            <label>
              <strong>Porturuxean Democracy</strong>
              <br />
              One of the original races that co-founded the Galactic Alliance,
              Porturuxeans are one of the strongest superpower nations in Sector
              Alpha. Many cornerstone technological developments have been
              innovated by Porturuxean scientists, and their military might is
              powerful enough to contend with Hyjakker pirates and invading
              Holkovrhys simultaneously. They command a larger share of
              political power in the Alliance than most, however the other
              nations allow this due to the fact the Porturuxean Democracy tends
              to recognize the fact that their strength is derived from their
              close relationships with their allies. Their only faults are
              derived from their tendency to distrust the religious and
              mystical, and their bitter, although somewhat justified, racism
              towards the Holkovrhys.
            </label>
          </p>
          <p
            style={{
              display:
                trueAlignment !== "Evil" &&
                trueAlignment !== "Chaotic Evil" &&
                race === "Draconis"
                  ? "block"
                  : "none"
            }}
          >
            <input
              className="radio-selector"
              onClick={e => updateFaction("Draconis Timocracy")}
              type="radio"
              name="q6"
            />
            <label>
              <strong>Draconis Timocracy</strong>
              <br />
              The Draconis are newcomers to the Galactic Alliance, and although
              their cultural values and overall ethos is sometimes difficult to
              grasp, their society has thrived quite well. Political power is
              determined by a strict code of honor, and only those who exemplify
              it in their line of work are eligible to take office. Deceit and
              dishonesty are the worst offenses to a Draconis; such traits are
              punished severely. One law of their ethos that has gradually been
              adopted by other nations is the concept that a fighter never
              enters combat without a melee weapon; in an era dominated by
              advanced firearms, it is a necessity to challenge your foe
              face-to-face, and to remind oneself of the reality of taking life.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              onClick={e => updateFaction("Mercenaries")}
              type="radio"
              name="q6"
            />
            <label>
              <strong>Mercenaries</strong>
              <br />
              There are some in the galaxy who wish to be loyal to no faction,
              to pledge allegiance only to themselves and the almighty thrill of
              exploration. These are those individuals. Truly a mixed bag of
              lifestyles, beliefs, and races, this loosely associated group can
              bring out either the best or the worst of the galaxy, and all
              shades in between. Usually coming from some sort of paramilitary
              background, individuals in this category are well-armed, tactical
              combatants, each with their own sense of honor. They are usually
              trustworthy, but only if their job pays off well enough.
            </label>
          </p>
          <p style={{ display: race === "Thrax" ? "block" : "none" }}>
            <input
              className="radio-selector"
              onClick={e => updateFaction("Thraxian Invaders")}
              type="radio"
              name="q6"
            />
            <label>
              <strong>Thraxian Invaders</strong>
              <br />
              If it weren&#39;t for the fact that this race is mostly reclusive
              and keep to their own territory near the center of the galaxy, the
              Galactic Alliance would be much more concerned about them.
              Notoriously xenophobic and technophilic, Thraxian invaders will
              destroy any trespassing ship in their territory, provoked or not,
              and will raid colonies they feel are too close to their borders
              with indiscriminate force. However, their neurotic need to
              physically augment themselves can overpower their reclusive
              nature, and sometimes loners will venture out to interact with
              colonies in search of technologies they find valuable.
            </label>
          </p>
          <p
            style={{
              display:
                trueAlignment !== "Good" &&
                trueAlignment !== "Lawful Good" &&
                race === "Holkovrhys"
                  ? "block"
                  : "none"
            }}
          >
            <input
              className="radio-selector"
              onClick={e => updateFaction("Holkovrhys Empire")}
              type="radio"
              name="q6"
            />
            <label>
              <strong>Holkovrhys Empire</strong>
              <br />
              Where there is light, there is darkness, and where there is the
              Galactic Alliance, there is the Holkovrhys Empire. Recognized
              equally for their artistically creative culture as well as their
              cruel acts of destruction, this race as a collective seeks nothing
              more than pure power and dominion over the largest piece of the
              galaxy they can get their hands on in order to conform it to their
              own vision. This conquering mindset has mostly been propagated by
              Emperor Docstiertun to those who have been born and raised in his
              empire&#39;s society, and Holkovrhys who live outside the Empire
              oftentimes reject his message, but some are still drawn in by the
              promise of being a part of a greatness that will last until the
              end of days.
            </label>
          </p>
          <p
            style={{
              display:
                trueAlignment !== "Good" &&
                trueAlignment !== "Lawful Good" &&
                race === "Xiphave"
                  ? "block"
                  : "none"
            }}
          >
            <input
              className="radio-selector"
              onClick={e => updateFaction("Hyjakker Coalition")}
              type="radio"
              name="q6"
            />
            <label>
              <strong>Hyjakker Coalition</strong>
              <br />
              Amongst all the ruthless raiders and cutthroat outlaws throughout
              the galaxy, no other pirate organization is more widespread and
              feared than the Hyjakkers. Made up entirely of the Xiphave race,
              reptilian humanoids with distinct fangs protruding around their
              mouths, their numbers are so great that they are able to fend off
              repeated backlashes from the various nations of the Galactic
              Alliance. They are known for raiding valuable minerals from mining
              planets, manufacturing their own brand of weaponry, putting
              fledgling civilizations at their mercy, and otherwise serving as
              the primary focus of the Alliance&#39;s Galactic Department of
              Security (GDOS).
            </label>
          </p>
          <p
            style={{
              display:
                trueAlignment !== "Good" && trueAlignment !== "Lawful Good"
                  ? "block"
                  : "none"
            }}
          >
            <input
              className="radio-selector"
              onClick={e => updateFaction("Vigilantes")}
              type="radio"
              name="q6"
            />
            <label>
              <strong>Vigilantes</strong>
              <br />
              Despite what the connotations surrounding their name would imply,
              the Vigilantes are anything but selfless do-gooders. A
              well-equipped piracy gang, they consist of highly autonomous and
              organized paramilitary cells that strike transport carriers and
              make off with whatever valuables they can get their hands on.
              Their numbers are commanded by Archon Virgil, an embittered
              Porturuxean ex-decorated general who abandoned his post after his
              service forced him to abandon his homeworld to be destroyed.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              onClick={e => updateFaction("Ekta Viren")}
              type="radio"
              name="q6"
            />
            <label>
              <strong>Ekta Viren</strong>
              <br />
              One of the last major surviving religions in Sector Alpha, the
              teachings of the Ekta Viren do not necessarily instruct members in
              behaviors or philosophies, but rather encourage common sense
              guidelines backed in theological meaning. Their presence stems
              from the fact that their prophecies that have originated across
              various planets all seem to match one another, despite having
              different points of origination. They do not have a presence in
              politics, but are content to aid communities and share prophecies
              that have yet to be disproven by official record as they take
              place.
            </label>
          </p>
          <p>
            <input
              className="radio-selector"
              onClick={e => updateFaction("None")}
              type="radio"
              name="q6"
            />
            <label>
              <strong>None</strong>
              <br />
              Your character pledges allegiance to no existing faction or racial
              nation.
            </label>
          </p>
        </form>
        <br />
        <div
          className={
            this.props.faction === "" ? "disabled-button" : "next-button"
          }
        >
          <button
            disabled={!this.props.faction}
            onClick={() => {
              updateQuestionNumber(7);
            }}
          >
            Next Question
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { questionNumber, faction, trueAlignment, race } = state;
  return { questionNumber, faction, trueAlignment, race };
};

export default connect(mapStateToProps, {
  updateQuestionNumber,
  updateFaction
})(QSix);
