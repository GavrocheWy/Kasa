// Components
import LocationCard from './LocationsCard'
// Dependencies
import { useContext } from "react"
// Context
import LocationsContext from '../../context/LocationsContext'

const LocationsGrid = () => {

    const { locations } = useContext(LocationsContext)

    return (
        <section className='locations-grid'>
            {locations && locations.length ? locations.map(location => <LocationCard key={location.id} location={location} />) : <p>Aucune location</p>}
        </section>
    )
}

export default LocationsGrid