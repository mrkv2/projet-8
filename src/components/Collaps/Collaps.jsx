import React, {useState} from 'react';
import arrow from '../../assets/images/fleche.svg'
import './Collaps.css';

function Collaps({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="collaps">
            <button onClick={handleToggle} className="collaps__toggle">
                {title}
                <span>
                <img src={arrow} alt="flèche" className={`arrow-icon ${isOpen ? 'open' : ''}` }  />
                </span>
            </button>
            {isOpen && (
                <div className="collaps__content">
                    {children}
                </div>
            )}
        </div>
    );
};
export default Collaps;