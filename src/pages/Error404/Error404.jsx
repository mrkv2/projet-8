import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../assets/images/404.svg'
import './Error404.scss';

 



export default function Error404() {
    return (
        <>
        <div className="error-container">
            
        <img src={photo} alt="Error 404" />  
        </div>  
<div>
        <h1 className="titrepage">Oups! La page que vous demandez n' existe pas.</h1>
        <p className='returnhome'><Link to="/" className="homeLink">Retourner sur la page d'accueil</Link></p>
            </div>
       
            
       
       
        </>
    )
}