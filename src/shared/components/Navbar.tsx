import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const { logout } = useContext( AuthContext );

    const onLogout = () => {
        logout();
    }

    return (
        <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">CountryApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={ ( { isActive } ) => (`nav-link ${ isActive ? 'active' : '' }`) } to="by-region">By region</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={ ( { isActive } ) => (`nav-link ${ isActive ? 'active' : '' }`) } to="by-capital">By capital</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={ ( { isActive } ) => (`nav-link ${ isActive ? 'active' : '' }`) } to="by-name">By name</NavLink>
                    </li>

                    <li className="nav-item">
                        <button className="btn btn-dark" onClick={ onLogout }>Logout</button>
                    </li>

                </ul>
                </div>
            </div>
        </nav>
    )
}
