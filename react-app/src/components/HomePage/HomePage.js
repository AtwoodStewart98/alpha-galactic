import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUser } from "../../ducks/reducer.js";
import cityscape from "../../assets/cityscape.png";
import spacestation from "../../assets/spacestation.png";
import illithidalien from "../../assets/illithidalien.png";
import mercenaries from "../../assets/mercenaries.png";

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
        <div className="section-two">
          <h2>FIND YOUR PLACE IN THE GALAXY</h2>
          <img className="cityscape" src={cityscape} alt="cityscape" />
          <div className="cityscape-flex">
            <div>
              <h2>BECOME A GAME MASTER</h2>
              <p>
                Sign up for a full account to become a game master and design
                your own campaigns!
              </p>
            </div>
            <div className="cityscape-descriptor">
              <p>
                As a player, you will be able to create and save up to five
                characters to your account, with traits chosen from a multitude
                of introductory questions in the character creator, including
                alignment, race, background experience, and so forth. Whether
                you are a lone mercenary picking up odd jobs for the exploratory
                experience, or a stalwart defender of the Galactic Alliance, or
                such is up to you!
              </p>
              <p>
                As a game master you will be able to create your own missions
                and story arcs in the campaign manager, with full access to lore
                and various enemy factions represented throughout the galaxy.
                Organize a group of friends to work together as a team to
                explore strange new worlds, meet aliens from all sorts of races
                and backgrounds, and clash with infamous villains who scheme
                throughout the galaxy!
              </p>
            </div>
          </div>
        </div>
        <div className="linx">
          <h2>GAME FEATURES</h2>
          <p>
            To learn more about how to play Alpha Galactic, follow each of the
            below links!
          </p>
          <div className="linx-flex">
            <div className="space-station">
              <Link to="/characterMaker">
                <img src={spacestation} alt="space station" />
                <p>Create your own Character</p>
              </Link>
            </div>
            <div className="illithid-alien">
              <Link to="/encounterGenerator">
                <img src={illithidalien} alt="alien" />
                <p>Spawn Random Encounters</p>
              </Link>
            </div>
            <div className="mercenaries">
              <Link to="/weaponGenerator">
                <img src={mercenaries} alt="mercenaries" />
                <p>Arm your Character</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, { getUser })(HomePage));
