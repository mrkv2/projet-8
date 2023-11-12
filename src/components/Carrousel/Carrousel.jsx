import { useState, useEffect } from 'react';
import flecheDroite from '../../assets/images/fleche-droite.svg';
import flecheGauche from '../../assets/images/fleche-gauche.svg';
import Apparts from '../../data/logements.json';
import './carrousel.scss'

export default function Carrousel({ pictures }) {
    const [index, setIndex] = useState(0);
    

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
            {pictures.length > 1 && (
                <>
                    <img className='fleche-gauche' src={flecheGauche} alt="flèche gauche" onClick={handleLeftClick} />
                    <img className='fleche-droite' src={flecheDroite} alt="flèche droite" onClick={handleRightClick} />
                </>
            )}
            <img className='main-img' src={pictures[index]} alt="image du carrousel" />
            {pictures.length > 1 && (
                <span>{index + 1} / {pictures.length}</span>
            )}
        </div>
    )
}