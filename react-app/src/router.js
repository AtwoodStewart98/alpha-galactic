import React from "react";
import { Route, HashRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";
import CharacterMaker from "./components/CharacterMaker/CharacterMaker.js";
import WeaponGenerator from "./components/WeaponGenerator/WeaponGenerator.js";
import EnemyEncounters from "./components/EncounterGenerator/EnemyEncounters.js";
import Login from "./components/Login/Login.js";

export default (
  <HashRouter>
    <div>
      <Route component={HomePage} exact path="/" />
      <Route component={CharacterMaker} path="/characterMaker" />
      <Route component={WeaponGenerator} path="/weaponGenerator" />
      <Route component={EnemyEncounters} path="/encounterGenerator" />
      <Route component={Login} path="/login" />
    </div>
  </HashRouter>
);
