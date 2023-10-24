
import photo from '../../assets/images/propos.svg';
import Collaps from '../../components/Collaps/Collaps';
import './About.css';


export default function About() {

    return (
        <>
            <div className='pageordre'> 
                <img src={photo} alt="imgpropos" className='propos-image' />             
                            
                <Collaps title="Flabilité">
                <div className="section-title">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformesaux logements, et toutes les informations sont régulierement vérifiées par nos équipes.</p>

                  
                </div>
            </Collaps>
            <Collaps title="Respect">
                <div className="section-title">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p>
                  
                </div>
            </Collaps>
            <Collaps title="Service">
                <div className="section-title">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p>
                  
                </div>
            </Collaps>
            <Collaps title="Sécurité">
                <div className="section-title">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nouos organisons également des ateliers sur la sécurité domestique pour nos hotes.</p>
                  
                </div>
            </Collaps>
        </div>
        </>
    );
}