import React from "react";
import { Route, HashRouter } from "react-router-dom";
import testPage from "./components/testPage/testPage.js";

export default (
  <HashRouter>
    <div>
      <Route component={testPage} exact path="/" />
    </div>
  </HashRouter>
);
