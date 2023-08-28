import React from 'react'
import '../styles/Create_Employee.css'
import SideNavbar from '../components/SideNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-regular-svg-icons'
import RightFooter from '../components/RightFooter'

function Create_Employee() {
    return (
        <div>
            <div className='d-flex'>
                <SideNavbar />
                <div className='RightContainer_employee mx-4'>
                    <div className='CreateEmp_Panel'>
                        <h6>Enter Employee Data here :</h6>
                    </div>
                    <div className='d-flex employee_container mt-3'>
                        <div className='imgDiv'>
                            <img src='#' alt="" />
                            <FontAwesomeIcon icon={faFileImage} />
                            <hr className='mt-0' />
                        </div>
                        <div className='CreateForm_employee'>
                            <div class="row ps-2 g-4 align-items-center">
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">Salutations</label>
                                    <select class="form-select" aria-label="Default select example" className="form-control">
                                        <option selected>--Select--</option>
                                        <option value="1">Prof.</option>
                                        <option value="2">Mr.</option>
                                        <option value="3">Mrs.</option>
                                        <option value="2">Dr.</option>
                                        <option value="3">Ms.</option>
                                        <option value="2">Cdr.</option>
                                        <option value="3">Col.</option>

                                    </select>
                                </div>

                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">*First Name</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>


                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">Middle Name</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>


                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">Last Name</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>


                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">Gender</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>--Select--</option>
                                        <option value="1">Female</option>
                                        <option value="2">Male</option>
                                        <option value="3">Other</option>
                                    </select>
                                </div>


                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">*Adhaar Number</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">Id Card Number</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">*Email Address</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">*Organization</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">*Department</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>--Select--</option>
                                        <option value="1">DPT012</option>
                                        <option value="1">DPT013</option>
                                        <option value="1">DPT014</option>
                                        <option value="1">DPT015</option>
                                        <option value="1">DPT016</option>
                                        <option value="1">DPT017</option>
                                        <option value="1">DPT018</option>
                                        <option value="1">DPT019</option>
                                        <option value="1">DPT0121</option>
                                        <option value="1">DPT0122</option>

                                    </select>
                                </div>
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">Designation</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">Aditional Responsibilty</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">Staff Type</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">Staff Grade</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">Office Phone Number</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">*Department</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>--Select--</option>
                                        <option value="1">Deputational</option>
                                        <option value="1">Contract</option>
                                        <option value="1">Regular</option>
                                        <option value="1">Hartron</option>
                                        <option value="1">Manpower Outsource</option>
                                        <option value="1">Contractual-GIS</option>
                                        <option value="1">HKRNL</option>

                                    </select>
                                </div>
                                <div class="col-6">
                                    <label for="inputPassword6" class="col-form-label">Past Organization Department</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>--Select--</option>
                                        <option value="1">Town and Country Planning</option>
                                        <option value="1">HARSAC</option>
                                        <option value="1">HSVP</option>
                                        <option value="1">DRDA</option>
                                        <option value="1">PWD</option>
                                        <option value="1">Haryana Police Deputation</option>
                                        <option value="1">Irrigation and Water Resource Department</option>
                                        <option value="1">PHED</option>
                                        <option value="1">HIPA</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">HKRNL Sl No</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-3">
                                    <label for="inputPassword6" class="col-form-label">
                                        HKRNL Employee ID</label>
                                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                               < div class="mt-5">
                               <button className=' col-3 btn btn-primary' type='button'>Save</button>
                                </div>
                               
                                
                                    
                                
                            </div>
                           
                        </div>
                        
                    </div>
                    <RightFooter/>
                </div>

            </div>
        </div>

    )
}

export default Create_Employee
