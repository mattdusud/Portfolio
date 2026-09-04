import './Header.scss'
import profilpic from '../../../public/images/profilpic.webp'
import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "motion/react"

export default function Header() {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {

        const handleResize = () => { setWidth(window.innerWidth) }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    let headerMove;
    let bloc2moveX1;
    let bloc2moveX2;
    let bloc2moveY1;
    let bloc2moveY2;

    switch (true) {
        case width < 540:
            headerMove = -150;
            bloc2moveX1 = 100;
            bloc2moveX2 = 240;
            bloc2moveY1 = -80;
            bloc2moveY2 = -120;
            break

        case width < 1175:
            headerMove = -250
            bloc2moveX1 = 400
            bloc2moveX2 = 400;
            bloc2moveY1 = -150;
            bloc2moveY2 = -150;
            break

        default:
            headerMove = -550
            bloc2moveX1 = 400
            bloc2moveX2 = 400;
            bloc2moveY1 = -150;
            bloc2moveY2 = -150;
    }

    const { scrollY } = useScroll()
    const headerX = useTransform(scrollY, [0, 100], [0, headerMove])
    const headerWidth = useTransform(scrollY, [0, 100], [150, 50])
    const imageSize = useTransform(scrollY, [0, 100], [150, 50])
    const imageX = useTransform(scrollY, [0, 100], [0, -500])
    const bloc1X = useTransform(scrollY, [0, 100], [0, 175])
    const bloc1Y = useTransform(scrollY, [0, 100], [0, -75], { clamp: true })
    const bloc2X1 = useTransform(scrollY, [0, 100], [0, bloc2moveX1])
    const bloc2X2 = useTransform(scrollY, [0, 100], [0, bloc2moveX2])
    const bloc2Y1 = useTransform(scrollY, [0, 100], [0, bloc2moveY1], { clamp: true })
    const bloc2Y2 = useTransform(scrollY, [0, 100], [0, bloc2moveY2], { clamp: true })

    return (
        <motion.header style={{ x: headerX }}>
            <motion.img src={profilpic} alt="Photo de Matthieu Giardina"
                style={{
                    width: imageSize,
                    height: imageSize
                }}
                fetchPriority="high"
            ></motion.img>
            <motion.h1 style={{ x: bloc1X, y: bloc1Y }}>Matthieu Giardina</motion.h1>
            <motion.h2 style={{ x: bloc1X, y: bloc1Y }}>Developpeur FrontEnd</motion.h2>
            <motion.ul style={{ x: bloc2X1, y: bloc2Y1 }}>
                <li><a target="_blank" rel="noopener noreferrer" href='mailto:matt@multimatt.fr' name="lien-email" aria-label="lien email"><i className="fa-regular fa-envelope" name="lien-email-ico" alt="isone email"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/matthieu-giardina-727259b4/' name="lien-linkedin" aria-label="lien linkedin"><i className="fa-brands fa-square-linkedin" name="lien-linkedin-ico" alt="icone Linkedin"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='https://github.com/mattdusud' name="lien-gitHub" aria-label="lien github"><i className="fa-brands fa-square-github" name="lien-gitHub-ico" alt="icone github"></i></a></li>
                {/* <li><a target="_blank" rel="noopener noreferrer" href='https://instagram.com'><i class="fa-brands fa-instagram"></i></a></li> */}
            </motion.ul>
            <motion.h2 style={{ x: bloc2X2, y: bloc2Y2 }}>PACA - France</motion.h2>
        </motion.header>
    )
}