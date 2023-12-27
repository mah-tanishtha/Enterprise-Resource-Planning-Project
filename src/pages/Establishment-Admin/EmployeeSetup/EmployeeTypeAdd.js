import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import RightFooter from '../../components/RightFooter'
import '../EmployeeSetup/Styles/EmplyeeTypeAddContainer.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function EmployeeTypeAdd() {
    const ETypeAddBack = useNavigate();

    const [EmpAddTypeData, SetEmpAddTypeData] = useState({
        code: '',
        ETAddname: '',
        ETAdddesc: '',
    })

    const HandleEmpTypeAddBackBtn = () => {
        ETypeAddBack(-1);
    }

    const ETADDHandleInputChange = (event) => {
        const { name, value } = event.target;
        SetEmpAddTypeData((prevData) => (
            {
                ...prevData, [name]: value
            }
        ))

    }
    const HandleEmpTypeAddSaveBtn = () => {
        const ETADDFormData = JSON.stringify(EmpAddTypeData);
        console.log(ETADDFormData)
    }

    return (
        <div>
            <div className='d-flex'>
                <SideNavbar />
                <div className='RightContainer_DeptType mx-4'>
                    <div className='CreateEmp_DeptTypePanel'>
                        <h6> Add Employee Type  :</h6>
                    </div>
                    <div className='d-flex flex-column emplyeeTypeAddContainer'>

                        <form className='container'>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="Code">Code: </label>
                                    <input type="text" className="form-control" id="ETAddCode" value={EmpAddTypeData.code} name="code" onChange={ETADDHandleInputChange} />
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="ETypeAddname">Name: </label>
                                    <input type="text" className="form-control" id="ETypeAddname" value={EmpAddTypeData.ETAddname} name="ETAddname" onChange={ETADDHandleInputChange} />
                                </div>
                            </div>
                            <div className='row'>
                                <div class="col d-flex p-2 form-group ">
                                    <label for="ETAddDesc">Description: </label>
                                    <textarea class="form-control" id="ETAddDesc" rows='3' value={EmpAddTypeData.ETAdddesc} name="ETAdddesc" onChange={ETADDHandleInputChange} />
                                </div>
                            </div>


                        </form>
                        <div id='empTypebuttons'>
                            <button type="submit" className='btn btn-success' onClick={HandleEmpTypeAddBackBtn}>Back</button>
                            <button type="button" className='btn btn-success' onClick={HandleEmpTypeAddSaveBtn}>Save</button>
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

export default EmployeeTypeAdd
