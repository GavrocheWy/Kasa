// Assets
import KasaLogo from '../../assets/logos/kasa-logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={KasaLogo} alt="logo de kasa" />
            </div>
            <p className="footer__credits">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer