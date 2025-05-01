import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div>
                    <p>adaence</p>
                    <p>Notre mission est de recréer du lien avec les personnes âgées isolées, en leur offrant des moments de partage, d'ecoute et de presence.</p>
                    <div className="social-links">
                        <Link href="/">
                            <Image src="/images/facebook.svg" width="50" height="50" alt="facebook"/>
                        </Link>
                        <Link href="/">
                            <Image src="/images/instagram.svg" width="50" height="50" alt="instagram"/>
                        </Link>
                        <Link href="/">
                            <Image src="/images/linkedin.svg" width="50" height="50" alt="linkedin"/>
                        </Link>
                        <Link href="/">
                            <Image src="/images/twitch.svg" width="50" height="50" alt="twitch"/>
                        </Link>
                    </div>
                </div>
                <div>
                    <p>INFORMATIONS UTILES</p>
                    <div>
                        <Link href="/">FAQs</Link>
                        <Link href="/">Liste des activités</Link>
                        <Link href="/">Nous contacter</Link>
                        <Link href="/">Mentions légales</Link>
                    </div>
                </div>
                <div>
                    <p>contact</p>
                    <p>116 Rue du Faubourg Saint-Martin <br/>
                    75010 Paris, France<br/>
                    Email: contact@adaence.fr<br/>
                    Tel: +33 1 23 45 67 89</p>
                </div>
            </div>
            <div className="footer-credits">
                <p>	&#xA9; 2025 Adaence. Tous droits réservés <br/>Ce site a été développé dans le cadre d'un projet pour ADA Tech School.</p>
            </div>
        </footer>
    )
}