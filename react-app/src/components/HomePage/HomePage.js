import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <div>
        <select>
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
  return {
    state
  };
}

export default connect(mapStateToProps)(HomePage);
