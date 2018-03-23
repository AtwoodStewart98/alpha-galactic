import React, { Component } from "react";
import { connect } from "react-redux";

import { updateLore } from "../../ducks/reducer.js";
import HolkovrhysLore from "./EnemyLoreFiles/HolkovrhysLore.js";
import HyjakkerLore from "./EnemyLoreFiles/HyjakkerLore.js";
import MercenariesLore from "./EnemyLoreFiles/MercenariesLore.js";
import GDOSLore from "./EnemyLoreFiles/GDOSLore.js";
import PorturuxeanLore from "./EnemyLoreFiles/PorturuxeanLore.js";

class EnemyLore extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  componentDidMount() {
    this.props.updateLore("...");
  }

  render() {
    const { updateLore, lore } = this.props;
    return (
      <div>
        <select onChange={e => updateLore(e.target.value)}>
          <option type="text" value="...">
            ---
          </option>
          <option type="text" value="Hyjakker">
            Hyjakker
          </option>
          <option type="text" value="Holkovrhys">
            Holkovrhys
          </option>
          <option type="text" value="Mercenaries">
            Mercenaries
          </option>
          <option type="text" value="GDOS">
            G.D.O.S.
          </option>
          <option type="text" value="Porturuxeans">
            Porturuxeans
          </option>
        </select>
        {lore === "Hyjakker" ? <HyjakkerLore /> : null}
        {lore === "Holkovrhys" ? <HolkovrhysLore /> : null}
        {lore === "Mercenaries" ? <MercenariesLore /> : null}
        {lore === "GDOS" ? <GDOSLore /> : null}
        {lore === "Porturuxeans" ? <PorturuxeanLore /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { lore } = state;
  return { lore };
};

export default connect(mapStateToProps, { updateLore })(EnemyLore);
