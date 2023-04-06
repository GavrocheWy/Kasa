import { createContext, useState, useEffect } from "react";

const LocationsContext = createContext({})

export const LocationsProvider = ({ children }) => {

    const [locations, setLocations] = useState([])

    useEffect(() => {

        const BASE_URL = 'http://localhost:3000'
        const url = `${BASE_URL}/datas/logements.json`

        async function fetchLocations() {
            try {
                const res = await fetch(url, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const locationsData = await res.json()
                setLocations(locationsData)
            }
            catch (err) {
                console.log(err)
            }
        }

        fetchLocations()

    }, [])

    return (
        <LocationsContext.Provider value={{ locations, setLocations }}>
            {children}
        </LocationsContext.Provider>
    )

}

export default LocationsContext;