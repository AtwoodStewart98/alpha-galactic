import React, { Component } from "react";
import { connect } from "react-redux";

import "../../react-scss/react-css/WeaponGenerator.css";

import { updateWeapon, updateRewardWeapon, updateEpicWeapon, update1OAKWeapon } from "../../ducks/reducer.js";
import rainsoldier from "../../assets/rainsoldier.png";
import weapons from "../../weapons.json";

class WeaponGenerator extends Component {
  render() {
    const { updateWeapon, updateRewardWeapon, updateEpicWeapon, update1OAKWeapon, spawnWeapon } = this.props;

    let AoE = null;
    if (spawnWeapon.AoE === 1) {
      AoE = "+AoE";
    } else if (spawnWeapon.AoE === 2) {
      AoE = "high +AoE";
    } else if (spawnWeapon.AoE >= 3) {
      AoE = "extreme +AoE";
    } else {
      AoE = null;
    }
    let capacitor = null;
    if (spawnWeapon.capacitor === 1) {
      capacitor = "+capacitor effect";
    } else if (spawnWeapon.capacitor === 2) {
      capacitor = "high +capacitor effect";
    } else if (spawnWeapon.capacitor >= 3) {
      capacitor = "extreme +capacitor effect";
    } else {
      capacitor = null;
    }
    let critical = null;
    if (spawnWeapon.critical === 1) {
      critical = "+critical";
    } else if (spawnWeapon.critical === 2) {
      critical = "high +critical";
    } else if (spawnWeapon.critical >= 3) {
      critical = "extreme +critical";
    } else {
      critical = null;
    }
    let kB = null;
    if (spawnWeapon.kB === 1) {
      kB = "+KB";
    } else if (spawnWeapon.kB === 2) {
      kB = "high +KB";
    } else if (spawnWeapon.kB >= 3) {
      kB = "extreme +KB";
    } else {
      kB = null;
    }
    let melee = null;
    if (spawnWeapon.melee === 1) {
      melee = "+melee";
    } else if (spawnWeapon.melee === 2) {
      melee = "high +melee";
    } else if (spawnWeapon.melee >= 3) {
      melee = "extreme +melee";
    } else {
      melee = null;
    }
    let resist = null;
    if (spawnWeapon.resist === 1) {
      resist = "-resist";
    } else if (spawnWeapon.resist === 2) {
      resist = "high -resist";
    } else if (spawnWeapon.resist >= 3) {
      resist = "extreme -resist";
    } else {
      resist = null;
    }
    let stealth = null;
    if (spawnWeapon.stealth === 1) {
      stealth = "+stealth";
    } else if (spawnWeapon.stealth === 2) {
      stealth = "high +stealth";
    } else if (spawnWeapon.stealth >= 3) {
      stealth = "extreme +stealth";
    } else {
      stealth = null;
    }
    let velocity = null;
    if (spawnWeapon.velocity === 1) {
      velocity = "+velocity";
    } else if (spawnWeapon.velocity === 2) {
      velocity = "high +velocity";
    } else if (spawnWeapon.velocity >= 3) {
      velocity = "extreme +velocity";
    } else if (spawnWeapon.velocity === -1) {
      velocity = "-velocity";
    } else if (spawnWeapon.velocity === -2) {
      velocity = "high -velocity";
    } else {
      velocity = null;
    }

    return (
      <div className="weapon-container">
        <div>
          <img
            className="weapon-splash"
            src={rainsoldier}
            alt="armed soldier"
          />
        </div>
        <h1>Random Weapon Generator</h1>
        <div className="weaponGeneratorFlexTop">
          <div id="weaponName">
            <h3>Name</h3>
          </div>
          <div>
            <h3>Level</h3>
          </div>
          <div>
            <h3>Damage</h3>
          </div>
          <div>
            <h3>Range</h3>
          </div>
          <div>
            <h3>Fire Rate</h3>
          </div>
          <div>
            <h3>Reload</h3>
          </div>
          <div>
            <h3>Magazine</h3>
          </div>
          <div id="weaponOther">
            <h3>Other</h3>
          </div>
        </div>
        <div className="weaponGeneratorFlexBottom">
          <div id="weaponName">
            <i>{spawnWeapon.prefix ? spawnWeapon.prefix + " " : null}</i>
            {spawnWeapon.name}
          </div>
          <div>{spawnWeapon.lvl}</div>
          <div>{spawnWeapon.damage}</div>
          <div>{spawnWeapon.range}</div>
          <div>{spawnWeapon.firerate}</div>
          <div>{spawnWeapon.reload}</div>
          <div>{spawnWeapon.magazine}</div>
          <div id="weaponOtherBox">
            {spawnWeapon.other ? spawnWeapon.other + ", " : null}
            {spawnWeapon.AoE ? AoE + ", " : null}
            {spawnWeapon.capacitor ? capacitor + ", " : null}
            {spawnWeapon.critical ? critical + ", " : null}
            {spawnWeapon.kB ? kB + ", " : null}
            {spawnWeapon.melee ? melee + ", " : null}
            {spawnWeapon.resist ? resist + ", " : null}
            {spawnWeapon.stealth ? stealth + ", " : null}
            {spawnWeapon.velocity ? velocity + ", " : null}
            {spawnWeapon.consumption
              ? "consumes " + spawnWeapon.consumption + " ammo, "
              : null}
            {spawnWeapon.projectiles
              ? "fires " + spawnWeapon.projectiles + " projectiles, "
              : null}
            <i>
              {spawnWeapon.manufacturer
                ? spawnWeapon.manufacturer + ", "
                : null}
            </i>
            {spawnWeapon.type}
          </div>
        </div>
        <div className="next-button">
          <button
            onClick={() =>
              updateWeapon(weapons.weapon_classes, weapons.manufacturers)
            }
          >
            RANDOM
          </button>
          <button onClick={() => updateRewardWeapon(weapons.missionrewards)}>
            REWARD
          </button>
          <button onClick={() => updateEpicWeapon(weapons.epicweapons)}>
            EPIC
          </button>
          <button onClick={() => update1OAKWeapon(weapons.oneofakind)}>
            ONEOFAKIND
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { spawnWeapon } = state;
  return { spawnWeapon };
};

export default connect(
  mapStateToProps,
  { updateWeapon, updateRewardWeapon, updateEpicWeapon, update1OAKWeapon }
)(WeaponGenerator);
