const LocationCard = ({ location }) => {

    if (location) {
        return (
            <article className="locations-card" style={{backgroundImage: `url(${location.cover})`}}>
                <h2 className="locations-card--text">{location.title}</h2>
            </article>
        )
    } else {
        return (
            <article>Chargement...</article>
        )
    }

}

export default LocationCard