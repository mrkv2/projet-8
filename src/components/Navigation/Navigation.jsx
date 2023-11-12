import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './navigation.scss';
import Logo from '../../assets/images/Logo.svg';




export default function Navigation() {
    return (
       <header>
        <div className="logo">
        <Link to="/">
    <img src={Logo} alt="logo" className="logo-img"/>
</Link>
            </div>
        <nav >
            <ul>
            <li>
                    <NavLink to="/" end activeClassName="lien-actif">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/about" end activeClassName="lien-actif">A propos</NavLink>
                </li>
            </ul>
        </nav>
       </header>
    )
}