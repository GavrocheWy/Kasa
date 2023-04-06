// Dependencies
import { Link } from 'react-router-dom'

const LocationCard = ({ location }) => {

    if (location) {
        return (
            <Link to={`/locations/${location.id}`} className="locations-card--link">
                <article className="locations-card" style={{ backgroundImage: `url(${location.cover})` }}>
                    <h2 className="locations-card--text">{location.title}</h2>
                </article>
            </Link>
        )
    } else {
        return (
            <article>Chargement...</article>
        )
    }

}

export default LocationCard