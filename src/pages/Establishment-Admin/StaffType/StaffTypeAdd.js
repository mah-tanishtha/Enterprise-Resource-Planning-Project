import React from 'react'
import SideNavbar from '../../../components/SideNavbar'
import RightFooter from '../../../components/RightFooter'
import './styles/StaffTypeForm.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function StaffTypeAdd() {
    const STypeAddBack = useNavigate();

    const [StaffAddTypeData, SetStaffAddTypeData] = useState({
        STcode: '',
        STAddname: '',
        STAdddesc: '',
        STRetirementAge:''
    })

    const HandleStaffTypeAddBackBtn = () => {
        STypeAddBack(-1);
    }

    const STADDHandleInputChange = (event) => {
        const { name, value } = event.target;
        SetStaffAddTypeData((prevData) => (
            {
                ...prevData, [name]: value
            }
        ))

    }
    const HandleStaffTypeAddSaveBtn = () => {
        const STADDFormData = JSON.stringify(StaffAddTypeData);
        console.log(STADDFormData)
    }
  return (
    <div>
      <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_DeptType mx-4'>
                    <div className='CreateEmp_DeptTypePanel'>
                        <h6> Add Staff Type  :</h6>
                    </div>
                    <div className='d-flex flex-column staffTypeAddContainer'>

                        <form className='container'>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="TAddCode">Code: </label>
                                    <input type="text" className="form-control" id="STAddCode" value={StaffAddTypeData.STcode} name="STcode" onChange={STADDHandleInputChange} />
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="StaffTypeAddname">Name: </label>
                                    <input type="text" className="form-control" id="StaffTypeAddname" value={StaffAddTypeData.STAddname} name="STAddname" onChange={STADDHandleInputChange} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="RetirementAge">Retirement Age: </label>
                                    <input type="number" className="form-control" id="RetirementAge" value={StaffAddTypeData.STRetirementAge} name="STRetirementAge" onChange={STADDHandleInputChange} />
                                </div>
                            </div>
                            <div className='row'>
                                <div class="col d-flex p-2 form-group ">
                                    <label for="STAddDesc">Description: </label>
                                    <textarea class="form-control" id="STAddDesc" rows='3' value={StaffAddTypeData.STAdddesc} name="STAdddesc" onChange={STADDHandleInputChange} />
                                </div>
                            </div>


                        </form>
                        <div id='staffTypebuttons'>
                            <button type="submit" className='btn btn-success' onClick={HandleStaffTypeAddBackBtn}>Back</button>
                            <button type="button" className='btn btn-success' onClick={HandleStaffTypeAddSaveBtn}>Save</button>
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

export default StaffTypeAdd
