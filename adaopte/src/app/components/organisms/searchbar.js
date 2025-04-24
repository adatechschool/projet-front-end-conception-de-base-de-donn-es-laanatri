import Form from 'next/form';
// import { FormEvent } from 'react'

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

export default function SearchBar() {
    return (
        <div className="search-bar">
            <Form action="/visite">
                <div>
                    <label for="select-activite">Moment à partager</label>
                    <select name="activite" id="select-activite">
                        {activites.map((activite) => (
                            <option value={activite.name} key={activite.id}>{activite.name}</option>
                        ))}
                    </select>
                </div>
                <div>                    
                    <label for="input-ville">Localisation</label>
                    <input type="text" name="ville" id="input-ville" placeholder='Votre ville'/>
                </div>
                <button className="button" type="submit">Rechercher 🔎</button>
            </Form>
        </div>
    )
}