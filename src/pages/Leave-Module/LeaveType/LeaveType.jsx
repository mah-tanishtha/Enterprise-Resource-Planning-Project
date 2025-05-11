import React, { useState } from 'react'
import RightFooter from '../../../components/RightFooter'
import SideNavbar from '../../../components/SideNavbar'
import { useNavigate, useParams } from 'react-router-dom'
import CreateNew from '../LeaveType/CreateNew'
import "../LeaveType/LeaveType.css"
const LeaveType = () => {
    const { leavetype } = useParams()
    console.log("para",leavetype)

    const DeptTypeAddBack = useNavigate();

    const [LeaveType, SetLeaveType] = useState({
        name: '',
      
    })

    const HandleLeaveTypeAddBackBtn = () => {
        DeptTypeAddBack(-1);
    }

    const LeaveTypeChange = (event) => {
        const { name, value } = event.target;
        SetLeaveType((prevData) => (
            {
                ...prevData, [name]: value
            }
        ))

    }
    const HandleLeaveTypeAddSaveBtn = () => {
        const DTADDFormData = JSON.stringify(LeaveType);
        console.log(DTADDFormData)
    }
  return (
    

    <div>
        <div className='d-flex'>
                <SideNavbar name={leavetype} />
                <div className='RightContainer_DeptType mx-4'>
                    <div className='CreateEmp_DeptTypePanel'>
                        <h6> Leave Type  :
                        <div className='float-end createNewDiv'>
                            <CreateNew/>
                        </div>
                        </h6>
                       
                    </div>
                    <div className='d-flex flex-column deptTypeAddContainer'>

                        <form className='container'>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="DTAddOrganization">Name : </label>
                                    <input type="text" className="form-control" id="name" value={LeaveType.name} name="name" onChange={LeaveTypeChange} />
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

export default LeaveType
