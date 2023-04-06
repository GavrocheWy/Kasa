// Dependencies
import { useState } from 'react'
// Components
import HerringboneShape from '../Svgs/HerringboneShape'

const Collapsible = ({ openByDefault, title, content }) => {

    const [isOpen, setIsOpen] = useState(openByDefault ? openByDefault : false)

    return (
        <article onClick={() => setIsOpen(!isOpen)} className={`collabsible ${isOpen ? 'is-open' : 'is-closed'}`}>
            <h2 className="collabsible--title">{title}<button className='collabsible--toggler'><HerringboneShape /></button></h2>
            <p className="collabsible--content">{content}</p>
        </article>
    )
}

export default Collapsible