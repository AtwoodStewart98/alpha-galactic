import React, { Component } from "react";
import { connect } from "react-redux";

import { updateLore } from "../../../ducks/reducer.js";

class MercenariesLore extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { updateLore } = this.props;

    return (
      <div className="loreganizer">
        <h2>Mercenaries</h2>
        <p>
          <strong>Neutral Faction</strong>
        </p>
        <p>
          <strong>Lvls 1-10</strong>
        </p>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          There are some in the galaxy who wish to be loyal to no faction, to
          pledge allegiance only to themselves and the almighty thrill of
          exploration. These are those individuals. Truly a mixed bag of
          lifestyles, beliefs, and races, this loosely associated group can
          bring out either the best or the worst of the galaxy, and all shades
          in between. Usually coming from some sort of paramilitary background,
          individuals in this category are well-armed, tactical combatants, each
          with their own sense of honor. They are usually trustworthy, but only
          if their job pays off well enough.
        </p>
        <p>
          <strong>Hierarchy</strong>
        </p>
        <p>
          While this group never has and never will have a leader due to its
          informality, there is one individual who commands the largest group of
          similarly-minded mercenaries and who is generally considered to wield
          the most power; the Draconisian Commander Crimson. Most members of the
          group will respond to her call regardless of their moral alignment
          simply for the opportunities she has to offer. The rest of the
          individuals either work alone or form small groups, usually in no
          greater numbers than four. Generally, the more well-armed and seasoned
          the mercenary, the more recognized and influential he or she is among
          their ranks.
        </p>
        <p>
          <strong>Notable Members</strong>
        </p>
        <p>
          Commander Crimson - This Draconisian renegade, formerly a high-ranking
          squad leader in the TAC, now leads her former team in the name of
          vigilante justice and profit. The Omega Cell, as her group is now
          called, is based on the lowest level of the city of Garbahn on the
          planet Crescent, out of the detection of the GDOS. As experienced in
          covert ops as well as she is in standard military assault, this
          secretive, no-nonsense individual will do as she is hired to do -
          until something more lucrative is offered.
        </p>
        <p>
          <strong>Notable Locations</strong>
        </p>
        <p>
          Garbahn - The city stratus just above the engineering miracle of the
          sewer system on Crescent, this place is home to lowlifes,
          opportunists, and Commander Crimson&#39;s Omega Cell. Based in a
          low-roofed warehouse retrofitted with an intricate database, it is
          visited by several ex-GDOS Draconis and Gobs, businessmen in the gray
          zone, and others willing to pay for intelligence or someone&#39;s
          demise. The police turn a blind eye to the complex for the most part;
          after all, information&#39;s got to come from somewhere firsthand.
        </p>
        <p>
          <strong>Notable Relationships</strong>
        </p>
        <p>
          {/* eslint-disable-next-line */}
          <a onClick={() => updateLore("Vigilantes")}>Vigilantes</a> - Although
          mercenaries have no definitive alignment and come from all kinds of
          backgrounds, they collectively despise this far more unscrupulous and
          orderly faction. Their smug attitudes and access to more advanced
          weaponry rather infuriate those who simply want to make it by.
          Although not exactly enemies, any encounter between these two parties
          usually ends in crossfire.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateLore }
)(MercenariesLore);
