import React, { Component } from "react";
import { connect } from "react-redux";

import { updateWeapon } from "../../ducks/reducer.js";

class WeaponGenerator extends Component {
  render() {
    console.log(this.props);
    const { updateWeapon } = this.props;

    return (
      <div>
        <h1>Random Weapon Generator</h1>
        <button onClick={() => updateWeapon()}>Generate a Weapon</button>
        <div>
          <div>{this.props.spawnWeapon.name}</div>
          {/* <div>{this.props.spawnWeapon.damage}</div>
          <div>{this.props.spawnWeapon.range}</div>
          <div>{this.props.spawnWeapon.firerate}</div>
          <div>{this.props.spawnWeapon.reload}</div>
          <div>{this.props.spawnWeapon.magazine}</div>
          <div>{this.props.spawnWeapon.other}</div> */}
        </div>
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
