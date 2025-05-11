import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import RightFooter from '../../components/RightFooter'
import { useNavigate } from 'react-router-dom'

function EmployeeProfile() {
  const empProfilenavigate = useNavigate();

  const HandleEmpProfileNavigate = ()=>{
    empProfilenavigate('')
  }
  return (
    <div>
      <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_employeeType mx-4'>
                    <div className='CreateEmp_Panel'>
                        <h6> Employee Profile :</h6>
                    </div>
                    <div className='emptypecont'>
                        <form>
                            <div class="col-3">
                                <label for="Eid" class="col-form-label">Enter the employee code :</label>
                              <input type='text'/>
                            </div>
                            <div id='emptypebtn'>
                                <button type='button' className='btn btn-success' onClick={HandleEmpProfileNavigate}>Show</button>

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

export default EmployeeProfile
