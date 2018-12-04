import React, { Component } from "react";
import { connect } from "react-redux";

import { updateLore } from "../../../ducks/reducer.js";

class HyjakkerLore extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { updateLore } = this.props;

    return (
      <div className="loreganizer">
        <h2>The Hyjakker Coalition</h2>
        <p>
          <strong>Evil Faction</strong>
        </p>
        <p>
          <strong>Lvls 1-10</strong>
        </p>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          Amongst all the ruthless raiders and cutthroat outlaws throughout the
          galaxy, no other pirate organization is more widespread and feared
          than the Hyjakkers. Made up entirely of the Xiphave race, reptilian
          humanoids with distinct fangs protruding around their mouths, their
          numbers are so great that they are able to fend off repeated
          backlashes from the various nations of the Galactic Alliance. They are
          known for raiding valuable minerals from mining planets, manufacturing
          their own brand of weaponry, putting fledgling civilizations at their
          mercy, and otherwise serving as the primary focus of the
          Alliance&#39;s Galactic Department of Security (GDOS).
        </p>
        <p>
          <strong>Hierarchy</strong>
        </p>
        <p>
          At the top of the sometimes chaotic heap, the Hyjakkers are led by the
          infamous Green Terminator, a crack pilot and strategist who is almost
          never seen without his trademark emerald-green mask. Below him is a
          small but elite mix of pilots, raiding captains, assassins and
          operatives. Most notable among them is Daccus Hellway, a man with a
          truly twisted code of operations and the commander of the
          second-largest raiding fleet, behind the Green Terminator himself. The
          general bulk of the Hyjakker faction is made up of separate assault
          cells and raiding parties led by some sort of seasoned captain,
          allowing the incredibly large organization to function autonomously.
          Each group has its own agenda, but all accept one another as members
          of the same organization with similar goals. And while coups within
          cells are not uncommon, usually such an act is condoned by the
          Xiphave.
        </p>
        <p>
          <strong>Notable Members</strong>
        </p>
        <p>
          &#34;Reaper&#34; - This dangerous raiding captain is either seen
          alongside his partner Syren in various special operations missions, or
          as co-commander of the Hyjakker helicarrier, Wraith. He is most
          infamous for evading capture from the GDOS by fighting his way to an
          escape vessel with nothing but his fists. No-one is quite sure how he
          picked up his nickname, but one thing&#39;s for sure; he is a crafty
          opponent with plenty of combat experience, both in the air and on the
          ground.
        </p>
        <p>
          Syren - The most notable female officer in the Hyjakker hierarchy, she
          works alongside Reaper to gain intelligence and to command the
          pirates&#39; most valuable helicarrier. An innovative thinker and
          inventor, she assists in designing most of the weapons manufactured by
          the faction. When she&#39;s not trying to perfect the latest WMD,
          enemies might want to be on guard from one of her carefully executed
          sabotages.
        </p>
        <p>
          Rome Trax - Until recently, the Hyjakker have never experienced any
          major infighting or turmoil within their chain of command. Rome Trax
          is at the center of this current divisiveness. Formerly the chief
          lieutenant of Daccus Hellway, he betrayed his superior by attempting a
          coup on the bridge of the Wraith. Although he ultimately failed and
          his allies executed, he still managed to escape and reconstruct his
          cause at an unknown location. He may currently be a ghost to the rest
          of the world, but to anyone looking to dig up the past, there&#39;s a
          reason he holds the third-largest bounty among all the Hyjakkers.
        </p>
        <p>
          Khaled - Arguably the most savage individual in the organization,
          Khaled has risen through the ranks by literally killing anyone and
          anything in his path. Vicious, conniving, and with a complete
          disregard for living creatures, there is nothing this captain likes
          better than the feel of carving into his opponent&#39;s flesh with an
          ever-present vibro-blade. Now the replacement for Rome Trax under
          Daccus Hellway&#39;s leadership, he wishes to cement his position for
          good by hunting down the traitorous Xiphave and ending him once and
          for all. Nothing seems to be enough to satiate this monster&#39;s
          bloodlust, and his enemies would be well-advised to steer clear of his
          wrath.
        </p>
        <p>
          Tempro the Wanted - A minor captain in the organization, this
          wandering rogue is known simply for holding the most bounties among
          any criminal in the territory of the Galactic Alliance. Most of his
          offenses are insignificant, but the sheer amount that he&#39;s racked
          up makes the more experienced criminals look tame by comparison. When
          it comes to an actual firefight, a reckless personality combined with
          a trusty shotgun make for an unpredictable combat style.
        </p>
        <p>
          Ghast - The center of the Hyjakker&#39;s knowledge and monitor of all
          that goes on in the gigantic organization, this artificial
          intelligence never resides in one metallic shell for long, constantly
          transferring itself as a means of protecting its information. Its
          usual form is a thin but agile humanoid constructed entirely of
          cryptopitanium and armed with the heaviest weaponry available.
          Programmed by the genius of a deceased captain and constantly upgraded
          by Syren&#39;s best minds, it constantly devises new schemes to be
          broadcast to the pirate empire. While its lack of ethics in its
          methods is questioned by some, there is no doubt that its
          laser-precise plans always bring victory to the Hyjakkers.
        </p>
        <p>
          Daccus Hellway - There are few in the galaxy who don&#39;t crumble
          with terror at the name of Daccus Hellway. Active leader of the Wraith
          and the infamous 2nd Division, this pirate has pillaged more planets
          and raided more mines that any other Hyjakker to date. He has a
          grotesque sense of honor that compels him to uphold his agreements
          until things turn out unfavorably, at which point his betrayal will be
          swift and decisive. Due to his gigantic number of followers, combat
          expertise, strategic skills, and near-total access to Ghast, some
          suspect he may challenge the Green Terminator one day for supremacy,
          but since that position involves keeping diplomatic relations with the
          Holkovrhys, he seems content as second-in-command. The incident
          involving Rome Trax and his replacement, Khaled, seems to have
          slightly disoriented his actions as of late, but his presence in the
          organization is far from weakened.
        </p>
        <p>
          Perdio Longhurst - The true mastermind behind the Hyjakker, and better
          known under the alias of the Green Terminator, this tyrant has total
          control over his bandit organization, but prefers to leave the work to
          Daccus Hellway while he slips into the unknown to scheme his greater
          plans. Indeed, he is often known to operate alongside Emperor
          Docstiertun of the Holkovrhys Empire, searching for an unknown object
          of great value. His charges for intersectoral crimes are many and of
          great magnitude, including destruction of planetoids, holding whole
          colonies hostage, massacring GDOS troopers, one case of xenocide,
          theft of confidential Alliance property, and more. Unparalleled in
          space dogfights and a true terror on the ground with his unique
          exoskeleton combat suit, only the best vigilantes can hope to even
          survive the wrath of this legend.
        </p>
        <p>
          <strong>Notable Locations</strong>
        </p>
        <p>
          Laugandy - This dark, rocky planet is well within Hyjakker territory,
          and although its one air-bubbled spaceport certainly doesn&#39;t look
          like much, this place is often frequented by the Green Terminator
          himself and serves as a hub for Xiphave and Holkovrhys alike. There is
          also a great experimental factory owned by Emperor Docstiertun and run
          by Syren which seems to be developing various synthetic chemical
          weapons for use against the Alliance. Most intelligence gained about
          the place comes from mercenary double-agents who are lucky to ever
          approach the spaceport a second time.
        </p>
        <p>
          Mauhaus-817 - Formerly the Xiphave homeworld, now a ravaged planet
          stripped of all its resources, this place is a testament the
          Hyjakker&#39;s agenda of plundering and moving on. Currently a
          contested zone between Xiphave who wish to preserve their past and the
          militant corporation known as Colossus, outsiders caught in the
          conflict will suffer extreme prejudice before they even have a chance
          to get their bearings. Once on the planet, mercenaries will find
          well-defended archeological dig sites and laboratories either occupied
          by corporate scientists or gutted by Hyjakker pirates. Battlegrounds
          are so large the sheer brightness of the laser fire can be seen during
          the nighttime from orbit.
        </p>
        <p>
          Wraith - The flagship helicarrier of the pirate fleet, this mobile
          command center is home to infamous names such as Daccus Hellway,
          Ghast, Reaper, and Syren. Purplish-black and armed to the teeth with
          laser cannons, missiles, and anti-fighter artillery, this gigantic
          spaceship constantly patrols the Hyjakker&#39;s established territory
          in search of trespassers and returning raiders. Able to carry
          thousands of tons of loot and hundreds of probes and fighters, the
          Wraith is a ship few have seen and even fewer have lived to speak
          about.
        </p>
        <p>
          <strong>Notable Relationships</strong>
        </p>
        <p>
          <a onClick={() => updateLore("GDOS")}>GDOS</a> - Naturally the GDOS
          are bitter enemies with this faction, as they both have very different
          and opposing agendas. Hyjakker gangs frequently raid planets protected
          by the GDOS, which usually leads to open conflict which any
          combat-inexperienced individual should steer clear of. Additionally,
          GDOS prison planets often contain captured pirates whom the Hyjakkers
          concoct plans to release. Both sides have plenty troops and armaments
          at their disposal, so their war will certainly be lengthy and bloody.
        </p>
        <p>
          <a onClick={() => updateLore("Holkovrhys")}>Holkovrhys</a> - Back when
          the Galactic Alliance was beginning to take the Hyjakkers and the
          Holkovrhys Empire seriously as threats, Emperor Docstiertun and Perdio
          Longhurst arranged a meeting together at the neutral planet of
          Laugandy. After a span of five days, the two leaders finalized an
          agreement that effectively created an alliance between their two
          civilizations. Today, the two organizations can be found trading goods
          and fighting alongside one another. Some sources indicate that a third
          party was influential in their partnership, but these claims remain
          unproven.
        </p>
        <p>
          <a onClick={() => updateLore("Porturuxeans")}>Porturuxeans</a> - The
          President of the Porturuxean Democracy holds more grudges against the
          Hyjakkers than any other member of the Galactic Alliance. Because the
          Porturuxeans control the most mining planets of any nation, pirates
          are drawn to target these places more than anywhere else. If it
          weren&#39;t also the fact that the Porturuxeans have access to some of
          the best defensive weapons technology, the Democracy might have fallen
          due to economic instability long ago. Still, Hyjakkers are an
          opportunistic lot, and any mining world caught off-guard will fall to
          an onslaught of tactically ruthless raiders.
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
)(HyjakkerLore);
