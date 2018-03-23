import React, { Component } from "react";
import { connect } from "react-redux";

class ThraxLore extends Component {
  render() {
    return (
      <div>
        <h2>Thraxian Invaders</h2>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          If it weren&#39;t for the fact that this race is mostly reclusive and
          keep to their own territory near the center of the galaxy, the
          Galactic Alliance would be much more concerned about them. Notoriously
          xenophobic and technophilic, Thraxian invaders will destroy any
          trespassing ship in their territory, provoked or not, and will raid
          colonies they feel are too close to their borders with indiscriminate
          force. However, their neurotic need to physically augment themselves
          can overpower their reclusive nature, and sometimes loners will
          venture out to interact with colonies in search of technologies they
          find valuable.
        </p>
        <p>
          <strong>Hierarchy</strong>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ThraxLore);
