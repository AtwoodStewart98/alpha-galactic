import React from "react";
import { Route, HashRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";
import CharacterMaker from "./components/CharacterMaker/CharacterMaker.js";
import CharacterProfile from "./components/Profile/CharacterProfile.js";
import WeaponGenerator from "./components/WeaponGenerator/WeaponGenerator.js";
import EnemyLore from "./components/EnemyLore/EnemyLore.js";
import EnemyEncounters from "./components/EncounterGenerator/EncounterGenerator.js";
import Login from "./components/Login/Login.js";

export default (
  <HashRouter>
    <div>
      <Route component={HomePage} exact path="/" />
      <Route component={CharacterMaker} path="/characterMaker" />
      <Route component={CharacterProfile} path="/characterProfile" />
      <Route component={WeaponGenerator} path="/weaponGenerator" />
      <Route component={EnemyLore} path="/enemyLore" />
      <Route component={EnemyEncounters} path="/encounterGenerator" />
      <Route component={Login} path="/login" />
    </div>
  </HashRouter>
);
