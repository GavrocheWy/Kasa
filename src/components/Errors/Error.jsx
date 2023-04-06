// Dependencies
import { Link } from 'react-router-dom'

const Error = ({ error = '404', message = 'Désolé, nous ne trouvons pas ce que vous cherchez.' }) => {
    return (
        <div className="error-page">
            <p className="error-page--err">{error}</p>
            <h1 className='error-page--txt'>{message}</h1>
            <Link className='error-page--link' to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error