import './Header.scss'
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "motion/react"

export default function Header() {
    const { scrollY } = useScroll()
    const headerX = useTransform(scrollY,[0,100],[0,-550])
    const headerWidth = useTransform(scrollY,[0, 100],[150, 50])
    //const headerY = useTransform(scrollY,[0, 100],[100, 100], { clamp: true })

    const imageSize = useTransform(scrollY,[0, 100],[150, 50])
    const imageX = useTransform(scrollY, [0,100],[0,-500])

    const bloc1X = useTransform(scrollY,[0,100],[0,175])
    const bloc1Y = useTransform(scrollY,[0,100],[0,-75], { clamp: true })
    const bloc2X = useTransform(scrollY, [0,100],[0,400])   
    const bloc2Y = useTransform(scrollY,[0,100],[0,-150], { clamp: true })
    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     console.log("scrollY header :", latest)
    // })

    return (
        <motion.header style={{ x: headerX }}>
            <motion.img src='src/images/profilpic.webp' alt="Photo de Matthieu Giardina"
                style={{
                    width: imageSize,
                    height: imageSize
                }}
                fetchPriority="high"
                ></motion.img>
            <motion.h1 style={{ x: bloc1X, y: bloc1Y}}>Matthieu Giardina</motion.h1>
            <motion.h2 style={{ x: bloc1X, y: bloc1Y}}>Developpeur FrontEnd</motion.h2>
            <motion.ul style={{ x: bloc2X, y: bloc2Y}}>
                <li><a target="_blank" rel="noopener noreferrer" href='mailto:matt@multimatt.fr'><i className="fa-regular fa-envelope"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/matthieu-giardina-727259b4/'><i className="fa-brands fa-square-linkedin"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='https://github.com/mattdusud'><i className="fa-brands fa-square-github"></i></a></li>
                {/* <li><a target="_blank" rel="noopener noreferrer" href='https://instagram.com'><i class="fa-brands fa-instagram"></i></a></li> */}
            </motion.ul>
            <motion.h2 style={{ x: bloc2X, y: bloc2Y}}>PACA - France</motion.h2>
        </motion.header>
    )
}