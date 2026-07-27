import './Header.scss'
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react"

export default function Header() {
    const { scrollY } = useScroll()
    const imageSize = useTransform(scrollY,[0, 100],[150, 10])
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("scrollY :", latest)
    })

    return (
        <motion.header>
            <img src='src/images/profilpic.webp' alt="Photo de Matthieu Giardina"
                style={{
                    width: imageSize,
                    height: imageSize
                }}></img>
            <h1>Matthieu Giardina</h1>
            <h2>FrontEnd Developer</h2>
            <ul>
                <li><a target="_blank" rel="noopener noreferrer" href='https://x.com'><i class="fa-brands fa-x-twitter"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='mailto:matt@multimatt.fr'><i class="fa-regular fa-envelope"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='https://linkedin.com'><i class="fa-brands fa-square-linkedin"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='https://github.com/mattdusud'><i class="fa-brands fa-square-github"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='https://instagram.com'><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
            <h2>PACA - France</h2>
        </motion.header>
    )
}