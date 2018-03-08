import React, { Component } from "react";
import { connect } from "react-redux";

import "../../react-scss/react-css/WeaponGenerator.css";

import { updateWeapon } from "../../ducks/reducer.js";

class WeaponGenerator extends Component {
  render() {
    const { updateWeapon } = this.props;
    const testWeapon = {
      name: "Burgnof MA-0",
      damage: "<3",
      range: 150,
      firerate: 4,
      reload: 1,
      magazine: 12,
      other: "+stealth, AP"
    };

    return (
      <div>
        <h1>Random Weapon Generator</h1>
        <div className="weaponGeneratorFlex">
          <div id="weaponName">
            <h3>Name:</h3>
          </div>
          <div>
            <h3>Damage:</h3>
          </div>
          <div>
            <h3>Range:</h3>
          </div>
          <div>
            <h3>Fire Rate:</h3>
          </div>
          <div>
            <h3>Reload:</h3>
          </div>
          <div>
            <h3>Magazine:</h3>
          </div>
          <div id="weaponOther">
            <h3>Other:</h3>
          </div>
        </div>
        <div className="weaponGeneratorFlex">
          <div id="weaponName">{this.props.spawnWeapon.name}</div>
          <div>{this.props.spawnWeapon.damage}</div>
          <div>{this.props.spawnWeapon.range}</div>
          <div>{this.props.spawnWeapon.firerate}</div>
          <div>{this.props.spawnWeapon.reload}</div>
          <div>{this.props.spawnWeapon.magazine}</div>
          <div id="weaponOther">{this.props.spawnWeapon.other}</div>
        </div>
        <button onClick={() => updateWeapon(testWeapon)}>
          Generate a Weapon
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { spawnWeapon } = state;

  return {
    spawnWeapon
  };
}

export default connect(mapStateToProps, { updateWeapon })(WeaponGenerator);
