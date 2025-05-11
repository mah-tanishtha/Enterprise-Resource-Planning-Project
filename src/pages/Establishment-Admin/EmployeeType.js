import React, { useEffect, useState } from 'react'
import RightFooter from '../../components/RightFooter'
import SideNavbar from '../../components/SideNavbar'
import '../Establishment-Admin/styles/EmployeeType.css'
import { useNavigate } from 'react-router-dom'

function EmployeeType() {

    const [EmployeeTypeData, setEmployeeTypeData] = useState([])
    const ETAddNavigate = useNavigate();
    const ETShowNavigate = useNavigate();


    useEffect(() => {
        fetch('/data.json').then((response) => {
            if (!response.ok) {
                throw new Error("Response is not Okay")
            }
            return response.json()
        })
            .then((data) => {
                setEmployeeTypeData(data.transferdata);
            })
            .catch((err) => {
                console.error("Fetching Error", err)
            });
    }, []);

    const HandleET = ()=>{
        ETAddNavigate('/employeeAddType')
    }

    

    const HandleShowEmpType = ()=>{
     ETShowNavigate('')   
    }

    return (
        <div>
            <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_employeeType mx-4'>
                    <div className='CreateEmp_Panel'>
                        <h6> Employee Type :</h6>
                    </div>
                    <div className='emptypecont'>
                        <form>
                            <div class="col-4">
                                <label for="Eid" class="col-form-label">Select Employee Type :</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>--Select--</option>
                                    {
                                        EmployeeTypeData.map((option, index) => (

                                            <option key={index} value={option.code}>{option.code}</option>
                                        ))
                                    }
                                   

                                </select>
                            </div>
                            <div id='emptypebtn'>
                                <button type='button' className='btn btn-success' onClick={HandleShowEmpType}>Show</button>
                                <button type='button' className='btn btn-success' onClick={HandleET}>Add</button>

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

export default EmployeeType
