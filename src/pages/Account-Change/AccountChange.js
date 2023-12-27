import React from 'react'
import './AccountChange.css'
import RoleLogo from '../../assests/images/change-role-logo.jpeg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



function AccountChange() {
    const navigate = useNavigate();

    const PageSwitch = (para) => {
        navigate()
    }

    const LeaveNavigate = () => {
        navigate('/leaveDashboardPage')
    }

    const handleEstAdmin = () => {
        navigate("/dashboard")
    }

    const BackHomeBtn = () => {
        navigate(-1)
    }

    return (
        <div className='d-flex justify-content-center mt-3'>
            <div className=' d-flex flex-column  switch-role-container'>
                <div className='d-flex flex-row justify-content-between roleChangeHeading'>
                    <p className='mt-2'>Select Your Role Below :</p>
                    <p className='mt-2' onClick={BackHomeBtn} style={{ "cursor": "pointer" }}> <FontAwesomeIcon icon={faHouse} /></p>

                </div>


                <div className="RoleChangeGrid container text-center">

                    <div className="row " >

                        <div className="d-flex flex-column col mt-3 ">
                            <div className='align-self-start'>
                                <i class="bi bi-pin-angle-fill"></i>
                            </div>
                            <Link to={'/page-switch/Account-Admin'} className="Link-AccountCSS">
                                <div class="card cardCSS" >

                                    <img src={RoleLogo} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text cardText">Accounts Admin - GMDA</p>
                                    </div>
                                </div>
                            </Link>
                        </div>


                        <div className="col mt-3 d-flex flex-column" >
                            <div className='align-self-start'>
                                <i class="bi bi-pin-angle-fill"></i>
                            </div>
                            <Link to="/page-switch/Accounts-Approver" className="Link-AccountCSS">
                                <div class="card cardCSS" >
                                    <img src={RoleLogo} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text cardText">Accounts Approver - GMDA</p>
                                    </div>
                                </div>
                            </Link>

                        </div>



                        <div className="col mt-3 d-flex flex-column">
                            <div className='align-self-start'>
                                <i class="bi bi-pin-angle-fill"></i>
                            </div>
                            <Link to='/page-switch/Store-User' className="Link-AccountCSS">
                                <div class="card cardCSS">
                                    <img src={RoleLogo} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <p className="card-text cardText">Store User- GMDA </p>
                                    </div>
                                </div>
                            </Link>
                        </div>



                        <div className="col mt-3 d-flex flex-column" >
                            <div className='align-self-start'>
                                <i class="bi bi-pin-fill"></i>
                            </div>
                            <Link to="/page-switch/Establishment-Admin" className="Link-AccountCSS">
                                <div class="card cardCSS" >
                                    <img src={RoleLogo} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text cardText">Establishment Admin - GMDA </p>
                                    </div>
                                </div>
                            </Link>
                        </div>



                        <div className="col mt-3 d-flex flex-column ">
                            <div className='align-self-start'>
                                <i class="bi bi-pin-angle-fill"></i>
                            </div>
                            <Link to="/page-switch/Leave-Admin" className="Link-AccountCSS">
                                <div class="card cardCSS" >
                                    <img src={RoleLogo} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text cardText">Leave Admin - GMDA</p>
                                    </div>
                                </div>
                            </Link>
                        </div>



                        <div className="col mt-3 d-flex flex-column">
                            <div className='align-self-start'>
                                <i class="bi bi-pin-angle-fill"></i>
                            </div>
                            <Link to="/page-switch/Payroll-Admin" className="Link-AccountCSS">
                                <div className="card cardCSS" >
                                    <img src={RoleLogo} class="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text cardText">Payroll Admin - GMDA</p>
                                    </div>
                                </div>
                            </Link>
                        </div>



                        <div className="col mt-3 d-flex flex-column" >
                            <div className='align-self-start'>
                                <i class="bi bi-pin-angle-fill"></i>
                            </div>
                            <Link to="/page-switch/Setup" className="Link-AccountCSS">
                                <div className="card cardCSS" >
                                    <img src={RoleLogo} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <p className="card-text cardText">Setup - GMDA</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                    <div className="row mt-4">


                        <div className="col  mt-3  d-flex flex-column " >
                            <div className='align-self-start'>
                                <i class="bi bi-pin-angle-fill"></i>
                            </div>
                            <Link to="/page-switch/Year-End" className="Link-AccountCSS">
                                <div class="card cardCSS" >
                                    <img src={RoleLogo} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <p class="card-text cardText">Year End Role - GMDA</p>
                                    </div>
                                </div>
                            </Link>
                        </div>



                        <div className="col mt-3 d-flex flex-column" >
                            <div className='align-self-start'>
                                <i class="bi bi-pin-angle-fill"></i>
                            </div>
                            <Link className="Link-AccountCSS" to="/page-switch/Project-Admin">
                                <div class="card cardCSS" >
                                    <img src={RoleLogo} class="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <p className="card-text cardText">Projects Admin - GMDA</p>
                                    </div>
                                </div>
                            </Link>
                        </div>



                        <div className="col mt-3 d-flex flex-column" >
                            <div className='align-self-start'>
                                <i class="bi bi-pin-angle-fill"></i>
                            </div>
                            <Link to="/page-switch/Salary-Performance" className="Link-AccountCSS">
                                <div class="card cardCSS" >
                                    <img src={RoleLogo} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text cardText">Salary Performance - GMDA</p>
                                    </div>
                                </div>
                            </Link>
                        </div>




                        <div className="col mt-3 d-flex flex-column" >
                            <div className='align-self-start'>
                                <i class="bi bi-pin-angle-fill"></i>
                            </div>
                            <Link to="/page-switch/Purchase-Approvers" className="Link-AccountCSS">
                                <div class="card cardCSS" >
                                    <img src={RoleLogo} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <p className="card-text cardText">Purchase Approvers - GMDA</p>
                                    </div>
                                </div>
                            </Link>
                        </div>




                        <div className="col mt-3 d-flex flex-column" >
                            <div className='align-self-start'>
                                <i class="bi bi-pin-angle-fill"></i>
                            </div>
                            <Link to="/page-switch/Store-Purchase-Admin" className="Link-AccountCSS">
                                <div className="card cardCSS">
                                    <img src={RoleLogo} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <p className="card-text cardText">Store and Purchase Admin - GMDA</p>
                                    </div>
                                </div>
                            </Link>
                        </div>






                        <div className="col mt-3 d-flex flex-column" >
                            <div className='align-self-start'>
                                <i class="bi bi-pin-angle-fill"></i>
                            </div>
                            <Link to="/page-switch/Performance-Admin" className="Link-AccountCSS">
                                <div className="card cardCSS">
                                    <img src={RoleLogo} class="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text cardText">Performance Assessment Admin - GMDA </p>
                                    </div>
                                </div>
                            </Link>
                        </div>




                        <div className="col mt-3 " >
                            <Link to="/page-switch/Setup-GMDA" className="Link-AccountCSS">
                                <div className="card cardCSS" style={{ "visibility": "hidden" }} >
                                    <img src={RoleLogo} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <p className="card-text cardText">Setup - GMDA</p>
                                    </div>
                                </div>
                            </Link>
                        </div>



                    </div>


                </div>


            </div>
        </div>
    )
}

export default AccountChange
