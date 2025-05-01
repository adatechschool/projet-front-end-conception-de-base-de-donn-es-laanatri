import Link from 'next/link';

export default function Button({link}) {
    return (
        <Link className="button" href={link.route}>{link.icon ? <img src={link.icon}/> : ""}{link.name}</Link>
    )
}