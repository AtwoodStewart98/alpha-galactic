import React, { Component } from "react";
import { connect } from "react-redux";

import { updateLore } from "../../../ducks/reducer.js";

class VigilantesLore extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { updateLore } = this.props;

    return (
      <div className="loreganizer">
        <h2>Vigilantes</h2>
        <p>
          <strong>Evil Faction</strong>
        </p>
        <p>
          <strong>Lvls 1-6</strong>
        </p>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          Despite what the connotations surrounding their name would imply, the
          Vigilantes are anything but selfless do-gooders. A well-equipped
          piracy gang, they consist of highly autonomous and organized
          paramilitary cells that strike transport carriers and make off with
          whatever valuables they can get their hands on. They have a history of
          targeting official Alliance cruisers, and despite lacking the numbers
          their competitors command, their superior equipment and tactics can
          usually get the job done more efficiently. Senior members tend to be
          of Porturuxean race, although their ranks will include anyone with
          sufficient mercenary chops.
        </p>
        <p>
          <strong>Hierarchy</strong>
        </p>
        <p>
          The Vigilantes&#39; numbers are commanded by Archon Virgil, an
          embittered Porturuxean ex-general who has retained all his experience
          in strategic thinking and especially guerrilla tactics. Officially,
          his first mate is the self-styled Baroness Steele of the Lock&#39;s
          Belt asteroid field, but Steele rarely fulfills her duties, preferring
          to occupy her time cultivating her image as a roguish warlord. While
          all cells report to Virgil at mission completion, they are
          individually led by one or more dragoons, who are usually former
          soldiers with training in special ops, and oftentimes a skirmish droid
          to provide intel.
        </p>
        <p>
          <strong>Notable Members</strong>
        </p>
        <p>
          Baroness Steele - With an overpowering personality and an ego to match
          that of individuals far more dangerous than her, Steele has appointed
          herself the immaterial title of Baroness over the Lock&#39;s Belt
          asteroid field territory. She may be first mate of the Vigilantes in
          rank, but her focus seems exclusively to make herself renowned to the
          Galactic Alliance as a swashbuckler modeling after the pirates of old.
          Although some might fail to take her seriously, her battle prowess and
          access to tech does indeed make her dangerous, and she does have the
          ability to be incredibly persuasive when she wants to be.
        </p>
        <p>
          Archon Virgil - Brooding, bitter, and with a distinctive bone to pick
          with the Galactic Alliance, Archon Virgil is a former decorated
          Porturuxean general who abandoned his post after his military service
          forced him to abandon his homeworld to enemy forces in order to gain a
          strategic advantage. Along with his circle of trusted lieutenants, he
          made off with all the Porturuxean military tech he could get his hands
          on, including wearable teleportation technology and prototype drop-off
          ships, now refined into his Space Skirmishers. He blames the Alliance
          for forcing him to sacrifice his homeworld, and as such harbors a
          special hatred for powerful individuals in the Alliance alongside the
          Holkovrhys Empire. Now he uses his stolen tech and tactical experience
          to power the Vigilantes, and exact his vengeance on the Galactic
          Alliance inch by bloody inch.
        </p>
        <p>
          <strong>Notable Locations</strong>
        </p>
        <p>
          Lock&#39;s Belt - Home to Baroness Steele and her forces, Lock&#39;s
          Belt is an asteroid field of destroyed planets and moons surrounding
          the neutron star formerly designated Loquatch. Some of the bigger
          meteorites are home to Vigilante outposts or bases, and a few have
          even been hollowed out to serve as treasury hoards. The broken husk of
          one of the planets, Saz-31, is where Steele has erected her personal
          stronghold, a sort of ostentatious palace built over a warehouse-sized
          vault. Although the system is surrounded by Hyjakker territory, Steele
          has been able to hold off curious thieves and secure her foothold with
          an iron boot.
        </p>
        <p>
          Braultlin-15 - Although they may be the least powerful among the three
          factions contesting control for the planet, and ultimately for the
          sunken city of Aurabage, the Vigilantes are still trying their luck to
          excavate whatever they find useful. This planet was once a Draconisian
          military fortress until the P.U.N.K.s executed a tactical strike on
          the planet&#39;s terraforming generator, causing an instantaneous
          global warming catastrophe that melted the glacial ice caps in a
          matter of hours and flooded the planet. Although the older cities were
          able to activate their colonial shields to maintain internal
          atmospheres and temperatures, most still ended up getting submerged,
          leaving untold amounts of weapons and military tech behind.
        </p>
        <p>
          <strong>Notable Relations</strong>
        </p>
        <p>
          {/* eslint-disable-next-line */}
          <a onClick={() => updateLore("GDOS")}>GDOS</a> - The Vigilantes tend
          to get a lot of attention from the GDOS, and not just because
          they&#39;re one of the more successful criminal organizations in the
          sector. One of Archon Virgil&#39;s standing orders are to kill any
          beings with an official role in the Galactic Alliance. As such, the
          Vigilantes are more likely to linger during an excursion to slaughter
          officers, or go out of their way to target GDOS cruisers or outposts.
          This particular maliciousness has led to a redoubled effort from the
          Department of Security in tracking down the vile general.
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
)(VigilantesLore);
