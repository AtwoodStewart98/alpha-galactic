import React, { Component } from "react";
import { connect } from "react-redux";

class ColossusLore extends Component {
  render() {
    return (
      <div className="loreganizer">
        <h2>The Colossus Corporation</h2>
        <p>
          <strong>Evil Faction</strong>
        </p>
        <p>
          <strong>Lvls 6-10</strong>
        </p>
        <p>
          <strong>Description</strong>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ColossusLore);
