import Formulaire from "../components/organisms/formulaire";
import Title from "../components/molecules/title";
import Card from "../components/molecules/card";

const textPersonnalite = [
  {
      title: "Pourquoi devenir bénévole",
      paragraphe:
          "Être bénévole chez Adaence, c'est bien plus qu'une simple activité. C'est une expérience enrichissante qui apporte du sens à votre vie et à celle des autres.",
  },
];

const marcheCards = [
  {
    id: 1,
    icon: "🔍",
    title: "Faire une différence concrète",
    paragraphe: "Parcourez les profils de nos aînés et trouvez la personne avec qui vous aimeriez partager un moment chaleureux."
  },{
    id: 2,
    icon: "📝",
    title: "Acquérir de nouvelles conpétences",
    paragraphe: "Indiquez vos disponibilités et vos envies. Cela nous aide à organiser une rencontre adaptée et en toute confiance."
  },
  {
    id: 3,
    icon: "👋",
    title: "Intégrer une communauté solidaire",
    paragraphe: "Rendez visite à la personne âgée dans un cadre bienveillant. Une discussion, une balade ou simplement l'aider à une tâche ! Chaque moment compte."
  },
  {
    id: 4,
    icon: "💞",
    title: "Donner du sens à votre temps",
    paragraphe: "Si le courant passe, vous pouvez revenir ! Ensemble, tissons des liens durables et combattons l'isolement pas à pas."
  }
];

export default function Benevole() {
    return (
      <>
        <header>
          <div className="img-content img-benevole">
            <img src="/images/hannah-busing-Zyx1bK9mqmA-unsplash.jpg" alt="scéne de vie"/>
          </div>
          <div className="txt-content txt-benevole">
            <h1>devenir bénévole</h1>
            <p>Rejoignez notre communauté et donnez du sens à votre temps libre. En devenant bénévole chez Adaence, vous contribuez à rétablir des liens humains essentiles avec nos ainés.</p>
          </div>
        </header>

        <section className="section-formulaire">
          <Formulaire/>
        </section>

        <section className="section-marche">
          <Title text={textPersonnalite[0]}/>
          <div className="marche-cards-content">
            {marcheCards.map((card) => (
              <Card text={card} key={card.id}/>
            ))}
          </div>
        </section>
      </>
    );
  }
   