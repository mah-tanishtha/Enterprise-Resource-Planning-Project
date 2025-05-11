import React, { useState } from 'react'

import SideNavbar from '../../../components/SideNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-regular-svg-icons'
import RightFooter from '../../../components/RightFooter'
import { TextField, MenuItem } from '@mui/material'

function UserFormDetail(){ 

    const [EmployeeFormData, setEmployeeFormData] = useState({
        salutation: '',
        fname: '',
        mname: '',
        lname: '',
        gender: '',
        adharno: '',
        idcardno: '',
        email: '',
        designation: '',
        additionalResp: '',
        stafftype: '',
        staffgrade: '',
        officeno: '',
        dept: '',
        hkrnlno: '',
        hkrnlid: '',
        organization: '',
        pastOrganization: ''
    })

    const [errors, setErrors] = useState({});

    const salutations = [
        {
            value: 'Prof',
            label: 'Prof',
        },
        {
            value: 'Mr',
            label: 'Mr',
        },
        {
            value: 'Mrs',
            label: 'Mrs',
        },
        {
            value: 'Ms',
            label: 'Ms',
        },
    ];

    const gender = [
        {
            value: 'Female',
            label: 'Female'
        },
        {
            value: "Male",
            label: "Male"
        }
    ];

    const department = [
        {
            value: 'Dp101',
            label: 'Dp101'
        },
        {
            value: "DP102",
            label: "Dp102"
        },
        {
            value: "DP103",
            label: "Dp103"
        }

    ];

    const pastOrgDept = [
        {
            value: "Hartron",
            label: "Hartron"
        },
        {
            value: "Railtel",
            label: "Railtel"
        }
    ]


    const handleInputChangeEmployeeData = (e) => {
        const { name, value } = e.target;
        setEmployeeFormData((prevData) => (
            {
                ...prevData, [name]: value
            }
        ))
    }

    function validateForm(FormObjectData) {
        const errors = {};

        if (!FormObjectData.salutation) {
            errors.salutation = 'Field is required';
        }

        if (!FormObjectData.fname) {
            errors.fname = 'Field  is required';
        }else if(!isValidfName(FormObjectData.fname)){
            errors.fname = 'Incorrect Name';
        }
        
        if (!FormObjectData.lname) {
            errors.lname = 'Field is required';
        }else if(!isValidlName(FormObjectData.lname)){
            errors.lname = 'Incorrect Name';
        }

        if (!FormObjectData.gender) {
            errors.gender = 'Field is required';
        }
        if (!FormObjectData.adharno) {
            errors.adharno = 'Field  is required';
        } else if (!isValidAdhar(FormObjectData.adharno)) {
            errors.adharno = 'Invalid Adhar Format'
        }
        if (!FormObjectData.idcardno) {
            errors.idcardno = 'Field  is required';
        }
        if (!FormObjectData.email) {
            errors.email = 'Field  is required';
        } else if (!isValidEmail(FormObjectData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!FormObjectData.designation) {
            errors.designation = 'Field  is required';
        }
        if (!FormObjectData.additionalResp) {
            errors.additionalResp = 'Field is required';
        }
        if (!FormObjectData.stafftype) {
            errors.stafftype = 'Field  is required';
        }
        if (!FormObjectData.staffgrade) {
            errors.staffgrade = 'Field  is required';
        }
        if (!FormObjectData.officeno) {
            errors.officeno = 'Field  is required';
        }
        if (!FormObjectData.dept) {
            errors.dept = 'Field  is required';
        }
        if (!FormObjectData.hkrnlno) {
            errors.hkrnlno = 'Field  is required';
        }
        if (!FormObjectData.hkrnlid) {
            errors.hkrnlid = 'Field  is required';
        }
        if (!FormObjectData.organization) {
            errors.organization = 'Field  is required';
        }
        if (!FormObjectData.pastOrganization) {
            errors.pastOrganization = 'Field  is required';
        }

        return errors;
    }

    function isValidEmail(email) {
        // You can use a regular expression or a library like "validator" for more robust email validation.
        return /\S+@\S+\.\S+/.test(email);
    }

    function isValidAdhar(adharno) {
        return /^\d{12}$/.test(adharno)
    }

    function isValidfName(fname){
        return /^[A-Za-z\s'-]+$/.test(fname)

    }
    function isValidlName(lname){
        return /^[A-Za-z\s'-]+$/.test(lname)

    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const FormObjectData = EmployeeFormData;
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
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_employee mx-4'>
                    <div className='CreateEmp_Panel'>
                        <h6>Enter Registration details here :</h6>
                    </div>
                    <div className='d-flex employee_container mt-3'>

                        {/* <div className='imgDiv'>
                            <img src='#' alt="" />
                            <FontAwesomeIcon icon={faFileImage} />
                            <hr className='mt-0' />
                        </div> */}
                        <div className='CreateForm_employee'>

                            <div className="row ps-2 mt-2 g-4 align-items-center">
                                <div className="col-3">
                                    <TextField
                                        id="salutation"
                                        select
                                        variant="outlined"
                                        label="Salutation"
                                        fullWidth
                                        value={EmployeeFormData.salutation}
                                        name='salutation'
                                        onChange={handleInputChangeEmployeeData}
                                        error={!!errors.salutation}
                                        helperText={errors.salutation || ""}
                                    >
                                        {salutations.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                </div>

                                <div class="col-3">
                                    <TextField
                                        id="fname"
                                        label="First Name"
                                        value={EmployeeFormData.fname}
                                        name="fname"
                                        variant="outlined"
                                        onChange={handleInputChangeEmployeeData}
                                        error={!!errors.fname}
                                        helperText={errors.fname || ''}
                                    />
                                </div>

                                <div class="col-3">
                                    <TextField
                                        id="mname"
                                        label="Middle Name"
                                        value={EmployeeFormData.mname}
                                        name="mname"
                                        variant="outlined"
                                        onChange={handleInputChangeEmployeeData}
                                        error={!!errors.mname}
                                        helperText={errors.mname || ''}
                                    />

                                </div>
                                <div class="col-3">
                                    <TextField
                                        id="lname"
                                        label="Last Name"
                                        value={EmployeeFormData.lname}
                                        name="lname"
                                        variant="outlined"
                                        onChange={handleInputChangeEmployeeData}
                                        error={!!errors.lname}
                                        helperText={errors.lname || ''} />

                                </div>

                                <div className="col-3">
                                    <TextField
                                        id="gender"
                                        select
                                        variant="outlined"
                                        label="Gender"
                                        fullWidth
                                        value={EmployeeFormData.gender}
                                        name="gender"
                                        onChange={handleInputChangeEmployeeData}
                                        error={!!errors.gender}
                                        helperText={errors.gender || ''} 
                                    >
                                        {gender.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                   
                                </div>
                                <div className='col-3'>
                                    <TextField
                                        id="adno"
                                        label="Adhaar Number"

                                        value={EmployeeFormData.adharno}
                                        name="adharno"
                                        variant="outlined"
                                        onChange={handleInputChangeEmployeeData} 
                                        error={!!errors.adharno}
                                        helperText={errors.adharno || ''} />
                                    
                                </div>
                                <div className="col-3">
                                    <TextField
                                        id="idcardno"
                                        label="ID Card Number"
                                        value={EmployeeFormData.idcardno}
                                        name="idcardno"
                                        variant="outlined"
                                        onChange={handleInputChangeEmployeeData} 
                                        error={!!errors.idcardno}
                                        helperText={errors.idcardno || ''} />
                                    
                                </div>
                                <div className="col-3">

                                    <TextField
                                        id="organization"
                                        label="Organization"
                                        value={EmployeeFormData.organization}
                                        name="organization"
                                        variant="outlined"
                                        onChange={handleInputChangeEmployeeData}
                                        error={!!errors.organization}
                                        helperText={errors.organization || ''}  />
                                    
                                </div>
                                <div className="col-6">

                                    <TextField
                                        id="email" fullWidth
                                        label="Email"
                                        variant="outlined"
                                        value={EmployeeFormData.email}
                                        name="email"
                                        onChange={handleInputChangeEmployeeData}
                                        error={!!errors.email}
                                        helperText={errors.email || ''} 
                                        />
                                    

                                </div>

                                <div className="col-3" aria-expanded="false">

                                    <TextField
                                        id="dept"
                                        select
                                        variant="outlined"
                                        label="Department"
                                        fullWidth
                                        value={EmployeeFormData.dept}
                                        name="dept"
                                        onChange={handleInputChangeEmployeeData}
                                        error={!!errors.dept}
                                        helperText={errors.dept || ''} 
                                    >
                                        {department.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                   
                                </div>
                                <div className="col-3">

                                    <TextField
                                        id="designation"
                                        label="Designation"
                                        value={EmployeeFormData.designation}
                                        name="designation"
                                        variant="outlined" onChange={handleInputChangeEmployeeData} 
                                        error={!!errors.designation}
                                        helperText={errors.designation || ''} 
                                        />
                                    
                                </div>
                                <div className="col-3">

                                    <TextField
                                        id="add_resp"
                                        label="Additional Responsibilty"
                                        name="additionalResp"
                                        value={EmployeeFormData.additionalResp}
                                        variant="outlined" onChange={handleInputChangeEmployeeData} 
                                        error={!!errors.additionalResp}
                                        helperText={errors.additionalResp || ''}
                                        />
                                    
                                </div>
                                <div className="col-3">

                                    <TextField
                                        id="staff-type"
                                        label="Staff Type"
                                        variant="outlined"
                                        value={EmployeeFormData.stafftype}
                                        name="stafftype"
                                        onChange={handleInputChangeEmployeeData} 
                                        error={!!errors.stafftype}
                                        helperText={errors.stafftype || ''}/>
                                    
                                </div>
                                <div className="col-3">

                                    <TextField
                                        id="staff-grade"
                                        label="Staff Grade"
                                        variant="outlined"
                                        value={EmployeeFormData.staffgrade}
                                        name="staffgrade"
                                        onChange={handleInputChangeEmployeeData} 
                                        error={!!errors.staffgrade}
                                        helperText={errors.staffgrade || ''}/>
                                    
                                </div>
                                <div className="col-3">

                                    <TextField
                                        id="office-pno"
                                        label="Office Phone Number"
                                        variant="outlined"
                                        value={EmployeeFormData.officeno}
                                        name="officeno"
                                        onChange={handleInputChangeEmployeeData} 
                                        error={!!errors.officeno}
                                        helperText={errors.officeno || ''}/>
                                    
                                </div>

                                <div className="col-3" aria-expanded="false">

                                    <TextField
                                        id="past-dept"
                                        select
                                        variant="outlined"
                                        label="Past Department "
                                        fullWidth
                                        value={EmployeeFormData.pastOrganization}
                                        name="pastOrganization"

                                        onChange={handleInputChangeEmployeeData}
                                        error={!!errors.pastOrganization}
                                        helperText={errors.pastOrganization || ''}

                                    >
                                        {pastOrgDept.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                </div>

                                <div className="col-3">

                                    <TextField
                                        id="hkrnl-no"
                                        value={EmployeeFormData.hkrnlno}
                                        name="hkrnlno"
                                        label="HKRNL SL Number"
                                        variant="outlined"
                                        onChange={handleInputChangeEmployeeData}
                                        error={!!errors.hkrnlno}
                                        helperText={errors.hkrnlno || ''} />
                                </div>
                                <div className="col-3">

                                    <TextField
                                        id="hkrnl-id"
                                        value={EmployeeFormData.hkrnlid}
                                        name="hkrnlid"
                                        label="HKRNL Employee ID"
                                        variant="outlined"
                                        onChange={handleInputChangeEmployeeData}
                                        error={!!errors.hkrnlid}
                                        helperText={errors.hkrnlid || ''}/>
                                    
                                </div>
                                < div className="mt-5">
                                    <button className=' col-3 btn btn-primary' type='button' onClick={handleSubmit}>Save</button>
                                </div>
                            </div>
                            {/* </Box> */}

                        </div>

                    </div>
                    <RightFooter />
                </div>

            </div>
        </div >

    )
}

export default UserFormDetail
