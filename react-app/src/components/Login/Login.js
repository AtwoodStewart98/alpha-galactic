import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login N Stuff: requires Node</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(Login);
