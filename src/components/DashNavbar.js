import React  from 'react'
import fmdaLogo from '../assests/images/fmda.logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


function DashNavbar() {

    const handleLogout = ()=>{
        localStorage.clear();
        window.location.reload();
    }
    

    return (
        <div>
            <nav className="navbar bg-body-tertiary p-0">
                <div className="container-fluid ms-1">
                    <img className='logo d-inline-block align-text-top' src={fmdaLogo} alt="" width="100" height="30"  />

                    <div className="d-flex flex-row justify-content-end me-3 ">
                        
                        <div className=" px-4 py-2 border" onClick={handleLogout}><Link to="/" style={{textDecoration:'none',color:'#212529'}}><FontAwesomeIcon icon={faRightFromBracket} size="2xl" /></Link>
                        </div>
                        
                    </div>
                    
                </div>
            </nav>
             
        </div>
    )
}

export default DashNavbar
