import './ModalePhoto.scss'
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import arrowLeft from '../../assets/arrow_left.svg'
import arrowRight from '../../assets/arrow_right.svg'

export default function ModalePhoto({ altTxt, onClose, images, slide }) {

    const imagesCount = images.length
    const [slideNumber, setSlideNumber] = useState(0);
    useEffect( () => {
        setSlideNumber(slide);
    },[slide])

    return createPortal(
        <><div className="modale" onClick={onClose} >
            <div className="modale--close" onClick={onClose}>x</div>
            <div className='modale--carrousel'>
                <img className="modale--carrousel--photo" src={images[slideNumber]} fetchPriority="high" alt={altTxt} />
            </div>
        </div>
            {images.length > 1 &&
                <div className="modale--carrousel--controls">
                    <button className="carrousel-arrow" onClick={() => setSlideNumber(slideNumber === 0 ? images.length - 1 : slideNumber - 1)}>
                        <img src={arrowLeft} alt="Flèche gauche" />
                    </button>
                    <button className="carrousel-arrow" onClick={() => setSlideNumber(slideNumber === images.length - 1 ? 0 : slideNumber + 1)}>
                        <img src={arrowRight} alt="Flèche droite" />
                    </button>
                </div>
            }
            {images.length > 1 &&
                <div className="modale--carrousel--counter">
                    {slideNumber + 1} / {images.length}
                </div>
            }

        </>,
        document.body
    )
}