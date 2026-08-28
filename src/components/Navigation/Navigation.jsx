import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "motion/react"


export default function Navigation() {

    const { scrollY } = useScroll()
    const navY = useTransform(scrollY,[0,100],[330,100])

    return (
    <motion.nav style={{ y:navY }} className="nav">
        <NavLink to="/About" className="nav-link" name="lien-About">À propos</NavLink>
        <NavLink to="/Projets" className="nav-link" name="lien-Projets">Projets</NavLink>
        <NavLink to="/Qualification" className="nav-link" name="lien-Diplômes">Compétences</NavLink>
        <NavLink to="/Experience" className="nav-link" name="lien-Experience">Parcours</NavLink>
        <NavLink to="/Hobbies" className="nav-link" name="lien-Hobbies">Hobbies</NavLink>
        <NavLink to="/Contact" className="nav-link" name="lien-Contact">Contact</NavLink>

    </motion.nav>

    )
}