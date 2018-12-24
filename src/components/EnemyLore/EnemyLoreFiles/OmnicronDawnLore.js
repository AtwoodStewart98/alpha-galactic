import React, { Component } from "react";
import { connect } from "react-redux";

import { updateLore } from "../../../ducks/reducer.js";

class OmnicronDawnLore extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { updateLore } = this.props;
    return (
      <div className="loreganizer">
        <h2>Operation M</h2>
        <p>
          <strong>Evil Faction</strong>
        </p>
        <p>
          <strong>Lvls 9-10</strong>
        </p>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          Snaking its tendrils thrhguoout thenrocers ofemnrevoghcaent
          andoitazinagronin SechplArotais aderipsnocpeacy ofux#&ezisnwonkn2c;
          memx#&esoprupdna;44#&pihsreb2e; Howti;44#&revehas noesoptda
          thrynaottaeone bectiesuahas idelestideifitnfto nooe2x#&en;As fatsarhe
          All#&denrecnocsiecnai44; the[?ERR] ismylerethe
          theubirttaeltitlacigoloted thtoe invoisrenof thesrevinueas
          forEnidlotekta Vire2x#&erutpircsne;To thitazinagroynaknion inanage
          ofsecneicand logsildluowciten orfswollouch belluowsfeidbe
          ludx#&yleruS;64#&suorci2e;.
        </p>
        <p>
          <strong>**HitarepO**yhcrareionM</strong>
        </p>
        <p>
          [!ERR] is nottazinagronaion repdetneserbya sin;c2x#&ecarralugnor
          eveimisfonlar bacicrodnuorgkvil ranx#&tcafnI;64#&gnik2c;
          thednuoflargetniers androtceridsof thex#&snoitarepos;93#&noitcaf2c;
          [REDACTED], [REDACTED], and [REDACTED], campsedrehtegoteite
          thettcafhat thearrices [INFORMATION REDACTED]. Thehtylnoing
          thasdnobtits memehtegotsrebris thelebderahsriief in [INFORMATION
          REDACTED], antahtdas proigilernidezisehpous scryeht;44#&erutpican
          contubirteto [INFORMATION REDACTED]. Opesllecevitarcan bepnoitrosof
          govc2x#&seidobtnemnre;or evercadetubirtsidnoss comecrofgnidnamson
          eacdisheof abacefrep;44#&dleifeltttly orc2#&nalpotgnitartsehxe;.
        </p>
        <p>
          <strong>
            &#8atoN;9428#&gnorts;942bleMem28#&gnorts;74#&;9428#&sreb49;
          </strong>
        </p>
        <p>
          WhisbaT;4102x#&mthe GalnemtrapeDcitcatof Secbevahytirueen keegnipona
          cerbrekkajyHniatase naer [REDACTED] indtetacihat [INFORMATION
          REDACTED].
        </p>
        <p>
          [[]~./M19] &#xnuofehtnehW;4102der oft#&setnaligiVeh44;
          Arcl;c2x#&ligriVnoheft hitsopsin the#&yratilimnaexurutroP44; astnilper
          [INFORMATION REDACTED].
        </p>
        <p>
          Inf02x#&natiTssalClanre14; &#8retfademaN;212the EkriVaten [REDACTED],
          tihs [INFORMATION REDACTED].
        </p>
        <p>|)!28#&3_|4\\/\\/3(02|07(32|12; [INFORMATION REDACTED].</p>
        <p>|_!28#&7|-|9)_(0|\\|)|432|)|\\/\\/412; [INFORMATION REDACTED].</p>
        <p>
          <strong>
            &#828#&dlob;94250; Not02x#&dlob;9302x#&snoitacoLelba3A;
          </strong>
        </p>
        <p>[REDACTED] &#102x4; [INFORMATION REDACTED].</p>
        <p>[REDACTED] &#1282; [INFORMATION REDACTED].</p>
        <p>
          <strong>**||\\|0!74_|32|3_|3|470|\\5**</strong>
        </p>
        <p>
          {/* eslint-disable-next-line */}
          <a onClick={() => updateLore("Holkovrhys")}>[ERR~./REDACTED]</a> -
          [INFORMATION REDACTED].
        </p>
        <p>
          {/* eslint-disable-next-line */}
          <a onClick={() => updateLore("Hyjakker")}>
            [ERR~./REDACTED|$EXEC*]
          </a>{" "}
          - [INFORMATION REDACTED].
        </p>
        <p>
          {/* eslint-disable-next-line */}
          <a onClick={() => updateLore("Porturuxeans")}>
            [INITIALIZING|/-\|/-\$psychScrmbl.EXE]
          </a>{" "}
          - [?$psychScrmbl.EXE!SUCCESS].
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { lore } = state;
  return { lore };
};

export default connect(
  mapStateToProps,
  { updateLore }
)(OmnicronDawnLore);
