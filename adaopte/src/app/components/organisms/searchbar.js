'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const activites = [
    {
        id: 1,
        name: "Un café/thé"
    },
    {
        id: 2,
        name: "Un repas"
    },
    {
        id: 3,
        name: "Une promenade"
    },
    {
        id: 4,
        name: "Une sortie culturelle"
    },
    {
        id: 5,
        name: "Autre activité"
    }
]

export default function SearchBar(props) {

    const [activite, setActivite] = useState(props.activite || "Tous les moments possibles");
    const [city, setCity] = useState(props.city || "");

    const router = useRouter();
    
    function handleSubmit(e) {
        e.preventDefault();
        router.push(`/visite?city=${city}&activite=${activite}`);
    }

    function handleReset(e) {
        e.preventDefault();
        router.push(`/visite?city=&activite=Tous les moments possibles`);
        setCity("");
        setActivite("Tous les moments possibles");
    }

    return (
        <div className="search-bar">
            <form action="/visite" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="select-activite">Moment à partager</label>
                    <select name="activite" id="select-activite" onChange={(e) => setActivite(e.target.value)} value={activite}>
                        <option value="">Tous les moments possibles</option>
                        {activites.map((activite) => (
                            <option value={activite.name} key={activite.id}>{activite.name}</option>
                        ))}
                    </select>
                </div>
                <div>                    
                    <label htmlFor="input-city">Localisation</label>
                    <input type="text" name="city" id="input-city" placeholder='Votre ville' onChange={(e) => setCity(e.target.value)} value={city}/>
                </div>
                <button className="button" type="submit">Rechercher 🔎</button>
            </form>
            <div className="form-more">
                <p className="number-activites">{props.num} {props.num > 1 ? "moments trouvés" : "moment trouvé"}</p>
                <p className="reset-form" onClick={handleReset}>Réinitialiser les filtres</p>
            </div>
        </div>
    )
}