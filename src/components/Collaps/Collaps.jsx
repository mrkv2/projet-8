import React, { useState, useRef } from 'react';
import arrow from '../../assets/images/fleche.svg'
import './Collaps.css';

function Collaps({ title, content = null, equipments = null }) {
    const [isOpen, setIsOpen] = useState(false);
    const collapsRef = useRef(null);
    

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen && collapsRef.current) {
            const topPosition = collapsRef.current.getBoundingClientRect().top + window.pageYOffset - 50 - 100;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };


    return (
        <div  ref={collapsRef} className="collaps">
            <button onClick={handleToggle} className="collaps__toggle">
                {title}
                <span>
                    <img src={arrow} alt="flèche" className={`arrow-icon ${isOpen ? 'open' : ''}`} />
                </span>
            </button>
            {isOpen && content && (
                <div className="collaps__content">
                    {content}
                </div>
            )}

            {isOpen && equipments && (
                <ul className="collaps__content">
                    {equipments.map(equipment => (
                        <li key={equipment}>{equipment}</li>
                    ))}
                </ul>
            )}


        </div>
    );
};
export default Collaps;