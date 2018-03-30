import React, { Component } from "react";
import { connect } from "react-redux";

class VigilantesLore extends Component {
  render() {
    return (
      <div className="loreganizer">
        <h2>Vigilantes</h2>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          Despite what the connotations surrounding their name would imply, the
          Vigilantes are anything but selfless do-gooders. A well-equipped
          piracy gang, they consist of highly autonomous and organized
          paramilitary cells that strike transport carriers and make off with
          whatever valuables they can get their hands on. Their numbers are
          commanded by Archon Virgil, an embittered Porturuxean ex-decorated
          general who abandoned his post after his service forced him to abandon
          his homeworld to be destroyed.
        </p>
        <p>
          <strong>Hierarchy</strong>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(VigilantesLore);
