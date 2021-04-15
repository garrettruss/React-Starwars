import './StarShipCard.css';
import { Link } from 'react-router-dom';

const StarShipCard = props => (
    <div className='ship'>
        {props.ship.name}      
        <Link to={`/${props.idx}`} className='ship-link' >Ship Details</Link>
    </div>
);

export default StarShipCard;