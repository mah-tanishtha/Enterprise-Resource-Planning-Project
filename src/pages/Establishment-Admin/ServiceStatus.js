import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import RightFooter from '../../components/RightFooter'
import '../Establishment-Admin/styles/ServiceStatus.css'
import { useNavigate } from 'react-router-dom'

function ServiceStatus() {
    const ServiceStatusShow = useNavigate()
    const ServiceStatusAdd = useNavigate()

    const HandleServiceShow = ()=>{
        ServiceStatusShow('')
    }

    const HandleServiceAdd = ()=>{
        ServiceStatusAdd('/addServiceStatus')
    }
    return (
        <div>
            <div className='d-flex'>
                <SideNavbar />
                <div className='RightContainer_ServiceStatus mx-4'>
                    <div className='CreateEmp_ServiceStatusPanel'>
                        <h6> Service Status Update :</h6>
                    </div>
                    <div className='serviceStatuscont'>
                        <form className='d-flex flex-row'>
                            <div className='d-flex flex-row Serviceinput'>
                                <label for="Eid" class="col-form-label">Enter Department :</label>
                                <input type='text' />
                            </div>

                            <div className="d-flex flex-row Serviceorginput">
                                <label for="Eid" className="col-form-label">Select Designation :</label>
                                <select className="form-select" aria-label="Default select example">

                                    <option selected>--Select--</option>
                                    <option value="Accountant">Accountant</option>
                                    <option value="Accounts Office">Accounts Office</option>
                                    <option value="Accounts Staff">Accounts Staff</option>
                                    <option value="Additional CEO">Additional CEO</option>
                                    <option value="Advisor">Advisor</option>

                                </select>
                            </div>
                            <div id='Servicestatusbtn'>
                                <button type='button' className='btn btn-success' onClick={HandleServiceShow}>Show</button>
                                <button type='button' className='btn btn-success' onClick={HandleServiceAdd}>Add</button>
                            </div>

                        </form>
                    </div>
                    <div className='emptypefooter'>
                        <RightFooter />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceStatus
