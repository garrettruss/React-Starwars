
import StarShipCard from '../../components/StarShipCard/StarShipCard';

const ShipIndexPage = props => {
    return (
        <div className="ship-section">
        {props.starships.map((starship, idx) => (
          <StarShipCard
            ship={starship}
            idx={idx}
            key={idx}
          />
        ))}
      </div>
    );
}

export default ShipIndexPage;