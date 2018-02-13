import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { updateHello } from "../../ducks/reducer.js";

class HomePage extends Component {
  render() {
    const { updateHello } = this.props;

    return (
      <div>
        <select onChange={e => updateHello(e.target.value)}>
          <option type="text" value="Hello">
            Hello!
          </option>
          <option type="text" value="Wazzup">
            Wazzup?
          </option>
        </select>{" "}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { hello } = state;

  return {
    hello
  };
}

export default connect(mapStateToProps, { updateHello })(HomePage);
