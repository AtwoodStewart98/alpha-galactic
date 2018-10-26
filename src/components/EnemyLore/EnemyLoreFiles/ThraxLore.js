import React, { Component } from "react";
import { connect } from "react-redux";

import { updateLore } from "../../../ducks/reducer.js";

class ThraxLore extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { updateLore } = this.props;

    return (
      <div className="loreganizer">
        <h2>Thraxian Invaders</h2>
        <p>
          <strong>Neutral Faction</strong>
        </p>
        <p>
          <strong>Lvls 4-10</strong>
        </p>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          If it weren&#39;t for the fact that this race is mostly reclusive and
          keep to their own territory near the center of the galaxy, the
          Galactic Alliance would be much more concerned about them. Notoriously
          xenophobic and technophilic, Thraxian invaders will destroy any
          trespassing ship in their territory, provoked or not, and raid nearby
          colonies they feel are too close to their borders with indiscriminate
          force. However, their neurotic need to physically augment themselves
          can overpower their reclusive nature, and sometimes loners will
          venture out to interact with colonies in search of technologies they
          find valuable.
        </p>
        <p>
          <strong>Hierarchy</strong>
        </p>
        <p>
          As is the case with most larger organizations that span across
          multiple planets, the Thrax do not have a distinct leader commanding
          their whole forces. Colonies and raiding fleets recognize each other
          as allies independent of one another&#39;s goals. That is not to say
          there are no individuals held in high esteem or who cannot command the
          attention of the Thrax; because of their obsession with cybernetics,
          they tend to turn for leadership among respected bioscientists or
          those who have undergone a significant amount of augmentation. The
          only true beacon of focus for the Thrax is an entity they refer to as
          &#34;The Assemblage&#34;, which members of the Galactic Alliance are
          unsure whether is actually a Thrax leader, advanced artificial
          intelligence, or revered deity.
        </p>
        <p>
          <strong>Notable Members</strong>
        </p>
        <p>
          Mirricious - Despite not actually being of the Thraxian race, she
          still commands a sizable, loyalist raiding fleet in her grasp. A
          former Holkovrhys war scientist, her own fascination with cybernetic
          augmentation in one stroke drove Mirricious away from her former
          laboratory and gained her the respect of the Thraxian forces she fled
          to. She now spends her time smuggling experimental technologies from
          the Holkovrhys Empire for Thraxian use, but don&#39;t expect her to
          assist in any other ploys against her former home; she still has no
          love for the Galactic Alliance.
        </p>
        <p>
          Henchesco - One of the most senior war captains of the Thrax, this
          feared veteran collaborated with the original scientists who created
          the bacta/nanobot hybrid serum that pumps through all Thraxian
          bloodstreams, giving them their quick regenerative properties. He has
          withdrawn from his glory days of assaulting colonies, however, and now
          has tasked his fleet with guarding the supermassive black hole in the
          center of the galaxy, where the vast majority of the Thrax&#39;s
          treasures and secrets are kept. If fighting him in combat, do not let
          his aging body fool you of his strength; his top-of-the-line
          cybernetics have ensured he has lost none of his battle prowess.
        </p>
        <p>
          The Assemblage - No gods or supernatural deities are recognized by the
          Thrax, but one name can bring whispers of reverence among even the
          most hardened warriors; that of The Assemblage. Leaders of the
          Galactic Alliance are unclear of the nature of who or what this title
          is attributed to, but the truth is a combination of the rumors and
          suppositions floating about. Once a Thraxian scientist, now a cyborg
          more artificial than biological, and whose expansive stores of
          knowledge makes it more of a mechanical superbeing than anything else.
          It does not lead its subjects directly, rather it manipulates the
          stream of information and data that guides the Thraxian fleets in
          decision-making. Its true motives are a mystery to all but itself.
        </p>
        <p>
          <strong>Notable Locations</strong>
        </p>
        <p>
          Errato - Although the Thrax tend to seclude themselves to systems in
          close proximity to the galaxy&#39;s center, this is one such outpost
          within the confines of Alliance territory they relentlessly hold onto.
          This planet once housed a notable factory/laboratory complex for the
          Colossus corporation, until the system&#39;s star went supernova and
          completely irradiated the planet, which miraculously survived the
          initial explosion. Once abandoned, the Thrax took an undetected route
          through Alliance lines and secured a foothold on the planet, which
          they somehow are able to keep from falling into the black hole that is
          the star&#39;s corpse.
        </p>
        <p>
          The Center of the Galaxy - It is no secret the Thrax choose to make
          their territory surrounding the supermassive black hole at the
          galaxy&#39;s center, but their reasons for doing so are unclear. It is
          known they have constructed a space station of absolutely gargantuan
          proportions closer than any ship can safely be piloted. Some kind of
          world-shattering gravitational power keeps it from collapsing into the
          center, and it is this power that both the Galactic Alliance and the
          Holkovrhys Empire fear. Many worry this technological feat, if
          weaponized, could be a superweapon to outclass all other superweapons.
        </p>
        <p>
          <strong>Notable Relations</strong>
        </p>
        <p>
          <a onClick={() => updateLore("Colossus, Inc")}>Colossus, Inc</a> -
          Although the Thrax generally prefer to not associate with anyone
          outside their own ranks, they have fostered what can only be described
          as a &#39;relationship&#39; with the Colossus corporation. Sometimes
          they can be found tentatively meeting on Colossus&#39;s terms, usually
          bartering technology or information, or negotiating a research site in
          close proximity to Thrax territory. Other times raiders will strike
          Colossus laboratories and firms in order to forcibly seize tech or
          send a message. The company seems to put up with these infrequent,
          albeit aggressive retaliations and cut their losses, at least for now.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { lore } = state;
  return { lore };
};

export default connect(
  mapStateToProps,
  { updateLore }
)(ThraxLore);
