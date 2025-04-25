'use client'

import SearchBar from "../components/organisms/searchbar";
import { useSearchParams } from 'next/navigation';

import ProfileCard from "../components/molecules/profilecard";

import profiles from "../../../public/datas/profiles.json";

export default function Visite() {
  const searchParams = useSearchParams();
  const activite = searchParams.get('activite');
  const city = searchParams.get('city').toLowerCase();

  const selectedProfiles = profiles.filter((profile) => profile["city"].toLowerCase() === city && profile["type"] === activite)

  return (
    <>
      <section className="section-search">
        <SearchBar activite={activite} city={city}/>
      </section>

      <section className="section-results">
        {selectedProfiles.map((profile, index) => (
          <ProfileCard props={profile} key={index}/>
        ))}
      </section>
    </>
  );
}