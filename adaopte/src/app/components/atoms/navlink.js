'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function NavLink({link}) {

    const pathname = usePathname();
    const classes = `nav-link ${pathname != "/" ? link.route.includes(pathname.replace("/", "")) ? "disabled" : "" : link.route === "/" ? "disabled" : ""}`;

    return (
        <Link className={classes} href={link.route}>{link.icon ? <img src={link.icon}/> : ""}{link.name}</Link>
    )
}