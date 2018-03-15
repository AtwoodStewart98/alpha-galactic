import React, { Component } from "react";
import { connect } from "react-redux";

import Auth from "./Auth.js";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
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
