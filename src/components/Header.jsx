import { NavLink } from 'react-router-dom'

function Header(props) {
    return (
        <header className='row justify-between align-center'>
            <h3>{props.title}</h3>
            <nav>
                <NavLink to="/">About</NavLink>
                <NavLink to="/portfolio">Portfolio </NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/resume">Resume</NavLink>


            </nav>
        </header>
    )

}

export default Header