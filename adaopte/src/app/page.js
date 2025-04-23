import SearchBar from "./components/organisms/searchbar"
import Title from "./components/molecules/title"

import profiles from "../../public/datas/profiles.json"

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

      <section>
        <Title text={textPersonnalite[0]}/>

        <div className="mosaique">

          {profiles.map((profile, index) => (
            <div key={index}>
              <img src={profile.imageUrl} alt="photo de profile"/>
            </div>
          ))}

        </div>
        
      </section>

      <section>
        <Title text={textPersonnalite[1]}/>
      </section>

      <section>
        <Title text={textPersonnalite[2]}/>
      </section>
    </>
  );
}