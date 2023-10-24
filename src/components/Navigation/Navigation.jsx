import { NavLink } from "react-router-dom";

import Logo from '../../assets/images/Logo.svg'

import './navigation.css'



export default function Navigation() {
    return (
       <header>
        <div className="logo">
            <img src={Logo} alt="logo" />
            </div>
        <nav>
            <ul>
                <li>
                <NavLink to="/" >Accueil</NavLink>
                </li>
                <li>
                <NavLink to="/about" >A propos</NavLink>
                </li>
            </ul>
        </nav>
       </header>
    )
}