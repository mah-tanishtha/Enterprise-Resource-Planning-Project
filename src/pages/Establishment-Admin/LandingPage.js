import React from 'react'
import '../Establishment-Admin/styles/LandingPage.css'
import CRID from '../../assests/images/CRID.webp'
import HPPA from '../../assests/images/HPPAEdit.jpeg'
import hsac from '../../assests/images/hsac.jpeg'
import Button from '@mui/material/Button';
import Bubble from '../../components/Bubble'



function LandingPage() {


    return (
        <div>
            <div className='landing-navbar'>
                <h3>Citizen Resource information Department (CRID) </h3>
                <h6>Government Of Haryana</h6>
            </div>
            <div className='main-container'>
                <Bubble />
                <div className='portal-container'>
                    <div className='child-container'>
                        <div className='subchild-container'>
                            <img className='landing-logo' src={CRID} alt='' />
                            <h5>Citizen Resource Info. Department</h5>
                        </div>

                        <Button variant="contained" color='error'><a href='./' style={{textDecoration:'none',color:'white'}}>CRID Login</a></Button>
                    </div>
                    <div className='child-container '>
                        <div className='subchild-container'>
                            <img className='landing-logo' src={HPPA} alt='' />
                            <h5>Haryana Parivar Pehchan Authority</h5>
                        </div>
                        <Button variant="contained" color='error'>HPPA Login</Button>
                    </div>
                    <div className='child-container'>
                        <div className='subchild-container'>
                            <img className='landing-logo' src={hsac} alt='' />
                            <h5>Haryana Space Applications Centre</h5>
                        </div>
                        <Button variant="contained" color='error'>HARSAC Login</Button>
                    </div>
                    <div className='child-container'>
                        <div className='subchild-container'>
                            <img className='landing-logo' src={HPPA} alt='' />
                            <h5>Drone Ima. & Info. Services of Haryana</h5>
                        </div>
                        <Button variant="contained" color='error'>DRISHYA Login</Button>
                    </div>

                </div>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,320L48,282.7C96,245,192,171,288,160C384,149,480,203,576,218.7C672,235,768,213,864,213.3C960,213,1056,235,1152,245.3C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
            <div className='ERP-section'>

                <h1>Enterprise Resource Planing</h1>
                <p>ERP refers to a type of software that organizations use to manage day-to-day business activities
                    such as accounting, procurement, project management, risk management and supply chain operations.
                </p>
            </div>
            <div className='landing-footer'>
                <div className='panel-footer'>
                    <div className='panel-items'>
                        <h3>CRID</h3>
                        <p>Citizen Resource information Department</p>
                        <ul>
                            <li>(CRID) Government Of Haryana</li>
                            <li>Email-id:cird-hry@hry.gov.in</li>
                        </ul>
                    </div>
                    <div className='panel-items'>
                        <h3>HPPA</h3>
                        <p>Haryana Parivar Pehchan Authority</p>
                        <ul>
                            <li>(HPPA) Government Of Haryana</li>
                            <li>Plot No: 3,Sector 44, Gurgaon</li>
                            <li>Email-id:cird-hry@hry.gov.in</li>
                            <li>Helpline no: 11109293-111</li>
                        </ul>
                    </div>
                    <div className='panel-items'>
                        <h3>HARSAC</h3>
                        <p>Haryana Space Applications Centre</p>
                        <ul>
                            <li>(HPPA) Government Of Haryana</li>
                            <li>Email-id:cird-hry@hry.gov.in</li>
                        </ul>
                    </div>
                    <div className='panel-items'>
                        <h3>DRIISHYA</h3>
                        <p>Drone Ima & information Services of Haryana</p>
                        <ul>
                            <li>(HPPA) Government Of Haryana</li>
                            <li>Email-id:cird-hry@hry.gov.in</li>
                        </ul>
                    </div>
                </div>
                <div className='about-container'>
                    <h3>About US</h3>
                    <p>It has been decided to establish a local Comiittee(LC) for aboutround 250 - 300 houselholds.Each LC would consists of the following members.
                        (i) A Government official to be identified by the ADC-cum-District CRIO. (ii)Local Computer Operator registered with CRID for the local unit.
                        (iii) A college student preferably from the same area .(iv) A social worker from the same area .(V.) A volunteer from the same area to be nominated
                        by the Deputy Commissioner.
                    </p>
                </div>
                <div className='copyright-container'>
                    <p>Copyright 2019 ALL Rights Reserved
                        <br />Crid Haryana</p>
                </div>

            </div>
        </div>

    )
}

export default LandingPage
