'use client'

import { useState } from 'react';

import NavLink from "../atoms/navlink";

import Image from 'next/image';

const links = [
    {
        id: 1,
        name: "Accueil",
        icon: "images/house.svg",
        route: "/"
    },
    {
        id: 2,
        name: "Je rends visite",
        icon: "images/accessibility.svg",
        route: "/visite?activite=Tous+les+moments+possibles&city="
    },
    {
        id: 3,
        name: "Guide du partage",
        icon: "images/book-open.svg",
        route: "/guide"
    },
    {
        id: 4,
        name: "Devenir bénévole",
        icon: "images/hand-helping.svg",
        route: "/benevole"
    }
];

export default function Nav() {

    const [actif, setActif] = useState(false);

    const toogleActifState = () => {
        actif ? setActif(false) : setActif(true)
    }

    const linksList = links.map((link, id) =>
        <li key={id}>
            <NavLink link={link}/>
        </li>
    )

    return (
        <nav className={actif ? "actif" : ""}>
            <div className="burger" onClick={toogleActifState}>
                <Image src="images/menu.svg" width={50} height={50} alt="menu"/>
            </div>
            <ul onClick={toogleActifState}>{linksList}</ul>
        </nav>
    )
}