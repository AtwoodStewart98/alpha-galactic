import React, { Component } from "react";
import { connect } from "react-redux";

class DraconisLore extends Component {
  render() {
    return (
      <div className="loreganizer">
        <h2>The Draconis Timocracy</h2>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          The Draconis are newcomers to the Galactic Alliance, and although
          their cultural values and overall ethos is sometimes difficult to
          grasp, their society has thrived quite well. Political power is
          determined by a strict code of honor, and only those who exemplify it
          in their line of work are eligible to take office. Deceit and
          dishonesty are the worst offenses to a Draconis; such traits are
          punished severely. One law of their ethos that has gradually been
          adopted by other nations is the concept that a fighter never enters
          combat without a melee weapon; in an era dominated by advanced
          firearms, it is a necessity to challenge your foe face-to-face, and to
          remind oneself of the reality of taking life.
        </p>
        <p>
          <strong>Hierarchy</strong>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(DraconisLore);
