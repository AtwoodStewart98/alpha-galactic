import React, { Component } from "react";
import { connect } from "react-redux";

import HolkovrhysLore from "./EnemyLoreFiles/HolkovrhysLore.js";
import HyjakkerLore from "./EnemyLoreFiles/HyjakkerLore.js";
import VigilantesLore from "./EnemyLoreFiles/VigilantesLore.js";
import MercenariesLore from "./EnemyLoreFiles/MercenariesLore.js";
import ThraxLore from "./EnemyLoreFiles/ThraxLore.js";
import DraconisLore from "./EnemyLoreFiles/DraconisLore.js";
import GDOSLore from "./EnemyLoreFiles/GDOSLore.js";
import PorturuxeanLore from "./EnemyLoreFiles/PorturuxeanLore.js";

import { updateLore } from "../../ducks/reducer.js";
import loreizon from "../../assets/loreizon.png";

import "../../react-scss/react-css/EnemyLore.css";

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
      <div className="lore-container">
        <div>
          <img className="lore-splash" src={loreizon} alt="lore horizon" />
        </div>
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
          <option type="text" value="Vigilantes">
            Vigilantes
          </option>
          <option type="text" value="Mercenaries">
            Mercenaries
          </option>
          <option type="text" value="Thrax">
            Thrax
          </option>
          <option type="text" value="Draconis">
            Draconis
          </option>
          <option type="text" value="GDOS">
            G.D.O.S.
          </option>
          <option type="text" value="Porturuxeans">
            Porturuxeans
          </option>
        </select>
        {lore === "Holkovrhys" ? <HolkovrhysLore /> : null}
        {lore === "Hyjakker" ? <HyjakkerLore /> : null}
        {lore === "Vigilantes" ? <VigilantesLore /> : null}
        {lore === "Mercenaries" ? <MercenariesLore /> : null}
        {lore === "Thrax" ? <ThraxLore /> : null}
        {lore === "Draconis" ? <DraconisLore /> : null}
        {lore === "GDOS" ? <GDOSLore /> : null}
        {lore === "Porturuxeans" ? <PorturuxeanLore /> : null}
        <div className="home-footer">
          <p>
            This website and its content, excepting images, is copyright of
            Stewart Atwood - ©Stewart Atwood 2018. All rights reserved.
          </p>
        </div>
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
)(EnemyLore);
