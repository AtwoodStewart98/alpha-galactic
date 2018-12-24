import React, { Component } from "react";
import { connect } from "react-redux";

import { updateLore } from "../../../ducks/reducer.js";

class DraconisLore extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { updateLore } = this.props;

    return (
      <div className="loreganizer">
        <h2>The Draconis Timocracy</h2>
        <p>
          <strong>Good Faction</strong>
        </p>
        <p>
          <strong>Lvls 1-10</strong>
        </p>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          The Draconis are newcomers to the Galactic Alliance, and although
          their cultural ethos is sometimes difficult to grasp, their society
          has thrived quite well in solitude. Political power is determined by a
          strict code of honor, and only those who exemplify it in their line of
          work are eligible to take office. Deceit and dishonesty are the worst
          offenses to a Draconis; such traits are punished severely. One law of
          their ethos that has gradually been adopted by other nations is the
          tradition that a fighter never enters combat without a melee weapon;
          in an era of impersonal methods of killing, it is a necessity to
          challenge your foe face-to-face, and to remind oneself of the reality
          of taking life. Their ambassadors to the Galactic Alliance have proven
          to be reputable and supportive, albeit highly opinionated of standards
          that do not match their own.
        </p>
        <p>
          <strong>Hierarchy</strong>
        </p>
        <p>
          The mentalities of the Draconis are traced directly into their
          government; they are an oddly successful timocracy, or ruled by the
          honorable. As such, their leaders can be trusted to be among the most
          honest and just of individuals at all times. Their current ruler,
          Epicon Racnos, acts as a sort of judiciary to the Draconisian
          Integrities, rarely consults directly with his generals, and
          stubbornly maintains his viewpoints when interacting with other
          Alliance members. In accordance with the code, their generals will
          command battles at the forefront, and so those who have gained renown,
          such as Lieutenant Generals Vetradonna and Malingara, are truly
          formidable figures indeed. Chain of command is fluid and constantly
          shifting below the generals; acts following the code will raise a
          Draconis higher in status, and it is up to their squad mates to verify
          their actions.
        </p>
        <p>
          <strong>Notable Members</strong>
        </p>
        <p>
          Lunar Agent Nereann - Although she might not be in the most suitable
          line of work, her heart is in the right place, and that&#39;s what
          matters to a Draconis. A positive and gregarious individual, Nereann
          also an iris agent, one of the Draconisian special ops divisions.
          Currently, she has been assigned the task of finding pathways down
          into the sunken city of Aurabage to retrieve info and tech, but
          she&#39;s beset by Vigilantes and P.U.N.K.s trying to keep her out.
          She&#39;s stayed determined, but she&#39;s running out of options by
          herself.
        </p>
        <p>
          Major &#34;Third Degree&#34; Pia - One of the tenants under the
          Draconisian Integrities is that any battle scars gained are to be kept
          as a self-reminder and, for some, a focus in meditation. Major Pia has
          acquired them in spades by literally staring death in the face. She
          gained her nickname after a search and rescue mission went wrong and
          the building she was in exploded with her and her team trapped inside
          it, losing most of her face and upper body. The only one to survive,
          the bacta used to resuscitate her could only regenerate (most of) the
          muscle tissue and her eyesight, leaving her without scales on most of
          her body. The experience has altered her mentally; she is
          extraordinarily headstrong and rigid in manner, and has no fear even
          under the most suicidal of situations.
        </p>
        <p>
          Operative Royles - A veteran nearly past his prime, Royles founded the
          whiteguard division many years ago in response to the Draconis joining
          the Galactic Alliance and becoming aware of threats outside their
          borders. He saw the need to greatly expand the size of their army, and
          offered the opportunity for Draconis to prove themselves through the
          code while increasing their defenses. He now worries the
          military&#39;s entwinement with the code will eventually create a rule
          by the military, but he also admits it may be time for social reform.
        </p>
        <p>
          Judgment - Words can have different interpretations, but the
          viewpoints of this rogue operative on the code have caused his
          excommunication from the Draconis Timocracy. Going only by Judgment,
          this individual deviated from his peers once the Integrities were
          expanded by Epicon Racnos, choosing to reject the three new tenants.
          Recently, he has been spotted operating out of Braultlin-15, arguing
          philosophies with P.U.N.K. soldiers at staff-point before violently
          executing them.
        </p>
        <p>
          Grand Arbiter Rawei - The only position that reports to the Draconis
          leader directly and regularly, the Grand Arbiter is tasked with
          observing important battlefields and political situations. Rawei is
          unorthodox from others in his line because he not only actively
          engages enemies as opposed to recording from the sidelines, but even
          tries to befriend and recruit them. A serious individual with a
          peculiar soft spot for Nereann, Rawei will always ensure that justice
          will be the final outcome.
        </p>
        <p>
          Ides - Once a preeminent leader among the talonfang warriors, she went
          missing deep in enemy territory after she stayed behind to fend off an
          army of Holkovrhys from the rest of her regiment. Battered and broken,
          but miraculously victorious, she has been reduced to a wandering
          mercenary hiding in plain sight within cities of the Empire, trying to
          find a way to escape and get back to her people. Her devotion to the
          code has been more thoroughly tested than any other Draconis, and
          although weary, she has not given up hope yet.
        </p>
        <p>
          Lieutenant General Vetradonna - After the Draconis joined the
          Alliance, their generals have suffered nothing short of constant
          headaches balancing the new threats of the Holkovrhys and Hyjakkers
          alongside the Thrax they had already been combating, on top of
          controlling how they conduct themselves under the Integrities in an
          ever-changing social environment. Vetradonna is the most senior of the
          generals, and as such, serves as the focal point of scrutiny by Epicon
          Racnos, her peers, and the troops she commands. Despite all the
          pressure, she seems to continue to make all the right calls, and even
          though she sometimes verbally complains about being too old to cope
          with her job, people close to her know she feels right at home in the
          center of attention. She has frustrated Rawei at times by
          out-reasoning even the Grand Arbiter, proving time and again her
          ability and judgment in commanding the Draconis military.
        </p>
        <p>
          Malingara - Although technically one of the lieutenant generals in
          ranking, she prefers not to be addressed by the title, going simply as
          Malingara. Also, despite being director of the secretive jadescale
          special ops, she puts herself out in the open on a regular basis,
          welcoming foreigners to the Draconis homeworld of Tasaria, and guiding
          and training individuals she feels a connection with. In addition to
          being a remarkably good judge of character, she has the uncanny
          ability to accurately predict events in the near future, even with
          minimal information. Malingara truly is a gifted individual, and she
          will see to it that her talents will keep her precious people safe.
        </p>
        <p>
          <strong>Notable Locations</strong>
        </p>
        <p>
          Tasaria - At the very edge of Sector Alpha lies the Draconisian
          homeworld, a vibrant planet largely unspoiled by urban sprawl.
          Civilization has grown to incorporate the landscape into it, which can
          range from deep jungles to volcanic deserts of black sand, and
          vine-covered mountainsides. For a long time, the Draconis have merely
          had to contend with encroaching Thraxian territory, but after joining
          the Alliance, the inhabitants have become steadily more aware of
          potential threats approaching from other directions. Fortunately, they
          possess the military strength and backing from other nations to make
          this far-off planet an impenetrable stronghold.
        </p>
        <p>
          Baonion - The inhabitants of this world have faced far more than their
          fair share of hardships. After succumbing to a planetary bombing run
          by the Hyjakkers, in the midst of rebuilding, the forces of the
          P.U.N.K.s decided to set up shop in their wreckage to recruit the
          angry and disillusioned from the population. In response to the
          ongoing chaos, the Draconis have established and maintained the
          massive compound of Fort Tyrol in order to support the relief effort
          and keep their sworn enemies, the P.U.N.K.s, at bay. Their enemies
          will be difficult to uproot; the P.U.N.K.s control a fort of their
          own, an inactive helicarrier protected by one of the strongest force
          fields tested by military might, and arrays of firebases with an
          endless supply of anti-spacecraft missile silos.
        </p>
        <p>
          Braultlin-15 - Once a terraformed planet utilized as a training ground
          and research facility for the Draconis, the P.U.N.K.s launched an
          assault on the atmosphere generator on one of the planet&#39;s poles,
          causing a rapid global temperature rise, melting the ice caps and
          flooding the planet within hours. The citadel of Aurabage was almost
          completely submerged, with only the tallest of skyscrapers poking
          above the waves now. The site is now contested between Draconis
          wishing to recover their data and tech, Vigilantes scavenging what
          they can, and the P.U.N.K. invaders sowing chaos and trying to
          establish dominance over their sworn enemies.
        </p>
        <p>
          <strong>Notable Relations</strong>
        </p>
        <p>
          {/* eslint-disable-next-line */}
          <a onClick={() => updateLore("P.U.N.K.")}>P.U.N.K.</a> - Among all the
          new threats the Draconis have had to contend with since joining the
          Alliance, this band of anarchapitalists serves as the antithesis to
          what they stand for. The P.U.N.K. make rules to be broken, exclusively
          work to better themselves at the cost of anyone else they come into
          contact with, and deeply despise the Draconis Integrities to the core.
          They are considered the most dangerous threat to the peace and
          security of a stable society, and will be shown no mercy.
        </p>
        <p>
          {/* eslint-disable-next-line */}
          <a onClick={() => updateLore("Thrax")}>Thrax</a> - Due to the
          Draconisian homeworld orbiting in a system closer to the center of the
          galaxy than most of the Alliance, they have had to deal with this
          cybernetic race at their doorstep for a long time. While the P.U.N.K.
          are diametrically opposed ideologically, the Thrax are the opposite to
          what the Draconis are physically; evolving artificial beings with no
          ties to themselves. They have been fighting for so long, in fact, the
          Draconis know more intel and strategies than even the Porturuxeans on
          these foes.
        </p>
        <p>
          {/* eslint-disable-next-line */}
          <a onClick={() => updateLore("Porturuxeans")}>Porturuxeans</a> - Even
          staunch allies can disagree, and being the other military-driven race
          in the Galactic Alliance, the Draconis have much to disagree with how
          the Porturuxeans conduct themselves. Their primary issue is the fact
          that this race has no problems sending robots to war, which they
          perceive as dishonorable and removed from the actions they are held
          accountable for, no matter the opponent. In turn, the Porturuxeans
          worry the Draconis are needlessly expending a finite number of troops
          into a war that will likely last for generations. Time will tell how
          these two will reconcile on the details, but for now they will set
          aside their differences to defeat an agreed scourge.
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
)(DraconisLore);
