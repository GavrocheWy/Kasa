// Dependencies
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <main className="is-wrapped error-page">
            <p className="error-page--err">404</p>
            <h1 className='error-page--txt'>Oups! La page que vous demandez n'existe pas.</h1>
            <Link className='error-page--link' to="/">Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default NotFoundPage