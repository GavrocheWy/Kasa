// Components
import Banner from '../components/Header/Banner'
import QualitySet from '../components/About/QualitySet'
// Assets
import AboutBgImg from '../assets/photos/bg-img-about.jpg'

const AboutPage = () => {
    return (
        <main className="is-wrapped">
            <Banner headerBgImg={AboutBgImg} />
            <QualitySet />
        </main>
    )
}

export default AboutPage