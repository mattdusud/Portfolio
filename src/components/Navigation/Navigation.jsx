import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
    return (
    <nav className="nav">
        <NavLink to="/About" className="nav-link">About</NavLink>
        <NavLink to="/Experience" className="nav-link">Experience</NavLink>
        <NavLink to="/Qualification" className="nav-link">Qualification</NavLink>
        <NavLink to="/Projets" className="nav-link">Projets</NavLink>
    </nav>

    )
}