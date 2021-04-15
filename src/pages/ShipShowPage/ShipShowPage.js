import './ShipShowPage.css';
import { Link } from 'react-router-dom';

const ShipShowPage = props => {
    const ship = props.starships[props.match.params.id];

    return (
        <div className='ship-details'>
            <div>
                <p className="title">Manufacturer:</p>
                <p className='description'>{ship.manufacturer}</p>
            </div>
            <div>
                <p className="title">Starship Class:</p>
                <p className="description">{ship.starship_class}</p>                    
            </div>
            <div>
                <p className="title">Hyperdrive Rating:</p>
                <p className="description">{ship.hyperdrive_rating}</p>                    
            </div>
            <div>
                <p className="title">Max Atmosphering Speed:</p>
                <p className="description">{ship.max_atmosphering_speed}</p>                    
            </div>
             <div>
                <p className="title">Consumables:</p>
                <p className="description">{ship.consumables}</p>                    
            </div>
            <Link to='/' className='link'>Back to All Starships</Link>
        </div>
    );
}

export default ShipShowPage;