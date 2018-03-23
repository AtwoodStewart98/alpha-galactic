import React, { Component } from "react";
import { connect } from "react-redux";

import { updateLore } from "../../../ducks/reducer.js";

class GDOSLore extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { updateLore } = this.props;

    return (
      <div>
        <h2>Galactic Department of Security</h2>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          When the powerful Galactic Alliance was first formed, the nations it
          was comprised of controlled almost a quarter of the known galaxy.
          Since this territory was so large, it had some difficulty protecting
          its citizens from raiding parties and evil empires. In order to
          rectify the problem, the nations assembled to develop an organization
          which became the first Galactic Department of Security. Originally,
          its membership was dominated by defeated Gobs paying off their former
          nation&#39;s war crimes, but now officers are more diverse than the
          Galactic Alliance itself. Anyone who swears allegiance to the
          preservation of peace and the well-being of others is eligible to take
          up arms and join the GDOS.
        </p>
        <p>
          <strong>Hierarchy</strong>
        </p>
        <p>
          Since most of the force consists of volunteers who enlist and leave on
          a whim, this faction is mostly run according to various statutes and
          administrative laws set by the Alliance. Its two highest standing
          orders are to capture threatening individuals, resorting to violence
          only when necessary, and to protect all those who live in the
          territory of the Alliance. Its current commander-in-chief and face of
          the faction is Androw Stolinski, better known by his nickname White
          Shield. Androw is a resolute and dedicated Gob who leads from the
          field, commanding capture parties and defending cities with his
          personal fleet. However, most of the system&#39;s actual organization
          and guidance of information is left in the hands of a circle of
          commissioners who are chosen by either White Shield or the Alliance
          itself. Additionally, alongside normal volunteers are members of the
          specially trained and better-armed Tactics and Control division, who
          are utilized for more military-oriented or covert ops missions. The
          TAC is managed by Commissioner Vox, an analytically-minded and shadowy
          individual whose past has recently brought concern to the Alliance.
        </p>
        <p>
          <strong>Notable Members</strong>
        </p>
        <p>
          Commissioner Vox - Head of the TAC and appointed to his position by
          White Shield himself, this innovative Hernodian is rarely seen sitting
          in his office; in fact, he is also rarely seen out on the front lines.
          Relatively unknown when he was appointed by Androw Stolinski to fill a
          vacant position in the circle of commissioners, he has possibly
          slipped even more into the shadows due to his near-complete lack of
          appearances in the organization&#39;s activities. Additionally, recent
          findings from the Alliance have challenged his loyalty to GDOS, as
          they connect him to a hidden operation bent on overthrowing the
          government and replacing it with a semi-anarchic system.
        </p>
        <p>
          Chief Warden Leviathan - This Gob, although diminutive in stature and
          worn down by one of the most difficult jobs in the galaxy, has beaten
          the odds with her incredibly intimidating demeanor and is not to be
          provoked in the slightest. One of the most serious and coldest
          individuals in the GDOS, this eyepatch-wearing warden governs the
          largest and most dangerous prison planet, home to over five billion
          convicts. As a means of keeping order in her turbulent domain, she is
          not above psychological manipulation, spot executions, or even
          physical mutilation. Despite her reputation as a cutthroat warden, her
          intentions are truly to make the territory of the Alliance safer for
          its inhabitants by locking up and monitoring those who pose a threat.
        </p>
        <p>
          White Shield - This title has only been held by a few strong
          individuals who have officially led the force over the passage of
          time; however, the current White Shield of the Galactic Division of
          Security has proven to be the most memorable among them. Androw
          Stolinski&#39;s chief responsibilities are to manage the upper
          officials of the force, to track down and detain notable criminals,
          and to defend Alliance territory from pirates, but he has gone above
          and beyond these tasks and established himself as the true face of
          justice. He is almost always found on the front, executing his
          enforcement duties, to the point where is alienating his
          administrative role. That being said, his skills in hand-to-hand
          combat and tactical maneuvers in dogfights have yet to be bested by
          the craftiest of the galaxy&#39;s criminals.
        </p>
        <p>
          <strong>Notable Locations</strong>
        </p>
        <p>
          Kappa-013 - This rainy planet with a distinctively jagged stone
          landscape serves as the GDOS&#39;s most notorious, most well-defended,
          and most well-managed prison world. Nearly two hundred iceberg-gray
          fortress-cities dot the harsh terrain, vigilant spotlights scouring
          for fleeing inmates. Only the most dangerous criminals are imprisoned
          here, but the environment combined with the tight security and
          ordinances from the Chief Warden Leviathan makes escape
          nigh-impossible, even if a gang does somehow organize a large riot.
          The largest and most infamous fortress-city, known as the Xi Complex,
          is notable for containing the two deadly Holkovrhys colonels Cape and
          Dontharan. Maintaining stability and fending off enemy forces are by
          far the hardest problems the GDOS face here, but with an imaginative
          warden and unforgiving landscape, they may very well continue to
          succeed.
        </p>
        <p>
          Outpost 01 - The center of the GDOS&#39;s operations and the official
          office for White Shield, this pentagonal bipyramid space station
          orbits the Gob&#39;s former homeworld of Cyrus Magnon. Originating on
          the planet&#39;s satellite moon and eventually enveloping its
          entirety, this place sees tens of thousands of troops enlisting,
          training, organizing squads, and deciphering cases. All data ever
          collected by the GDOS finds its way here into the network of
          supercomputers for storage and review. In a special district on one of
          the triangular sides of the station, mercenaries can find the
          headquarters of the Zoragon weapons manufacturing company. Closely
          monitored and even partially staffed by the police, this complex
          develops armaments on a great scale for the outpost&#39;s inhabitants,
          even taking the time to explore experimental weapons technology such
          as ammunition regeneration and flash force fields. Although the
          outpost isn&#39;t terribly large, it does have access to an array of
          powerful anti-spacecraft cannons down on the surface of the planet
          below.
        </p>
        <p>
          Nebervor - While the GDOS do spend most of their time dealing with
          criminals within the boundaries of the Galactic Alliance, they are
          also tasked with keeping out hostile empires, and this place is one of
          the most contested battlegrounds between the Alliance and the
          Holkovrhys. Originally a sacred planet for the Ekta Viren religious
          movement, the temples of worship, burial grounds, and shrine-cities
          that appear across the bright, lush surface are now in a state of ruin
          as they are constantly taken and re-taken by the two sides. Larger
          temples are filled with munitions, underground catacombs are remade
          into bunkers, and the purity of the land is being torn apart in harsh
          gunfire. The Alliance isn&#39;t certain as to why the Holkovrhys are
          being so persistent here, but one thing is for sure; the Holkovrhys
          Empire isn&#39;t going to be leaving anytime soon.
        </p>
        <p>
          <strong>Notable Relationships</strong>
        </p>
        <p>
          <a onClick={() => updateLore("Hyjakker")}>Hyjakker</a> - The GDOS has
          no tolerance whatsoever for these persistent terrorists and their
          anarchist agenda. The primary target of TAC operations missions and
          the largest percentage of inmates alongside common thugs on prison
          planets, these pirates are one of the chief reasons the GDOS has such
          a difficult time keeping the peace in this day and age. Some of the
          biggest criminal bounties in the galaxy are bestowed on the heads of
          this faction&#39;s leaders, and the security force of the Alliance
          will make certain that those pirates are brought down.
        </p>
        <p>
          <a onClick={() => updateLore("Porturuxeans")}>Porturuxeans</a> - Since
          this nation is known for developing some of the most advanced
          defensive weapons technology in the Alliance, it has been approached
          several times by the Zoragon Experimental Weapons Project under the
          GDOS. While some information has been shared between the two parties,
          there has been increasing demand from Zoragon as of late for even more
          technological secrets due to steadily increasing danger rates. And
          while the Democracy is happy to comply for the sake of the common
          goal, there has been intelligence surfacing hinting that confidential
          work done by the Porturuxeans has been turned over to the GDOS for
          further examination, much to their displeasure.
        </p>
        <p>
          Thugs - The GDOS are constantly tasked to round up these disturbances
          to the peace due to their various criminal activities. Charged with
          anywhere from petty crimes such as theft and arson to felonies like
          murder and seizure of private property, these scum live their lives in
          fear of the police and the fate of being left on a prison planet where
          their identities will slip into the abyss. When not incarcerated on a
          barren moon, however, these riffraff do their best to enact their
          anarchist agenda throughout civilization.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { lore } = state;
  return { lore };
};

export default connect(mapStateToProps, { updateLore })(GDOSLore);
