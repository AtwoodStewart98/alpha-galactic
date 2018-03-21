import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUser } from "../../ducks/reducer.js";
import cityscape from "../../assets/cityscape.png";
import arthrotera from "../../assets/arthrotera.jpg";
import mercenaries from "../../assets/mercenaries.png";
import scifiarmory from "../../assets/scifiarmory.jpg";

import "../../react-scss/react-css/HomePage.css";

class HomePage extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="home-flex">
          <div>
            <p className="home-login">
              {this.props.user.username ? (
                <div>
                  <h1>Welcome, {this.props.user.username}!</h1>
                  <img
                    src="https://media.tenor.com/images/026e2ff33b229671d579dd512dcac521/tenor.gif"
                    alt="login"
                  />
                </div>
              ) : (
                <Link to="/login">Login Thing Here</Link>
              )}
            </p>
          </div>
          <div className="descriptor">
            <h2>
              <strong>EXPLORE THE WORLDS</strong>
            </h2>
            <p>
              Alpha Galactic is a diceless, mobile campaign manager and
              character repository. Build a character, create random encounters,
              access extensive lore in the universe, and randomly generate
              weapon drops.
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
            <div className="arthrotera-alien">
              <Link to="/characterMaker">
                <img src={arthrotera} alt="alien" />
                <p>CREATE CHARACTER</p>
              </Link>
            </div>
            <div className="mercenaries">
              <Link to="/encounterGenerator">
                <img src={mercenaries} alt="mercenaries" />
                <p>KNOW YOUR ENEMIES</p>
              </Link>
            </div>
            <div className="sci-fi-armory">
              <Link to="/weaponGenerator">
                <img src={scifiarmory} alt="sci fi armory" />
                <p>ARM YOUR CHARACTER</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lore-blurb">
          <h2>A BRIEF HISTORY</h2>
          <p>
            There will come a time, in the far, far future, when humanity will
            go extinct on the galactic scale, and although their race will fade
            from memory, their legacy within the galaxy leaves a lasting mark.
            This is that era.
          </p>
          <p>
            A full quarter of the galaxy, now designated Sector Alpha or the
            First Sector, has been for the most part mapped out, explored, and
            colonized by multitude of races that make up the Galactic Alliance.
            The Alliance is a kind of league of nations designed to be
            representative of all the various governances and cultures of the
            sentient races that desire mutual prosperity of arts and
            technologies, scientific progress, and philosophies.
          </p>
          <p>
            Sector Alpha is not without strife, however; some deviant races
            choose not to subscribe to free trade routes or the idea that all
            sentient beings share similar rights. Space pirates, conquering
            empires at the border, and political saboteurs lurk in the vastness
            of space, and are only somewhat held off by the nations&#39;
            militaries and the Galactic Department of Security (G.D.O.S.).
          </p>
          <p>
            You are a wanderer in these vast worlds, possibly seeking for your
            own personal meaning for existing, or perhaps a mercenary seeking
            adventure and lets each day roll by as they come. Whoever you may
            be, whether a member of the Alliance or its sworn enemy, is up to
            you.
          </p>
        </div>
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

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, { getUser })(HomePage));
