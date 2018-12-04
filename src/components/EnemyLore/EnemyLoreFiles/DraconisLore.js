import React, { Component } from "react";
import { connect } from "react-redux";

class DraconisLore extends Component {
  render() {
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
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(DraconisLore);
