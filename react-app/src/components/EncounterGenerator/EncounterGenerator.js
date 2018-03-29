import React, { Component } from "react";
import { connect } from "react-redux";

import "../../react-scss/react-css/EnemyEncounters.css";

class EncounterGenerator extends Component {
  render() {
    return (
      <div>
        <div className="encounterGeneratorFlexTop">
          <div className="enemyName">
            <h3>Name:</h3>
          </div>
          <div className="enemyFaction">
            <h3>Faction:</h3>
          </div>
          <div>
            <h3>Level(s):</h3>
          </div>
          <div className="enemyArmaments">
            <h3>Armaments:</h3>
          </div>
          <div>
            <h3>Rank:</h3>
          </div>
        </div>
        <div className="encounterGeneratorFlexBottom">
          <div className="enemyName" />
          <div className="enemyFaction" />
          <div />
          <div className="enemyArmaments" />
          <div />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(EncounterGenerator);
