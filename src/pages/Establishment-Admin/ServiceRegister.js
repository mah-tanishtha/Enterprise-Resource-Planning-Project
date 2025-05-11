import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import RightFooter from '../../components/RightFooter'

function ServiceRegister() {
  return (
    <div>
      <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_employeeType mx-4'>
                    <div className='CreateEmp_Panel'>
                        <h6> Service Register :</h6>
                    </div>
                    <div className='emptypecont'>
                        <form>
                            <div class="col-3">
                                <label for="Eid" class="col-form-label">Select Employee Type :</label>
                                <select className="form-select" aria-label="Default select example">

                                    <option selected>--Select--</option>
                                    <option value="011">011</option>
                                    <option value="012">012</option>
                                    <option value="013">013</option>
                                    <option value="014">014</option>
                                    <option value="015">015</option>

                                </select>
                            </div>
                            <div id='emptypebtn'>
                                <button type='button' className='btn btn-success'>Show</button>

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

export default ServiceRegister
