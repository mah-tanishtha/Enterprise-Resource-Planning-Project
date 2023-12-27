import React from 'react'
import BasicCard from './EmployeeRegisterDashboard'
import SideNavbar from '../../../components/SideNavbar'
import './styles/EmployeeRegisterCss.css'
import barchart1 from '../../../assests/images/bar-chart1.png'
import barchart2 from '../../../assests/images/bar-chart2.png'
import barchart3 from '../../../assests/images/bar-chart3.png'
import IconLabelButtons from './AddEmployeeButton'
import EmployeeRegisterModal from './EmployeeRegisterModal'
import RightFooter from '../../../components/RightFooter'

function EmployeeRegister() {
    return (
        <div>
            <div className='d-flex'>
                <SideNavbar />
                <div className='RightContainer_employee mx-4 mt-4'>
                    <div className='d-flex flex-row '>
                        <div className='mx-4'>
                            <BasicCard text="Site Visits" chart={barchart1} userName="total employees"/>
                        </div>
                        <div className='mx-4'>
                            <BasicCard text="Active Users" chart={barchart2} userName="active users"/>
                        </div>

                        <div className='mx-4'>
                            <BasicCard text="Inactive Users" chart={barchart3} userName="inactive users"/>
                        </div>

                    </div>
                    <div className='float-end mt-4 me-5'>
                        {/* <!-- Vertically centered modal --> */}
                        {/* <div class="modal-dialog modal-dialog-centered">
                            
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <IconLabelButtons/>
                            </button>

                            
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <EmployeeRegisterModal />
                    </div>
                    <div className='mt-4'>
                    <RightFooter />
                    </div>
                    
                </div>
                
            </div>

        </div>

    )
}

export default EmployeeRegister
