import Link from 'next/link';

export default function NavLink({link}) {
    return (
        <Link className="nav-link" href={link.route}>{link.icon ? <img src={link.icon}/> : ""}{link.name}</Link>
    )
}