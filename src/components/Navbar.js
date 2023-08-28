import React from 'react'
import '../styles/Navbar.css'
import gmdaLogo from '../assests/images/gmdaLogo.png'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className='logo' src={gmdaLogo} alt="" width="150" height="30" class="d-inline-block align-text-top" />
                        <span className='navbarHeading'>Welcome to ERP Website !</span>
                    </a>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
