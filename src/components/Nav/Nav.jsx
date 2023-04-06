// Dependencies
import { NavLink } from 'react-router-dom'
// Assets
import KasaLogo from '../../assets/logos/kasa-logo.png'

const Nav = () => {
    return (
        <nav className='nav is-wrapped'>
            <div className="nav__logo">
                <img src={KasaLogo} alt="logo de kasa" />
            </div>
            <ul className='nav__list'>
                <li className='nav__list--item'>
                    <NavLink className='nav__list--item-link' to='/'>Accueil</NavLink>
                </li>
                <li className='nav__list--item'>
                    <NavLink className='nav__list--item-link' to='/a-propos'>À propos</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav