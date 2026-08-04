import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "motion/react"


export default function Navigation() {

    const { scrollY } = useScroll()
    const navY = useTransform(scrollY,[0,100],[330,100])

    return (
    <motion.nav style={{ y:navY }} className="nav">
        <NavLink to="/About" className="nav-link">Qui suis-je</NavLink>
        <NavLink to="/Experience" className="nav-link">Experience</NavLink>
        <NavLink to="/Qualification" className="nav-link">Diplômes</NavLink>
        <NavLink to="/Projets" className="nav-link">Projets</NavLink>
    </motion.nav>

    )
}