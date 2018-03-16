import React, { Component } from "react";
import { connect } from "react-redux";

class HolkovrhysLore extends Component {
  render() {
    return (
      <div>
        <h2>The Holkovrhys Empire</h2>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          Where there is light, there is darkness, and where there is the
          Galactic Alliance, there is the Holkovrhys Empire. Recognized equally
          for their artistically creative culture as well as their cruel acts of
          destruction, this race as a collective seeks nothing more than pure
          power and dominion over the largest piece of the galaxy they can get
          their hands on in order to conform it to their own vision. This
          conquering mindset has mostly been propagated by Emperor Docstiertun
          to those who have been born and raised in his empire&#39;s society,
          and Holkovrhys who live outside the Empire oftentimes reject his
          message, but some are still drawn in by the promise of being a part of
          a greatness that will last until the end of days.
        </p>
        <p>
          <strong>Hierarchy</strong>
        </p>
        <p>
          The Emperor Azyex Docstiertun has complete and total control over his
          immediate subordinates, including both regional rulers and military
          leaders, which allows him to freely make executive decisions without
          any hindrance from bureaucracy. As general of the Holkovrhys, he
          personally directs a circle of nine Empire Colonels, each appointed
          with their own individual tasks and agendas, but all with a single,
          unifying purpose: the never-ending conquest of the Holkovrhys Empire.
          This method of leadership proves itself effective in minimizing
          infighting Each colonel commands a group of three
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(HolkovrhysLore);
