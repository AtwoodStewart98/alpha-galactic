import React, { Component } from "react";
import { connect } from "react-redux";

import ColossusLore from "./EnemyLoreFiles/ColossusLore.js";
import HolkovrhysLore from "./EnemyLoreFiles/HolkovrhysLore.js";
import HyjakkerLore from "./EnemyLoreFiles/HyjakkerLore.js";
import OperationMLore from "./EnemyLoreFiles/OperationMLore.js";
import PUNKLore from "./EnemyLoreFiles/PUNKLore.js";
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
        {lore !== "..." ? null : (
          <div>
            <img className="lore-splash" src={loreizon} alt="lore horizon" />
          </div>
        )}
        <select
          className="lore-dropdown"
          onChange={e => updateLore(e.target.value)}
        >
          <option type="text" value="...">
            - Choose Faction -
          </option>
          <option type="text" value="Colossus, Inc">
            Colossus, Inc
          </option>
          <option type="text" value="Hyjakker">
            Hyjakker
          </option>
          <option type="text" value="Holkovrhys">
            Holkovrhys
          </option>
          <option type="text" value="Operation M">
            Operation M
          </option>
          <option type="text" value="P.U.N.K.">
            P.U.N.K.
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
        {lore === "..." ? (
          <div className="loreganizer">
            <p>
              Welcome to the enemy lore page! Here you&#39;ll be able to learn
              about the various factions, good, evil and in the gray, that exist
              in the expansive universe of Sector Alpha. Each faction is broken
              down into several sections, each designed to give the game master
              a better idea of how to incorporate them into their playthrough
              and weave their story with these in mind.
            </p>
            <p>
              The first general section denotes the full name of the faction
              along with their morality alignment, level range when they are
              likely to be encountered, and a general description of who they
              are and what they do or stand for. The Hierarchy section describes
              how the faction is organized, whether through military ranking or
              government setup. Notable Members goes into more detail about the
              leaders of the factions, or lower-ranking but crafty enemies for
              the players to face. Oftentimes these can be the final boss in a
              story arc, or a recurring nemesis for the party. Notable Locations
              gives ideas for planets, space stations and the like where the
              faction has either based themselves or are likely to be found
              regularly. Lastly, Notable Relations links the factions together,
              exploring the specific ties or clashes in ideology they have with
              one another.
            </p>
          </div>
        ) : null}
        {lore === "Colossus, Inc" ? <ColossusLore /> : null}
        {lore === "Holkovrhys" ? <HolkovrhysLore /> : null}
        {lore === "Hyjakker" ? <HyjakkerLore /> : null}
        {lore === "Operation M" ? <OperationMLore /> : null}
        {lore === "P.U.N.K." ? <PUNKLore /> : null}
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
