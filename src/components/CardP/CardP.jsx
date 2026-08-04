import './CardP.scss'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent, useInView } from "motion/react"


export default function CardP({texte}) {

    const cardRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: [
            "start end",
            "end start"
        ]
    })

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.7, 0.71, 0.75],
        [0, 1, 1, 0]
    )

    return(

        <motion.p
            ref={cardRef} 
            style={{opacity: opacity}}
            className="cardP" >
            {texte}
        </motion.p>
    )
}