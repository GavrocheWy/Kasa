// Components
import { useState } from "react"
import HerringboneShape from "../Svgs/HerringboneShape"
import React from 'react'

const Slideshow = ({ images, locationTitle }) => {

    const [imageDisplayedIndex, setImageDisplayedIndex] = useState(0)

    const editImageDisplayIndex = (e, operator) => {

        e.preventDefault()
        const imagesCount = images?.length

        if (imagesCount) {

            if (operator === '+') {
                const nextIndex = imageDisplayedIndex + 1
                nextIndex >= images.length ? setImageDisplayedIndex(0) : setImageDisplayedIndex(nextIndex)
            }

            if (operator === '-') {
                const prevIndex = imageDisplayedIndex - 1
                prevIndex < 0 ? setImageDisplayedIndex(images.length - 1) : setImageDisplayedIndex(prevIndex)
            }

        }

    }

    return (
        <section className="carousel">
            <div className="carousel__wrapper">
                <img src={images && images.length && images[imageDisplayedIndex]} alt={`${locationTitle ? locationTitle : 'Inconnu'}`} />
            </div>
            {images.length > 1 &&
                <React.Fragment>
                    <div className="carousel_controls">
                        <button onClick={(e) => editImageDisplayIndex(e, '-')} className='carousel_controls--arrow'><HerringboneShape /></button>
                        <button onClick={(e) => editImageDisplayIndex(e, '+')} className='carousel_controls--arrow'><HerringboneShape /></button>
                    </div>
                    <p className="carrousel_pagination">{`${imageDisplayedIndex + 1}/${images.length}`}</p>
                </React.Fragment>
            }
        </section>
    )
}

export default Slideshow