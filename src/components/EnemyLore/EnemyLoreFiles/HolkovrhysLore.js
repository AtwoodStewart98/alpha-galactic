import React, { Component } from "react";
import { connect } from "react-redux";

import { updateLore } from "../../../ducks/reducer.js";

class HolkovrhysLore extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { updateLore } = this.props;

    return (
      <div className="loreganizer">
        <h2>The Holkovrhys Empire</h2>
        <p>
          <strong>Evil Faction</strong>
        </p>
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
          any hindrance from bureaucracy. As commander-in-chief of the
          Holkovrhys, he personally directs a circle of Empire Colonels called
          the Broken Ring of Nine, each appointed with their own individual
          tasks and agendas, but all with a single, unifying purpose: the
          never-ending conquest of the Holkovrhys Empire. This method of
          leadership proves itself effective in minimizing infighting; each
          colonel holds command over a cell of three underofficers, who each
          command three lower lieutenants, and so on down the line.
          Equal-ranking leaders are usually aware of each other, but not of
          their assigned missions.
        </p>
        <p>
          <strong>Notable Members</strong>
        </p>
        <p>
          Colonel Grauito - Each member of the Empire&#39;s Broken Ring of Nine
          has earned his or her place through great acts of renown, and Grauito
          is no exception. Vain and extremely technologically savvy, he is
          responsible for developing the entire line of artificially intelligent
          mechas seeding the army&#39;s ranks, ensuring minimization of
          illogical error. He devotes an extraordinary amount of his time
          philosophizing about the benefits of the soul through
          self-augmentation via cybernetics, and he will utilize his aptitude
          for picking out the minutiae as he tears you apart in combat.
        </p>
        <p>
          Colonel Dontharan - Although officially no longer a part of the Broken
          Ring of Nine due to having been captured by the GDOS, he is still a
          formidable tactical genius with a taciturn personality. After his
          forces fell miraculously to an unexpected scissor ambush alongside
          Colonel Cape, they were each taken prisoner to the high-security
          prison world of Kappa-013, and subsequently stripped of their titles.
          Observing scientists discovered he has somehow acquired the ability to
          naturally regenerate wounds, which led to a series of interrogations
          and borderline unethical experiments to uncover his secret. So far, he
          has given up nothing.
        </p>
        <p>
          Colonel Cape - The other of the two Empire Colonels to have been
          imprisoned on Kappa-013, his captors have described him as
          &#39;unusually amiable&#39; and &#39;musing&#39; despite his current
          situation. His charismatic persona belies the fact that under the
          exterior is a shrewd schemer. The GDOS are certain he&#39;s plotting
          something big, even in the confines of the most secure prison planet
          in the galaxy, perhaps in the hopes of redeeming himself and Dontharan
          in the eyes of the Holkovrhys Emperor. How he plans to do so is
          anyone&#39;s guess, however.
        </p>
        <p>
          Emperor Azyex Docstiertun - Conqueror of solar systems, breaker of
          ethics, and the greatest toxic thorn in the side of the Galactic
          Alliance, the Holkovrhys Emperor Docstiertun commands power equally
          between creation and destruction firm in his grasp. He has galvanized
          his people in a cultural and philosophical revolution as few races in
          the galaxy have experienced, generating a venerable mine of new ideas
          and perceptions, artwork and technology. At the same time, he
          weaponizes this tidal wave of ingenuity to indoctrinate his empire on
          their superiority, rationalizing his wake of military seizure and
          destruction with ideologies bred into society. His nation may for now
          be kept at bay by the combined might of the Galactic Alliance, but
          there is no mistaking the tendrils of his influence seeping throughout
          this sector of the galaxy. His vision is to establish his people over
          every lesser race in the galaxy, and with all his resources and
          devotion, there is a frightening reality that he may succeed.
        </p>
        <p>
          <strong>Notable Locations</strong>
        </p>
        <p>
          Barter-2 - This planet was formerly a Porturuxean colony rich in
          historical artifacts, proprietors of the arts, and murdalyn, a highly
          reactive mineral naturally occurring in surface-level ore deposits,
          thought up to recent times to only be synthetic. However, the
          Holkovrhys brutally captured the planet after distracting the
          Porturuxean fleet by sending Hyjakkers to launch an assault on one of
          their neighboring systems. It is said the population of thirty-two
          million Porturuxean civilians was massacred overnight by a truly
          overwhelming force of Holkovrhys. Now the vibrant jungles surrounding
          civilization is being razed in a hunt for the planet&#39;s valuable
          mineral, no doubt to be used to enhance more military technology.
        </p>
        <p>
          Nebervor - Even in this galactic era, war is still often compared to
          the ancient game of chess, invented by a forgotten race, and the
          pieces Emperor Docstiertun chooses to prioritize taking are puzzling
          at best. Originally a sacred planet for the Ekta Viren religious
          movement, the temples of worship, burial grounds, and shrine-cities
          that dot the bright, lush surface are now in a state of ruin as they
          are constantly taken and re-taken by the Holkovrhys and the GDOS.
          Larger temples are filled with munitions, underground catacombs are
          remade into bunkers, and the purity of the land is being torn apart in
          harsh gunfire. There is something the Holkovrhys urgently seek here,
          and they will not stop until they have found it.
        </p>
        <p>
          Derivex - Homeworld to the Holkovrhys Empire and considered a miracle
          that any sentient life could have developed on it, Derivex is not a
          planet for the casual explorer. The landscape is absolutely devoid of
          vegetation of any kind; where there isn&#39;t sludgy,
          mineral-contaminated sea, the clay-like surface sports boiling
          mudholes filled with microbes that provides the planet&#39;s only
          source of breathable oxygen. Whatever the state of chemistry that
          occurs under the surface creates infamous billowing gas capable of
          rotting the lungs through inhalation. The Emperor harvests this toxic
          gas and weaponizes it, leading to his favorite creation; a stable
          liquid state of the gas so acidic it is capable of eating through even
          cryptopitanium armor. Despite the harsh environment, many Holkovrhys
          still call this place home, creating a rich and varied culture as a
          kind of beacon of light in this world of darkness.
        </p>
        <p>
          <strong>Notable Relations</strong>
        </p>
        <p>
          <a onClick={() => updateLore("Hyjakkers")}>Hyjakker</a> - It would be
          typically assumed that two selfish, race-centric factions would be at
          odds with one another, but such is not the case between the Xiphave
          and the Holkovrhys. Probably due to identifying the fact that alone,
          neither has the power to challenge the Galactic Alliance, Emperor
          Docstiertun and Perdio Longhurst have forged a strong alliance with
          free exchange of tech and information. The satellite asteroid Laugandy
          is used as neutral ground where their scientists can freely
          collaborate on diabolical projects.
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
)(HolkovrhysLore);
