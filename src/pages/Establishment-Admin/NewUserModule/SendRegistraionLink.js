import React from 'react'
import SideNavbar from '../../../components/SideNavbar';
import RightFooter from '../../../components/RightFooter';
import { useNavigate } from 'react-router-dom';

function SendRegistraionLink() {
    const empProfilenavigate = useNavigate();

  const HandleEmpProfileNavigate = ()=>{
    empProfilenavigate('')
  }
  const HandleEmpProfile = ()=>{
    empProfilenavigate('/userformdetail')
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
                                <label for="email" class="col-form-label">Enter Email Id :</label>
                              <input type='text'/>
                            </div>
                            <div class="col-3">
                                <label for="Eid" class="col-form-label">Enter mobile no :</label>
                              <input type='text'/>
                            </div>
                            <div id='emptypebtn'>
                                <button type='number' className='btn btn-success' onClick={HandleEmpProfileNavigate}>Send</button>
                                <button type='number' className='btn btn-success' onClick={HandleEmpProfile}>User Performa</button>
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

export default SendRegistraionLink
