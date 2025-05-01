'use client'

import SearchBar from "../components/organisms/searchbar";
import { useSearchParams } from 'next/navigation';

import ProfileCard from "../components/molecules/profilecard";

import profiles from "../../../public/datas/profiles.json";

export default function Visite() {
  const searchParams = useSearchParams();
  const activite = searchParams ? searchParams.get('activite') : "Tous les moments possibles";
  const city = searchParams ? searchParams.get('city') ? searchParams.get('city').toLowerCase() : "" : "";
  
  const selectedProfiles = profiles.filter((profile) => {
    if (city === "" && profile["type"] === activite) {
      return true
    } else if (activite === "Tous les moments possibles" && profile["city"].toLowerCase().includes(city)) {
      return true
    }  else if (profile["type"] === activite && profile["city"].toLowerCase().includes(city)) {
      return true
    } else {
      return false
    }
  })
  
  let numberSelected = selectedProfiles.length;

  return (
    <>
      <section className="section-search">
        <SearchBar activite={activite} city={city} num={numberSelected}/>
      </section>

      <section className="section-results">
        {selectedProfiles.map((profile, index) => (
          <ProfileCard props={profile} key={index}/>
        ))}
      </section>
    </>
  );
}