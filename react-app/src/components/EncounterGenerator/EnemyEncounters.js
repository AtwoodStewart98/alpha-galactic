import React, { Component } from "react";
import { connect } from "react-redux";

import EnemyLore from "./EnemyLore.js";
import EncounterGenerator from "./EncounterGenerator.js";

import { encounterView } from "../../ducks/reducer.js";

import "../../react-scss/react-css/EnemyEncounters.css";

class EnemyEncounters extends Component {
  render() {
    const { encounterView, encounter } = this.props;

    return (
      <div>
        <nav>
          <ul className="nav-fixer">
            <a onClick={() => encounterView("generator")}>
              <li>Encounter Generator</li>
            </a>
            <a onClick={() => encounterView("lore")}>
              <li>Enemy Lore</li>
            </a>
          </ul>
        </nav>
        {encounter !== "lore" ? <EncounterGenerator /> : null}
        {encounter === "lore" ? <EnemyLore /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { encounter } = state;

  return {
    encounter
  };
};

export default connect(mapStateToProps, { encounterView })(EnemyEncounters);
