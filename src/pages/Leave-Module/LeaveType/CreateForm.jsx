import React, { useState } from 'react'
// import '../Establishment-Admin/styles/Create_Employee.css'
// // import SideNavbar from '../components/SideNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-regular-svg-icons'
// import RightFooter from '../components/RightFooter'
import { TextField, MenuItem } from '@mui/material'
import "../LeaveType/CreateFrom.css"

function CreateForm() {

    const [LeaveFormData, setLeaveFormData] = useState({
        leaveCode: '',
        leavename: '',
        description: '',
    })

    const [errors, setErrors] = useState({});
console.log(LeaveFormData)

    const handleInputChangeLeaveData = (e) => {
        const { name, value } = e.target;
        setLeaveFormData((prevData) => (
            {
                ...prevData, [name]: value
            }
        ))
    }

    function validateForm(FormObjectData) {
        const errors = {};

        if (!FormObjectData.leaveCode) {
            errors.leaveCode= 'Field is required';
        }

        if (!FormObjectData.leavename) {
            errors.leavename = 'Field  is required';
        }
        
        if (!FormObjectData.description) {
            errors.description = 'Field is required';
        }

       
        return errors;
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        const FormObjectData = LeaveFormData;
        console.log(FormObjectData,"")
        const validationErrors = validateForm(FormObjectData);
        if (Object.keys(validationErrors).length === 0) {
            // Submit the form data to the server or perform further actions.
            console.log('Form data submitted:', FormObjectData);
        } else {
            setErrors(validationErrors);
        }
    }


    return (
        <div>
            <div className='d-flex'>
                {/* <SideNavbar /> */}
                <div className='FormRightContainer_employee '>
                    <div className='CreateEmp_Panel'>
                        <h6>Enter leave type :</h6>
                    </div>
                    <div className='leave_container mt-3'>

                        <div className='CreateForm_employee'>

                            <div className="row ps-2 mt-2 g-4 align-items-center">
                                <div className='container'>
                                <div className='row '>
                                <div className="col">
                                    <TextField
                                        id="leaveCode"
                                    
                                        variant="outlined"
                                        label="Leave Code"
                                        fullWidth
                                        value={LeaveFormData.leaveCode}
                                        name='leaveCode'
                                        onChange={handleInputChangeLeaveData}
                                        error={!!errors.leaveCode}
                                        helperText={errors.leaveCode || ""}
                                    >
                                      
                                    </TextField>

                                </div>

                                <div className="col">
                                    <TextField
                                        id="leavename"
                                        label="Leave Type Name"
                                        fullWidth
                                        value={LeaveFormData.leavename}
                                        name="leavename"
                                        variant="outlined"
                                        onChange={handleInputChangeLeaveData}
                                        error={!!errors.leavename}
                                        helperText={errors.leavename || ''}
                                    />
                                </div>
                                </div>

                                </div>
                                

                                <div class="col">
                                    <TextField
                                        id="description"
                                        label="Description"
                                        fullWidth
                                        value={LeaveFormData.mname}
                                        name="description"
                                        variant="outlined"
                                        onChange={handleInputChangeLeaveData}
                                        error={!!errors.description}
                                        helperText={errors.description || ''}
                                    />

                                </div>
                               

                                
                                < div className="row justify-content-md-center mt-5">
                                    <button className=' col-4 btn btn-primary' type='button' onClick={handleSubmit}>Save</button>
                                </div>
                            </div>
                            {/* </Box> */}

                        </div>

                    </div>
                    
                </div>

            </div>
        </div>

    )
}

export default CreateForm
