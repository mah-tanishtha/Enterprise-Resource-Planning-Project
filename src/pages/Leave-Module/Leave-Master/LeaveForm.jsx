import React, { useEffect, useState } from 'react'
import { TextField, MenuItem } from '@mui/material'
import "../Leave-Master/LeaveForm.css"

function LeaveForm() {
    const [LeaveTypeData, setLeaveTypeDate] = useState([])

    useEffect(() => {
        fetch('/data.json').then((response) => {
            if (!response.ok) {
                throw new Error("Response incorrect")
            }
            return response.json()
        })
            .then((data) => {
                setLeaveTypeDate(data.leaveData.leavetype)
                console.log(data.leaveData.leavetype)
            })
            .catch((err) => {
                console.err("Fetching Error", err)
            })
    }, [])

    const [LeaveFormData, setLeaveFormData] = useState({
        leaveType: '',
        leaveCode: '',
        leavename: '',
        exclude: '',
        description: '',
        PrefixSufix: '',
    })

    const [errors, setErrors] = useState({});

    const currencies = [
        {
            value: 'Yes',
            label: 'Yes',
        },
        {
            value: 'No',
            label: 'No',
        },]
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

        if (!FormObjectData.leaveType) {
            errors.leaveType = 'Field is required';
        }
        if (!FormObjectData.leaveCode) {
            errors.leaveCode = 'Field is required';
        }
        if (!FormObjectData.leavename) {
            errors.leavename= 'Field is required';
        }

        if (!FormObjectData.exclude) {
            errors.exclude = 'Field  is required';
        }

        if (!FormObjectData.PrefixSufix) {
            errors.PrefixSufix = 'Field is required';
        }


        return errors;
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        const FormObjectData = LeaveFormData;
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
                        <h6>Enter leave details here :</h6>
                    </div>
                    <div className='leave_container mt-3'>

                        <div className='CreateForm_employee'>

                            <div className="row ps-2 mt-2 g-4 align-items-center">
                                <div className='container'>
                                    <div className='row '>
                                        <div className='col'>
                                            <TextField
                                                id="leaveType"
                                                select
                                                fullWidth
                                                value={LeaveFormData.leaveType}
                                                name='leaveType'
                                                label="Leave Type :"
                                                defaultValue="casual leave"

                                            >
                                                {LeaveTypeData
                                                    .map((option, index) => (
                                                        <MenuItem key={index} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                            </TextField>
                                        </div>
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
                                                label="Leave Name"
                                                fullWidth
                                                value={LeaveFormData.leavename}
                                                name="leavename"
                                                variant="outlined"
                                                onChange={handleInputChangeLeaveData}
                                                error={!!errors.leavename}
                                                helperText={errors.leavename || ''}
                                            />
                                        </div>
                                        <div className='col'>

                                            <TextField
                                                id="exclude"
                                                select
                                                value={LeaveFormData.exclude}
                                                name='exclude'
                                                fullWidth
                                                label="Excluded"
                                                defaultValue="Yes"
                                                helperText="Please select excluded holidays"

                                            >
                                                {currencies.map((option) => (
                                                    <MenuItem key={option} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </div>
                                    </div>

                                </div>

                                <div className='row'>
                                    <div className='col-3'>

                                        <TextField
                                            id="exclude"
                                            select
                                            value={LeaveFormData.PrefixSufix}
                                            name='PrefixSufix'

                                            label="Prefix/Suffix"
                                            defaultValue="Yes"
                                            fullWidth

                                        >
                                            {currencies.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                    <div className="col-9 ">
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

                                </div>




                                < div className="row justify-content-md-center mt-5">
                                    <button className=' col-4 btn btn-primary' type='button' onClick={handleSubmit}>Save</button>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default LeaveForm
