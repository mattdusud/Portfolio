import './CardProjet.scss'
import { motion, useScroll, useMotionValue, useMotionValueEvent, useTransform } from 'motion/react'
import { useRef, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import projets from '/src/data/listeProjetsPortfolio.json'
import MiniSlider from '../MiniSlider/MiniSlider'

export default function CardProjet({ id, pathRef }) {

    const cardRef = useRef(null)
    const articleRef = useRef(null)

    const projet = projets.find(projet => projet.id === id)

    if (!projet) {
        return <Navigate to="/Error" />
    }

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: [
            "start end",
            "end start"
        ]
    })

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
    const pointerEvents = useTransform(opacity, value => value > 0.1 ? "auto" : "none")

    //////////////////////////////////////////////////////
    // fonction de position pour utilisation si resize  //
    //////////////////////////////////////////////////////
    const updatePosition = (progress) => {

        const path = pathRef.current;
        const svg = path.ownerSVGElement;
        const pathLength = path.getTotalLength();
        const rect = svg.getBoundingClientRect();
        const scaleX = rect.width / 1000;
        const scaleY = rect.height / 1000;

        if (progress < 0.2) {

            const localProgress = progress / 0.2

            const startProgress = 0.25;
            const targetProgress = 0.5;

            const pathProgress = startProgress + (targetProgress - startProgress) * localProgress;

            const point = path.getPointAtLength(pathProgress * pathLength)

            x.set(point.x * scaleX)
            y.set(point.y * scaleY)

            return
        }

        if (progress < 0.8) {

            const localProgress = (progress - 0.2) / 0.6
            const pathProgress = 0.5 + localProgress * 0.5
            const distance = pathProgress * pathLength
            const point = path.getPointAtLength(distance)
            x.set(point.x * scaleX)
            y.set(point.y * scaleY)
            return
        }

        const localProgress = (progress - 0.8) / 0.2
        const end = path.getPointAtLength(pathLength)
        const beforeEnd = path.getPointAtLength(pathLength - 50)

        const dx = end.x - beforeEnd.x
        const dy = end.y - beforeEnd.y

        const exitDistance = localProgress * 1000
        x.set((end.x + dx * exitDistance / 50) * scaleX)
        y.set((end.y + dy * exitDistance / 50) * scaleY)
    }

    useMotionValueEvent(scrollYProgress, "change", updatePosition)

    useEffect(() => {

        const handleResize = () => {
            updatePosition(scrollYProgress.get())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    const xOffset = useTransform(x, value => {
        if (projet.id === 1) {
            const cardWidth = articleRef.current?.getBoundingClientRect().width ?? 0
            return value - cardWidth / 2
        }

        if (projet.id === 6) {
            return value + 80
        }

        return value
    }
    )

    const yOffset = useTransform(
        y,
        value => {

            if (projet.id !== 1) {
                return value
            }

            if (window.innerWidth <= 600) {
                return value - 120
            }

            if (window.innerWidth <= 700) {
                return value - 100
            }

            if (window.innerWidth <= 1280) {
                return value - 120
            }

            if (window.innerWidth <= 1920) {
                return value - 150
            }

            return value
        }
    )

    return (

        <div ref={cardRef} className="card-trigger">
            <motion.article
                ref={articleRef}
                id={`projet${id}`}
                className="card"
                style={{ x: xOffset, y: yOffset, opacity, pointerEvents }}>

                <h2>{projet.name}</h2>

                <div>
                    <h3>{projet.type}</h3>
                    <p>{projet.date}</p>
                </div>

                <ul>Stack:
                    {projet.technologies.map((technologie, index) => (
                        <li key={index}>{technologie}</li>
                    )
                    )}
                </ul>

                <h3>Compétences travaillées</h3>
                <ul>
                    {projet.competences.map((competence, index) => (
                        <li key={index + 100}>{competence}</li>
                    )
                    )}
                </ul>

                <div>
                    <p><span>Objectifs:</span> {projet.context}</p>
                    <p><span>Améliorations:</span> {projet.toImprove}</p>
                    <p><span>Résultat:</span> {projet.resultat}</p>
                </div>


                <a target="_blank" rel="noopener noreferrer" href={projet.github}>
                    <i className="fa-brands fa-square-github" name="lien-gitHub"></i>Github: {projet.github}
                </a>

                {projet.images.length !== 0 ? <div><MiniSlider images={projet.images} /></div> : <div>Pas de photos</div>}

            </motion.article>

        </div>
    )
}