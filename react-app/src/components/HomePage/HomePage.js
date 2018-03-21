import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUser } from "../../ducks/reducer.js";

import "../../react-scss/react-css/HomePage.css";

class HomePage extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(this.props);
    return (
      <div className="home-box">
        {this.props.user.username ? (
          <div>
            <h1>Welcome, {this.props.user.username}!</h1>
          </div>
        ) : null}
        <div className="home-flex">
          <div>
            <p className="home-login">Login Thing Here</p>
          </div>
          <div className="descriptor">
            <h2>
              <strong>EXPLORE THE WORLDS</strong>
            </h2>
            <p>
              Welcome to the Alpha Galactic campaign manager. Build a character,
              create random encounters, access extensive lore in the universe,
              and randomly generate weapon drops.
            </p>
          </div>
        </div>
        <div className="linx-flex">
          <div>
            <Link to="/characterMaker">Create your own Character</Link>
          </div>
          <div>
            <Link to="/encounterGenerator">Spawn Random Encounters</Link>
          </div>
        </div>
        <div className="linx-flex">
          <div>
            <Link to="/weaponGenerator">Arm your Character</Link>
          </div>
          <div>
            <Link to="/auth">Login / Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, { getUser })(HomePage));
