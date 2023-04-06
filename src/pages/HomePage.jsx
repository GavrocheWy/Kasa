// Components
import Banner from "../components/Header/Banner"
import LocationsGrid from '../components/Locations/LocationsGrid'
// Assets
import HomepageBgImg from '../assets/photos/bg-img-home.jpg'

const HomePage = () => {
    return (
        <main className="is-wrapped">
            <Banner headerBgImg={HomepageBgImg} headerText={`Chez vous, partout et ailleurs`} />
            <LocationsGrid />
        </main>
    )
}

export default HomePage