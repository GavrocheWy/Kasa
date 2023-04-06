// Components
import LocationCarousel from '../components/Location/LocationCarousel'
// Dependencies
import { useEffect, useState, useContext } from "react"
import React from 'react'
import { useParams } from "react-router-dom"
import { displayEquipmentList, displayNotation } from './helpers/singleLocationPageHelpers'
// Context
import LocationsContext from '../context/LocationsContext'
import Collapsible from '../components/Misc/Collapsible'

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
        <main className="is-wrapped location">
            {location ?
                <React.Fragment>
                    <LocationCarousel images={location.pictures} />
                    <header className='location__head'>
                        <div className='location__head-locinfos'>
                            <h1 className='location__head-locinfos--name'>{location.title}</h1>
                            <p className='location__head-locinfos--location'>{location.location}</p>
                        </div>
                        <div className='location__head-hostinfos'>
                            <p className='location__head-hostinfos--name'>{location.host.name}</p>
                            <div className='location__head-hostinfos--profilpic'>
                                <img src={location.host.picture} alt={location.host.name} />
                            </div>
                        </div>
                    </header>
                    <div className='location__infos'>
                        <div className='location__infos-tags'>
                            {location.tags && location.tags.length ?
                                location.tags.map((tag, index) => <p key={`tag-${index}`}>{tag}</p>)
                                : <p>Aucun tag</p>
                            }
                        </div>
                        <div className='location__infos-notation'>
                            {location.rating && displayNotation(location.rating)}
                        </div>
                    </div>
                    <div className='location__collabsibles'>
                        <Collapsible openByDefault={true} title={'Description'} content={location.description} />
                        <Collapsible openByDefault={true} title={'Équipements'} content={displayEquipmentList(location.equipments)} />
                    </div>
                </React.Fragment>
                : <p>Chargement...</p>
            }

        </main>
    )
}

export default SingleLocationPage