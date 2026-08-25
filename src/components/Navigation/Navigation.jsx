import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "motion/react"


export default function Navigation() {

    const { scrollY } = useScroll()
    const navY = useTransform(scrollY,[0,100],[330,100])

    return (
    <motion.nav style={{ y:navY }} className="nav">
        <NavLink to="/About" className="nav-link" name="lien-About">Qui suis-je</NavLink>
        <NavLink to="/Experience" className="nav-link" name="lien-Experience">Parcours</NavLink>
        <NavLink to="/Qualification" className="nav-link" name="lien-Diplômes">Diplômes</NavLink>
        <NavLink to="/Projets" className="nav-link" name="lien-Projets">Projets</NavLink>
        <NavLink to="/Hobbies" className="nav-link" name="lien-Hobbies">Hobbies</NavLink>
    </motion.nav>

    )
}