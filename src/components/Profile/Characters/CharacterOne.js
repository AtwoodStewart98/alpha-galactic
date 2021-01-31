import React, { Component } from "react";
import { connect } from "react-redux";

import Xiphave from "../../../assets/xiphaverace.png";
import Arktonian from "../../../assets/arktonianrace.png";
import Thrax from "../../../assets/thraxrace.png";
import Holkovrhys from "../../../assets/holkovrhysrace.png";
import Porturuxean from "../../../assets/porturuxeanrace.png";
import Draconis from "../../../assets/draconisrace.png";
import Gob from "../../../assets/gobrace.png";
import Tomlin from "../../../assets/tomlinrace.png";
import Arthrotera from "../../../assets/arthroterarace.png";

import { getChar } from "../../../ducks/reducer.js"

class CharacterOne extends Component {
  componentDidUpdate() {
    console.log(this.props.charObj)
  }

  render() {
      const {
        getChar,
        charObj
      } = this.props

      let AoE = null;
      if (charObj.AoE === 1) {
        AoE = "+AoE";
      } else if (charObj.AoE === 2) {
        AoE = "high +AoE";
      } else if (charObj.AoE >= 3) {
        AoE = "extreme +AoE";
      } else {
        AoE = null;
      }
      let capacitor = null;
      if (charObj.capacitor === 1) {
        capacitor = "+capacitor effect";
      } else if (charObj.capacitor === 2) {
        capacitor = "high +capacitor effect";
      } else if (charObj.capacitor >= 3) {
        capacitor = "extreme +capacitor effect";
      } else {
        capacitor = null;
      }
      let critical = null;
      if (charObj.critical === 1) {
        critical = "+critical";
      } else if (charObj.critical === 2) {
        critical = "high +critical";
      } else if (charObj.critical >= 3) {
        critical = "extreme +critical";
      } else {
        critical = null;
      }
      let kB = null;
      if (charObj.kB === 1) {
        kB = "+KB";
      } else if (charObj.kB === 2) {
        kB = "high +KB";
      } else if (charObj.kB >= 3) {
        kB = "extreme +KB";
      } else {
        kB = null;
      }
      let melee = null;
      if (charObj.melee === 1) {
        melee = "+melee";
      } else if (charObj.melee === 2) {
        melee = "high +melee";
      } else if (charObj.melee >= 3) {
        melee = "extreme +melee";
      } else {
        melee = null;
      }
      let resist = null;
      if (charObj.resist === 1) {
        resist = "-resist";
      } else if (charObj.resist === 2) {
        resist = "high -resist";
      } else if (charObj.resist >= 3) {
        resist = "extreme -resist";
      } else {
        resist = null;
      }
      let stealth = null;
      if (charObj.stealth === 1) {
        stealth = "+stealth";
      } else if (charObj.stealth === 2) {
        stealth = "high +stealth";
      } else if (charObj.stealth >= 3) {
        stealth = "extreme +stealth";
      } else {
        stealth = null;
      }
      let velocity = null;
      if (charObj.velocity === 1) {
        velocity = "+velocity";
      } else if (charObj.velocity === 2) {
        velocity = "high +velocity";
      } else if (charObj.velocity >= 3) {
        velocity = "extreme +velocity";
      } else if (charObj.velocity === -1) {
        velocity = "-velocity";
      } else if (charObj.velocity === -2) {
        velocity = "high -velocity";
      } else {
        velocity = null;
      }

    return (
      <div>
        <h2>Character One</h2>
        <button onClick={() => getChar(this.props.user.id)}>
          FETCH USER
        </button>
        <div className="results-flex">
          <div>
            {charObj.race === "Porturuxean" ? (
              <img src={Porturuxean} alt="race" />
            ) : charObj.race === "Arthrotera" ? (
              <img src={Arthrotera} alt="race" />
            ) : charObj.race === "Draconis" ? (
              <img src={Draconis} alt="race" />
            ) : charObj.race === "Gob" ? (
              <img src={Gob} alt="race" />
            ) : charObj.race === "Thrax" ? (
              <img src={Thrax} alt="race" />
            ) : charObj.race === "Tomlin" ? (
              <img src={Tomlin} alt="race" />
            ) : charObj.race === "Xiphave" ? (
              <img src={Xiphave} alt="race" />
            ) : charObj.race === "Holkovrhys" ? (
              <img src={Holkovrhys} alt="race" />
            ) : charObj.race === "Arktonian" ? (
              <img src={Arktonian} alt="race" />
            ) : null}
            <p>
              <strong>Race:</strong> {charObj.race}
            </p>
          </div>
          <div className="results-info">
            <p>
              <strong>Name:</strong>
            </p>
            <h2>{charObj.charName}</h2>
            <p>
              <strong>Alignment:</strong>
              <br />
              {charObj.trueAlignment}
            </p>
            <p>
              <strong>Experience:</strong>
              <br />
              {charObj.training}
            </p>
            <p>
              <strong>Faction:</strong>
              <br />
              {charObj.faction}
            </p>
            <p>
              <strong>Description:</strong>
              <br />
              {charObj.description}
            </p>
          </div>
        </div>
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
            <i>{charObj.manufacturer ? charObj.manufacturer + " " : null}</i>
            {charObj.name}
          </div>
          <div>{charObj.lvl}</div>
          <div>{charObj.damage}</div>
          <div>{charObj.rng}</div>
          <div>{charObj.firerate}</div>
          <div>{charObj.reload}</div>
          <div>{charObj.magazine}</div>
          <div id="weaponOtherBox">
            {charObj.other ? charObj.other + ", " : null}
            {charObj.AoE ? AoE + ", " : null}
            {charObj.capacitor ? capacitor + ", " : null}
            {charObj.critical ? critical + ", " : null}
            {charObj.kB ? kB + ", " : null}
            {charObj.melee ? melee + ", " : null}
            {charObj.resist ? resist + ", " : null}
            {charObj.stealth ? stealth + ", " : null}
            {charObj.velocity ? velocity + ", " : null}
            {charObj.consumption
              ? "consumes " + charObj.consumption + " ammo, "
              : null}
            {charObj.projectiles
              ? "fires " + charObj.projectiles + " projectiles, "
              : null}
            {charObj.type}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { charObj, user } = state
  return { charObj, user }
};

export default connect(mapStateToProps, { getChar })(CharacterOne);
