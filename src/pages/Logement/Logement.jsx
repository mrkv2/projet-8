import { useParams } from 'react-router';
import './logement.css';
import Apparts from '../../data/logements.json';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Carrousel from '../../components/Carrousel/Carrousel';

export default function Logement() {
    const { id } = useParams();
    const appart = Apparts.find(a => a.id === id);

    if (!appart) {
        return <h2>Logement non trouvé</h2>;
    }

    return (
        <div className='logement'>
            <h2>page logement {id} </h2>
            <Carrousel pictures={appart.pictures} />
        </div>
    )
}