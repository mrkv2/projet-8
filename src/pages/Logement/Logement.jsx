import { useParams } from 'react-router';
import './logement.css';
import Apparts from '../../data/logements.json';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Carrousel from '../../components/Carrousel/Carrousel';
import Collaps from '../../components/Collaps/Collaps';
import RatingStars from '../../components/rating/rating'


export default function Logement() {
    const { id } = useParams();
    const appart = Apparts.find(a => a.id === id);

    if (!appart) {
        return <h2>Logement non trouvé {id} contacter l'administrateur du site web pour plus d'information</h2>;
        
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