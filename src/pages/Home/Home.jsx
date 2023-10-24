
import photo from '../../assets/images/Mask_Group.png'
import Thumb from '../../components/Thumb/Thumb';
import Apparts from '../../data/logements.json'
import { useState } from 'react';
import './home.css';
import Carrousel from '../../components/Carrousel/Carrousel';


export default function Home() {
    const [selectedAppart, setSelectedAppart] = useState(null);

    const handleThumbClick = (appartId) => {
        setSelectedAppart(appartId);
    }

    return (
        <div className='home-container'>
            <img src={photo} alt="lprezogo" className='home-image' />
            <h1 className='home-title'>Chez vous, partout et ailleurs</h1>
            <div className="thumbnails">
                {Apparts.map(appart => (
                    <Thumb 
                        appart={appart} 
                        key={appart.id}
                        onClick={() => handleThumbClick(appart.id)} 
                    />
                ))}
            </div>
            {selectedAppart && <Carrousel appartId={selectedAppart} />} 
        </div>
    )
}
