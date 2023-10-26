import { NavLink } from "react-router-dom";

import Logo from '../../assets/images/Logo.svg'

import './navigation.css'
import { Link } from 'react-router-dom';



export default function Navigation() {
    return (
       <header>
        <div className="logo">
        <Link to="/">
    <img src={Logo} alt="logo" className="logo"/>
</Link>
            </div>
        <nav>
            <ul>
                <li>
                <NavLink to="/" exact activeClassName="lien-actif" >Accueil</NavLink>
                </li>
                <li>
                <NavLink to="/about" activeClassName="lien-actif" >A propos</NavLink>
                </li>
            </ul>
        </nav>
       </header>
    )
}