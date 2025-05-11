import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import RightFooter from '../../components/RightFooter'
import '../Establishment-Admin/styles/SubEmployee.css'
import { useNavigate } from 'react-router-dom'

function SubEmployeeType() {
    const SubEmpTypeShowNavigate = useNavigate();
    const SubEmpTypeAddNavigate = useNavigate();

    const HandleSubEmpShow = ()=>{
        SubEmpTypeShowNavigate('')
    }

    const HandleSubEmpAdd = ()=>{
        SubEmpTypeAddNavigate("/addSubEmpType")
    }


  return (
    <div>
      <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_SubEmpType mx-4'>
                    <div className='CreateEmp_SubEmpTypePanel'>
                        <h6> Employee Type :</h6>
                    </div>
                    <div className='Subemptypecont'>
                        <form>
                            <div class="col-3">
                                <label for="Eid" class="col-form-label">Select Employee Type :</label>
                                <select className="form-select" aria-label="Default select example">

                                    <option selected>--Select--</option>
                                    <option value="Additional Charge">
                                        Additional Charge
                                    </option>
                                    <option value="Expert Advertisement">Expert Advertisement</option>
                                    <option value="Expert Retd">Expert Retd</option>
                                    <option value="Externalship">Externalship</option>
                                    <option value="Human Resource Person">Human Resource Person</option>

                                </select>
                            </div>
                            <div id='subemptypebtn'>
                                <button type='button' className='btn btn-success' onClick={HandleSubEmpShow}>Show</button>
                                <button type='button' className='btn btn-success' onClick={HandleSubEmpAdd}>Add</button>

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

export default SubEmployeeType
