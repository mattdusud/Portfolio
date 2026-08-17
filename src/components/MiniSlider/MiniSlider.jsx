import './MiniSlider.scss'
import { useEffect, useRef, useState } from "react"
import projets from '/src/data/listeProjetsPortfolio.json'
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "motion/react"
import arrowLeft from '../../assets/arrow_left.svg'
import arrowRight from '../../assets/arrow_right.svg'


export default function MiniSlider({images}) {

    const { scrollY } = useScroll()
    const imagesCount = images.length
    const [slideNumber, setSlideNumber] = useState(0);

   

    return(
        
        <div className="carrousel">
            <div className="carrousel-images">
                <img fetchpriority="high" src={images[slideNumber]} alt="Image de projet" />
            </div>
            {images.length > 1 &&
                <div className="carrousel-controls">
                    <button className="carrousel-arrow" onClick={() => setSlideNumber(slideNumber === 0 ? images.length - 1 : slideNumber - 1)}>
                        <img src={arrowLeft} alt="Flèche gauche" />
                    </button>
                    <button className="carrousel-arrow" onClick={() => setSlideNumber(slideNumber === images.length - 1 ? 0 : slideNumber + 1)}>
                        <img src={arrowRight} alt="Flèche droite" />
                    </button>
                </div>
            }
            {images.length > 1 &&
                <div className="carrousel-counter">
                    {slideNumber + 1} / {images.length}
                </div>
            }
        </div>
        
    );
}