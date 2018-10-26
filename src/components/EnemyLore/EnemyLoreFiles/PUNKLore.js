import React, { Component } from "react";
import { connect } from "react-redux";

class PUNKLore extends Component {
  render() {
    return (
      <div className="loreganizer">
        <h2>Power Under No Kakistocracy</h2>
        <p>
          <strong>Evil Faction</strong>
        </p>
        <p>
          <strong>Lvls 4-10</strong>
        </p>
        <p>
          <strong>Description</strong>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PUNKLore);
