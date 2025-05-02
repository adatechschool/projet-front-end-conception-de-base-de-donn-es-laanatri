'use client'

import Title from "../molecules/title";

const textPersonnalite = [
    {
        title: "formulaire d'inscription",
        paragraphe:
            "Remplissez ce formulaire pour rejoindre notre réseau de bénévoles. Nous vous contacterons rapidement pour vous présenter les prochaines étapes.",
    },
];

export default function Formulaire() {
    function handleSubmit() {
        e.preventDefault();
        console.log("yo")



        return true;
    }

    return (
        <form action={"submit"} onSubmit={handleSubmit}>
            <Title text={textPersonnalite[0]} />

            <div>
                <div>
                    <label>Prénom<span>*</span></label>
                    <input placeholder="Votre prénom"/>
                </div>
                <div>
                    <label>Nom<span>*</span></label>
                    <input placeholder="Votre nom"/>
                </div>
            </div>
            <div>
                <label>Adresse email<span>*</span></label>
                <input placeholder="exemple@email.com"/>
            </div>
            <div>
                <div>
                    <label>Ville<span>*</span></label>
                    <input placeholder="Votre ville"/>
                </div>
                <div>
                    <label>Code postal<span>*</span></label>
                    <input placeholder="Code postal"/>
                </div>
            </div>
            <div>
                <label>Disponibilités<span>*</span></label>
                <select>
                    <option value="">Sélectionnez vos disponibilité</option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <div>
                <label>Votre motivation</label>
                <textarea placeholder="Parlez-nous de votre motivation à devenir bénévole chez Adaence..."/>
            </div>

            <button className="button">Envoyer ma condidature</button>
        </form>
    );
}
