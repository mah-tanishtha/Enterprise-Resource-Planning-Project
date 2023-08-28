import React from 'react'
import gmdaLogo from '../assests/images/gmdaLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faImage, faRightFromBracket,  faBars} from '@fortawesome/free-solid-svg-icons';

function DashNavbar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary p-0">
                <div className="container-fluid ms-1">
                    <img className='logo' src={gmdaLogo} alt="" width="150" height="30" class="d-inline-block align-text-top" />

                    <div className="d-flex flex-row justify-content-end me-3 ">
                        <div className="px-4 py-2 border border-start-0"><FontAwesomeIcon icon={faImage} size="2xl" /></div>
                        <div className="px-4 py-2 border"><FontAwesomeIcon icon={faIdCard} size="2xl" /></div>
                        <div className="px-4 py-2 border"><FontAwesomeIcon icon={faRightFromBracket} size="2xl" /></div>
                        <div className="px-4 py-2 border"><FontAwesomeIcon icon={faBars} size="2xl" /></div>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default DashNavbar
