import React from 'react'
import '../pages/Establishment-Admin/styles/Navbar.css'
import fmdaLogo from '../assests/images/fmda.logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img className='logo' src={fmdaLogo} alt="" width="100" height="30" class="d-inline-block align-text-top" />
                        <span className='navbarHeading'>Welcome to ERP Website !</span>
                    </Link>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
