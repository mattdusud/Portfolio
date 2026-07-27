import './CardProjet.scss';
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "motion/react"
import projets from '/src/data/listeProjetsPortfolio.json'

export default function CardProjet({ id }) {

    const { scrollY } = useScroll()
    const yOpacity = useTransform(scrollY,[0,300],[1,0])

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("scrollY card :", latest)
    })

    const projet = projets.find(projet => projet.id === id)

    if (!projet) {
        return <Navigate to={"/Error"} />;
    }


    return (
        <motion.div key={id} className="card">
            <h2>{projet.name}</h2>
            <div>
                <h3>{projet.type}</h3>
                <p>{projet.date}</p>
            </div>
            <ul>
                {projet.technologies.map((technologie, index) => {
                    return (
                        <li key={index}>
                            {technologie}
                        </li>
                    )
                })}
            </ul>
            <div>
                <p>{projet.context}</p>
            </div>
            <a href={projet.github}>Github: {projet.github}</a>

        </motion.div>
    )
}