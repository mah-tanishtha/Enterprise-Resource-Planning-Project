import React, { useEffect, useState } from 'react'
import RightFooter from '../../../components/RightFooter'
import SideNavbar from '../../../components/SideNavbar'
import { useNavigate, useParams } from 'react-router-dom'
import LeaveNew from '../Leave-Master/LeaveNew'
import "../Leave-Master/LeaveForm.css"


const LeaveMaster = () => {

    const [ LeaveTypeData , setLeaveTypeDate] = useState([])

    useEffect(()=>{
        fetch('/data.json').then((response)=>{
            if(!response.ok){
                throw new Error("Response incorrect")
            }
            return response.json()
        })
        .then((data)=>{
            setLeaveTypeDate(data.leaveData.leavetype)
            console.log(data.leaveData.leavetype)
        })
        .catch((err)=>{
            console.err("Fetching Error",err)
        })
    },[])
    
    const { leavetype } = useParams()

    const DeptTypeAddBack = useNavigate();

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
                        <h6> Leave Details  :
                        <div className='float-end createNewDiv'>
                            <LeaveNew/>
                        </div>
                        </h6>
                       
                    </div>
                    <div className='d-flex flex-column deptTypeAddContainer'>

                        <form className='container'>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="leaveType">Name : </label>
                                    <select className="form-select" aria-label="Default select example" onChange={(e)=>SetLeaveType(e.target.value)}>
                                        
                                        <option selected>---Select---</option>
                                        {
                                            LeaveTypeData.map((ele,index)=>{
                                               return ( <option key={index} value={ele}>{ele}</option> )
                                                
                                            })
                                        }    
                                        
                                    </select>
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

export default LeaveMaster
