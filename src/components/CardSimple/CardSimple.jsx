import './CardSimple.scss'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent, useInView } from "motion/react"


export default function CardSimple({titre, div1h3, div1p, li1, li2, li3, div2p}) {

    const cardRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: [
            "start end",
            "end start"
        ]
    })

// useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     console.log("ScrollYProgress :" + titre, latest);
// });

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.6, 0.55, 0.75],
        [0,0, 1, 1, 0]
    )

    return(

        <motion.article 
            ref={cardRef} 
            style={{opacity: opacity}}
            className="cardSimple" >
            <h2>{titre}</h2>
            <div>
                <h3>{div1h3}</h3>
                <p>{div1p}</p>
            </div>
            <ul>
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
            </ul>
            <div>
                <p>{div2p}</p>
            </div>
        </motion.article>
    )
}