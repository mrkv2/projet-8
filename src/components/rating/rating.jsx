import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './rating.scss';

function RatingStars({ rating }) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <div className="stars">
            {Array(fullStars).fill().map((_, i) => 
                <FontAwesomeIcon key={i} icon={['fas', 'star']} className="star active" />
            )}
            {Array(emptyStars).fill().map((_, i) => 
                <FontAwesomeIcon key={i} icon={['fas', 'star']} className="star inactive" />
            )}
        </div>
    );
}
export default RatingStars;