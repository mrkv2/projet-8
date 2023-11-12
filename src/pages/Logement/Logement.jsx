import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './logement.scss';
import Apparts from '../../data/logements.json';
import Carrousel from '../../components/Carrousel/Carrousel';
import Collaps from '../../components/Collaps/Collaps';
import RatingStars from '../../components/rating/rating'


export default function Logement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const appart = Apparts.find(a => a.id === id);

    useEffect(() => {
        if (!appart) {
            navigate('/404', { replace: true });
        }
    }, [id, appart, navigate]);

    if (!appart) {
        return null; 
    }
    return (
        <div className='logement'>
            
            <Carrousel pictures={appart.pictures} />
            <h3>{appart.title}</h3>
            <p>{appart.location}</p>
            <div className="tags">
    {appart.tags.map(tag => (
        <span key={tag} className="tag">{tag}</span>
    ))}
    </div>
    <div className='host-rating-container'>
    <div className="host">
    <img src={appart.host.picture} alt={`Photo de ${appart.host.name}`} className="host-picture" />
    <span className="host-name">{appart.host.name}</span>
</div>
    <div className="rating">
    
    <RatingStars rating={appart.rating} />


</div>

</div>
    <div className="details">
    <Collaps title="Description" content={appart.description} />
    <Collaps title="Équipements" equipments={appart.equipments} /> 
</div>
    
            
        </div>
    )
}