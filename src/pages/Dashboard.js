import React from 'react'
import '../styles/Dashboard.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SideNavbar from '../components/SideNavbar';
import RightFooter from '../components/RightFooter';

function Dashboard() {



    return (
        <div>
            <div className='d-flex'>
               
                <SideNavbar/>
                <div className='RightContainer '>
                    <div className="toast show align-items-center text-bg-primary m-auto my-3 border-0 toastStyle " role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="d-flex ">
                            <div className="toast-body ">
                                Good Evening, ! Welcome to GMDA System . You have logged in as Establishment Admin role. Your last login was on 17 Aug 23, 11:31 PM (from IP Address: 122.180.183.173).

                            </div>
                            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                    </div>
                  
                    <RightFooter/>
                </div>
            </div>

        </div>

    )
}

export default Dashboard
