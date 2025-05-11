import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import RightFooter from '../../components/RightFooter'
import '../Establishment-Admin/styles/DepartmentType.css'
import { useNavigate } from 'react-router-dom'

function DepartmentType() {

    const DTshownavigate = useNavigate();
    const DTaddNavigate = useNavigate(); 

   const HandleDeptTypeShow = ()=>{
    DTshownavigate("/");
}

   const HandleDeptTypeAdd = ()=>{
    DTaddNavigate("/depttypeAdd")
   }
  return (
    <div>
       <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_DeptType mx-4'>
                    <div className='CreateEmp_DeptTypePanel'>
                        <h6> Department Type :</h6>
                    </div>
                    <div className='DeptTypecont'>
                        <form className='d-flex flex-row'>
                            <div className=' deptinput '>
                                <label for="Eid" class="col-form-label">Enter Department :</label>
                                <input type='text'/>
                                
                            </div>

                           
                            <div className=" orginput">
                                <label for="Eid" className="col-form-label">Select Organization :</label>
                                <select className="form-select" aria-label="Default select example">

                                    <option selected>--Select--</option>
                                    <option value="Deputational">GMDA</option>
                                    

                                </select>
                            </div>
                            <div id='depttypebtn'>
                                <button type='button' className='btn btn-success' onClick={HandleDeptTypeShow}>Show</button>
                                <button type='button' className='btn btn-success'onClick={HandleDeptTypeAdd}>Add</button>
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

export default DepartmentType
