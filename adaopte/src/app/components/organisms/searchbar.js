import Form from 'next/form';

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
    return (
        <div className="search-bar">
            <Form action="/visite">
                <div>
                    <label htmlFor="select-activite">Moment à partager</label>
                    <select name="activite" id="select-activite" defaultValue={props.activite ? props.activite : ""}>
                        <option values="">Tous les moments possibles</option>
                        {activites.map((activite) => (
                            <option value={activite.name} key={activite.id}>{activite.name}</option>
                        ))}
                    </select>
                </div>
                <div>                    
                    <label htmlFor="input-city">Localisation</label>
                    <input type="text" name="city" id="input-city" placeholder='Votre ville' defaultValue={props.city ? props.city : ""}/>
                </div>
                <button className="button" type="submit">Rechercher 🔎</button>
            </Form>
            <div className="form-more">
                <p className="number-activites">80 moments trouvés</p>
                <p className="reset-form">Réinitialiser les filtres</p>
            </div>
        </div>
    )
}