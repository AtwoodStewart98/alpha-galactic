import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUser, updateQuestionNumber } from "../../ducks/reducer.js";
import cityscape from "../../assets/cityscape.png";
import arthrotera from "../../assets/arthrotera.png";
import enemyfaction from "../../assets/enemy-faction.png";
import spacestation from "../../assets/spacestation.png";

import "../../react-scss/react-css/HomePage.css";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import {
  faCloud,
  faTimesCircle,
  faIdBadge,
  faBook
} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(brands, faCloud, faTimesCircle, faIdBadge, faBook);

class HomePage extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    const { updateQuestionNumber } = this.props;

    return (
      <div className="home-container">
        <div className="home-flex">
          <div>
            <div className="home-login">
              {this.props.user.username ? (
                <div>
                  <h1>Welcome, {this.props.user.username}!</h1>
                </div>
              ) : (
                <div>
                  <h2>REGISTER | LOGIN</h2>
                  <p>
                    This application uses Auth0 tokens to login and manage user
                    information.
                  </p>
                  <a href="http://localhost:4200/auth">
                    <button>LOGIN TO ACCOUNT</button>
                  </a>
                  <p>Login With:</p>
                  <div>
                    <img
                      width="50px"
                      src="https://travelinlibrarian.info/wp-content/uploads/2014/07/Google+-Logo.png"
                      alt="google plus"
                    />
                    <img
                      width="50px"
                      src="http://www.dfmalherbe.co.za/wp-content/uploads/2016/01/facebook-logo-png-transparent-background.png"
                      alt="facebook"
                    />
                    <img
                      width="50px"
                      src="http://pngimg.com/uploads/twitter/twitter_PNG30.png"
                      alt="twitter"
                    />
                  </div>
                </div>
              )}
            </div>
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
              <Link
                onClick={() => updateQuestionNumber(0)}
                to="/characterMaker"
              >
                <img src={arthrotera} alt="alien" />
                <p>CREATE CHARACTER</p>
              </Link>
            </div>
            <div className="sci-fi-armory">
              <Link to="/weaponGenerator">
                <img src={spacestation} alt="sci fi armory" />
                <p>DELVE INTO LORE</p>
              </Link>
            </div>
            <div className="mercenaries">
              <Link to="/enemyLore">
                <img src={enemyfaction} alt="mercenaries" />
                <p>KNOW YOUR ENEMIES</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="selling-points">
          <div className="sell-point-div">
            <div className="fontawesome-center">
              <FontAwesomeIcon icon="times-circle" size="5x" />
            </div>
            <h2>NO DICE REQUIRED</h2>
            <p>
              Alpha Galactic was designed to be an &#39;on-the-go&#39;
              role-playing game, which is to say equipment should be minimal or
              nonexistent to participate. Instead of dice, outcomes are decided
              by win, lose, or tie; yes, rock-paper-scissors is the determining
              factor in this game.
            </p>
          </div>
          <div className="sell-point-div">
            <div className="fontawesome-center">
              <FontAwesomeIcon icon="cloud" size="5x" />
            </div>
            <h2>PLAY REMOTELY</h2>
            <p>
              As a player, all your characters and their inventories are
              available through this application. As a game master, all your
              campaigns, background lore, and randomized weapon & enemy
              generation are available through this application. No more need to
              carry around multiple heavy manuals and papers for gameplay.
            </p>
          </div>
          <div className="sell-point-div">
            <div className="fontawesome-center">
              <FontAwesomeIcon icon="id-badge" size="5x" />
            </div>
            <h2>SAVE 5 CHARACTERS</h2>
            <p>
              Signing up for an account allows a player to save up to five
              different characters with separate inventories to their profile.
              Swap between characters freely and unrestricted by accessing your
              profile and selecting by name.
            </p>
          </div>
          <div className="sell-point-div">
            <div className="fontawesome-center">
              <FontAwesomeIcon icon="book" size="5x" />
            </div>
            <h2>DEVELOP LORE</h2>
            <p>
              As a game master, you will have the opportunity to create your own
              missions and story arcs inspired by the provided lore and
              factions. There will also be the feature to share one of your
              contributions to the lore to a database where other game masters
              can incorporate your ideas in their own playgroups!
            </p>
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

export default withRouter(
  connect(
    mapStateToProps,
    { getUser, updateQuestionNumber }
  )(HomePage)
);
