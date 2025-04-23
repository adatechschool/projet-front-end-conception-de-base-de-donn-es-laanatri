import Nav from "../molecules/nav"
import Button from "../atoms/button"

export default function NavBar() {

    const don = {
        id: 1,
        name: "Faire un don 🫶",
        icon: "",
        route: "/"
    };

    return (
        <div className="nav-bar">
            <div className="logo-adaence">
                <p>🍵 Ada<span>ence</span></p>
            </div>
            <Nav/>
            <Button link={don}/>
        </div>
    )
}