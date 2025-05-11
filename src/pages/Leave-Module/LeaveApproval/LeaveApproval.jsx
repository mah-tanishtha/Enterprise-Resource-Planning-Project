
import React, { useEffect, useState } from 'react'
import RightFooter from '../../../components/RightFooter'
import SideNavbar from '../../../components/SideNavbar'
import { useNavigate, useParams } from 'react-router-dom'
import "../Leave-Master/LeaveForm.css"
import { TextField, MenuItem } from '@mui/material'



const LeaveApproval = () => {

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
        approvalType: '',
        approvalTo: '',
        approvalFrom: '',

    })

    const { leavetype } = useParams()

    const DeptTypeAddBack = useNavigate();

    const currencies = [
        {
            value: 'Pending',
            label: 'Pending',
        },
        {
            value: 'Rejected',
            label: 'Rejected',
        },
        {
            value: 'Approval',
            label: 'Approval',
        },]

    const [LeaveType, SetLeaveType] = useState({
        leavetype: '',

    })

    const HandleLeaveTypeAddBackBtn = () => {
        DeptTypeAddBack(-1);
    }


    const HandleLeaveTypeAddSaveBtn = () => {
        const DTADDFormData = JSON.stringify(LeaveType);

    }
    return (


        <div>
            <div className='d-flex'>
                <SideNavbar name={leavetype} />
                <div className='RightContainer_DeptType mx-4'>
                    <div className='CreateEmp_DeptTypePanel'>
                        <h6> Leave Approval  :

                        </h6>

                    </div>
                    <div className='d-flex flex-column deptTypeAddContainer'>

                        <form className='container'>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="approvalType">Approval Status:</label>
                                    <select
                                        id="approvalType"
                                        value={LeaveFormData.leaveType}
                                        name='leaveType'
                                        label="Leave Type :"
                                        style={{'width' : '100%' ,'height':'35px' , 'border-radius':'5px'}}

                                    >
                                        {currencies.map((option) => (
                                            <option key={option} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="approvalTo">To :</label>
                                    <input type="date" id="approvalTo" value={LeaveFormData.approvalTo}></input>
                                </div>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="approvalFrom">From : </label>
                                    <input type="date" id="approvalFrom" value={LeaveFormData.approvalFrom}></input>
                                </div>
                            </div>

                        </form>
                        <div id='deptTypebuttons'>
                            <button type="submit" className='btn btn-success' onClick={HandleLeaveTypeAddBackBtn}>Back</button>
                            <button type="button" className='btn btn-success' onClick={HandleLeaveTypeAddSaveBtn}>Go</button>
                        </div>

                    </div>



                    <div className='emptypefooter'>
                        <RightFooter />
                    </div>
                </div>

            </div >

        </div>
    )
}





export default LeaveApproval
