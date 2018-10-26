import React, { Component } from "react";
import { connect } from "react-redux";

class PorturuxeanLore extends Component {
  render() {
    return (
      <div className="loreganizer">
        <h2>The Porturuxean Democracy</h2>
        <p>
          <strong>Good Faction</strong>
        </p>
        <p>
          <strong>Lvls 1-10</strong>
        </p>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          One of the original races that co-founded the Galactic Alliance,
          Porturuxeans are one of the strongest superpower nations in Sector
          Alpha. Many cornerstone technological developments have been innovated
          by Porturuxean scientists, and their military might is powerful enough
          to contend with Hyjakker pirates and invading Holkovrhys
          simultaneously. They command a larger share of political power in the
          Alliance than most, however the other nations allow this due to the
          fact the Porturuxean Democracy tends to recognize the fact that their
          strength is derived from their close relationships with their allies.
          Their only faults are derived from their tendency to distrust the
          religious and mystical, and their bitter, although somewhat justified,
          racism towards the Holkovrhys.
        </p>
        <p>
          <strong>Hierarchy</strong>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PorturuxeanLore);
