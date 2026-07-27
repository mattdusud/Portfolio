import './Projets.scss'
import CardProjet from '../../components/CardProjet/CardProjet'
import projets from '/src/data/listeProjetsPortfolio.json'
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "motion/react"

export default function Projets() {

    //const { scrollY } = useScroll()
    //const yOpacity = useTransform(scrollY,[0,300],[1,0])

    return(
        <motion.section>
        {projets.map((projet) => (
                <CardProjet key={projet.id} id={projet.id}/>
            ))}
        </motion.section>
    )
}