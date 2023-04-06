// Components
import LocationCarousel from '../components/Location/LocationCarousel'
// Dependencies
import { useEffect, useState, useContext } from "react"
import React from 'react'
import { useParams } from "react-router-dom"
// Context
import LocationsContext from '../context/LocationsContext'

const SingleLocationPage = () => {

    const { locations } = useContext(LocationsContext)
    const [location, setLocation] = useState()
    const { locationId } = useParams()

    // Set the location by url param
    useEffect(() => {

        if (locations && locationId) {
            const thisLocation = locations.find(loc => loc.id === locationId)

            if (!location || location === thisLocation) {
                thisLocation && setLocation(thisLocation)
            }
        }

    }, [locationId, locations, location])

    return (
        <main className="is-wrapped">
            {location ?
                <React.Fragment>
                    <LocationCarousel images={location.pictures} />
                    <header>
                        <div>
                            <h1>{location.title}</h1>
                            <p>{location.location}</p>
                        </div>
                        <div>
                            <p>{location.host.name}</p>
                            <img src={location.host.picture} alt={location.host.name} />
                        </div>
                    </header>
                    <div>
                        <div>
                            {location.tags && location.tags.length ?
                                location.tags.map((tag, index) => <p key={`tag-${index}`}>{tag}</p>)
                                : <p>Aucun tag</p>
                            }
                        </div>
                        <div>
                            Location notation
                        </div>
                    </div>
                </React.Fragment>
                : <p>Chargement...</p>
            }

        </main>
    )
}

export default SingleLocationPage