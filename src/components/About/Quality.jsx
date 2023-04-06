// Dependencies
import { useState } from 'react'
// Components
import HerringboneShape from '../Svgs/HerringboneShape'

const Quality = ({ openByDefault, title, text }) => {

    const [isOpen, setIsOpen] = useState(openByDefault ? openByDefault : false)

    return (
        <article onClick={() => setIsOpen(!isOpen)} className={`faq-question ${isOpen ? 'is-open' : 'is-closed'}`}>
            <h2 className="faq-question--title">{title}
                <span className='faq-question--toggler'>
                    <HerringboneShape />
                </span>
            </h2>
            <p className="faq-question--text">{text}</p>
        </article>
    )
}

export default Quality