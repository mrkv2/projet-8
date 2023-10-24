import { useState, useEffect } from 'react';
import flecheDroite from '../../assets/images/fleche-droite.svg';
import flecheGauche from '../../assets/images/fleche-gauche.svg';
import Apparts from '../../data/logements.json';
import './carrousel.css'

export default function Carrousel({ pictures }) {
    const [index, setIndex] = useState(0);
    // const [pictures, setPictures] = useState([]);

    // useEffect(() => {
    //     // Trouver l'appartement avec l'ID correspondant
    //     const appart = Apparts.find(a => a.id === appartId);
    //     // Mettre à jour le tableau de photos
    //     if (appart) {
    //         setPictures(appart.pictures);
    //     }
    // }, [appartId]);

    const handleLeftClick = () => {
        if (index === 0) {
            return setIndex(pictures.length - 1);
        }
        setIndex(index - 1);
    }

    const handleRightClick = () => {
        if (index === pictures.length - 1) {
            return setIndex(0);
        }
        setIndex(index + 1);
    }

    return (
        <div className="carrousel">
            <img className='fleche-gauche' src={flecheGauche} alt="fleche gauche" onClick={handleLeftClick} />
            <img className='main-img' src={pictures[index]} alt="image carrousel" />
            <img className='fleche-droite' src={flecheDroite} alt="fleche droite" onClick={handleRightClick} />
            <span>{index + 1} / {pictures.length} </span>
        </div>
    )
}