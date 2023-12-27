import React, { useState } from 'react'
import SideNavbar from '../../components/SideNavbar'
import RightFooter from '../../components/RightFooter'
import './StaffType/styles/StaffTypeAdd.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function StaffType() {
    const [StaffTypeSelectData,setStaffTypeSelectData] = useState([]);
    const STshownavigate = useNavigate();
    const STaddnavigate = useNavigate();

    useEffect(()=>{
        fetch('/data.json')
        .then((response)=>{
            if(!response.ok){
                throw new Error("Network not Okay ")
            }
            else return response.json()
        })
        .then((data)=>{
            setStaffTypeSelectData(data.transferdata)
        })
        .catch((err)=>{
            console.error("Fetching Error",err)
        })
    })

    const HandleStaffTypeShow = ()=>{
        STshownavigate('/')
    }

    const HandleStaffTypeAdd = ()=>{
        STaddnavigate('/stafftypeAdd')
    }

    return (
        <div>
            <div className='d-flex'>
                <SideNavbar />
                <div className='RightContainer_employeeType mx-4'>
                    <div className='CreateEmp_Panel'>
                        <h6> Staff Type :</h6>
                    </div>
                    <div className='emptypecont'>
                        <form>
                            <div class="col-3">
                                <label for="Eid" class="col-form-label">Select Staff Type :</label>
                                <select className="form-select" aria-label="Default select example">

                                    <option selected>--Select--</option>
                                    {
                                        StaffTypeSelectData.map((option)=>(
                                            <option value={option.type}>{option.type}</option>
                                        )

                                        )
                                    }

                                </select>
                            </div>
                            <div id='stafftypeAddbtn'>
                                <button type='button' className='btn btn-success' onClick={HandleStaffTypeShow}>Show</button>
                                <button type='button' className='btn btn-success'onClick={HandleStaffTypeAdd}>Add</button>

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

export default StaffType
