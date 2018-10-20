import React, { Component } from "react";
import { connect } from "react-redux";

class ThraxLore extends Component {
  render() {
    return (
      <div className="loreganizer">
        <h2>Thraxian Invaders</h2>
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
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ThraxLore);
