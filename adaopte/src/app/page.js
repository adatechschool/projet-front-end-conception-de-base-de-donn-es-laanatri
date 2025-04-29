import SearchBar from "./components/organisms/searchbar";
import Title from "./components/molecules/title";
import Button from "./components/atoms/button";
import Card from "./components/molecules/card";

import Image from 'next/image';

import profiles from "../../public/datas/profiles.json";

const textPersonnalite = [
  {
    title: "Les personnalité à rencontrer",
    paragraphe: "Feuilletez les visages de celles et ceux qui attendent simplement un peu de votre temps. Chaque sourire porte une histoire, chaque rencontre est une promesse."
  },{
    title: "Comment ça marche",
    paragraphe: "Offrir un peu de votre temps, c'est offrir beaucoup. Découvrez comment planifier une visite en toute simplicité."
  },
  {
    title: "Prêt⸱e à faire la différence ?",
    paragraphe: "Offrez un peu de votre temps, partagez un moment, créez du lien... Chaque présence compte. En tendant la main à une personne âgée, vous lui offrez bien plus qu'une visite : une vraie bouffée de chaleur humaine."
  }
];

const btnProfiles = {
  id: 1,
  name: "Voir tous les profils",
  icon: "",
  route: "/"
};

const marcheCards = [
  {
    id: 1,
    icon: "🔍",
    title: "1. Choisissez une rencontre",
    paragraphe: "Parcourez les profils de nos aînés et trouvez la personne avec qui vous aimeriez partager un moment chaleureux."
  },{
    id: 2,
    icon: "📝",
    title: "2. Remplissez le formulaire",
    paragraphe: "Indiquez vos disponibilités et vos envies. Cela nous aide à organiser une rencontre adaptée et en toute confiance."
  },
  {
    id: 3,
    icon: "👋",
    title: "3. Partagez un moment",
    paragraphe: "Rendez visite à la personne âgée dans un cadre bienveillant. Une discussion, une balade ou simplement l'aider à une tâche ! Chaque moment compte."
  },
  {
    id: 4,
    icon: "💞",
    title: "4. Créez du lien",
    paragraphe: "Si le courant passe, vous pouvez revenir ! Ensemble, tissons des liens durables et combattons l'isolement pas à pas."
  }
];

const btnsDifference = [
  {
    id: 1,
    name: "Programmer une visite",
    icon: "",
    route: "/"
  },
  {
    id: 2,
    name: "Faire un don 🫶",
    icon: "",
    route: "/"
  },
  {
    id: 3,
    name: "Devenir bénévole",
    icon: "",
    route: "/"
  }
];

// const cities = profiles.map((profile) => profile.city);
// console.log(cities)

export default function Home() {
  return (
    <>
      <header>
        <div className="img-content">
          <img src="/images/fiqih-pradana-qm-SgY--sVg-unsplash.jpg" alt="scéne de vie"/>
        </div>
        <div className="txt-content">
          <h1>Rétablissons les liens</h1>
          <p>Et si vous offriez un peu de votre temps à ceux qui en ont le plus besoin ? Prenez <br/> rendez-vous pour partager un moment avec une personne âgée isolée.</p>
        </div>
        <SearchBar/>
      </header>

      <section className="section-mosaique">
        <Title text={textPersonnalite[0]}/>
        <div className="mosaique">
          {profiles.map((profile, index) => {
            if (index < 8) {
              return <div key={index}>
                <Image src={profile.imageUrl} width="600" height="600" alt="photo de profile"/>
              </div>
            }
          })}
        </div>
        <Button link={btnProfiles}/>
      </section>

      <section className="section-marche">
        <Title text={textPersonnalite[1]}/>
        <div className="marche-cards-content">
          {marcheCards.map((card) => (
            <Card text={card} key={card.id}/>
          ))}
        </div>
      </section>

      <section className="section-difference">
        <Title text={textPersonnalite[2]}/>
        <div className="difference-buttons-content">
          {btnsDifference.map((btn) => (
            <Button link={btn} key={btn.id}/>
          ))}
        </div>
      </section>
    </>
  );
}