
import photo from '../../assets/images/propos.svg';
import Collaps from '../../components/Collaps/Collaps';
import './About.scss';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>


export default function About() {

    return (
        <div className='pageordre'>
            <img src={photo} alt="imgpropos" className='propos-image' />
        <div className="collapses">

            <Collaps title="Flabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformesaux logements, et toutes les informations sont régulierement vérifiées par nos équipes." />

            <Collaps title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." />


            <Collaps title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." />

            <Collaps title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nouos organisons également des ateliers sur la sécurité domestique pour nos hotes." />
        </div>


        </div>
    );
}