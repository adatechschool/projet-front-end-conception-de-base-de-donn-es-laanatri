import NavLink from "../atoms/navlink";

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
    const linksList = links.map((link, id) =>
        <li key={id}>
            <NavLink link={link}/>
        </li>
    )
    return (
        <nav>
            <ul>{linksList}</ul>
        </nav>
    )
}