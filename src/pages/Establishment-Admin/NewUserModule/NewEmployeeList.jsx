import React, { useEffect } from 'react'
import SideNavbar from '../../../components/SideNavbar'
import RightFooter from '../../../components/RightFooter'
import { useState } from 'react'
import '../NewUserModule/styles/style.css'



function NewEmployeeList() {
  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error")
        }
        else {
          return response.json()
        }

      })
      .then((data) => {
        setEmployeeList(data.transferdata)
      })
      .catch((error) => {
        console.error("Error : ", error)
      }
      )

  }, [])

  const [EmployeeList, setEmployeeList] = useState([])
  const [rowData , setrowData] = useState([])

  const Handlechange = (rows)=>{
   
      setrowData(rows)
    
  }

  return (
    <div>
      <div className='d-flex'>
        <SideNavbar name="Establishment-Admin"/>
        <div className='RightContainer_employeeType mx-4'>
          <div className='CreateEmp_Panel'>
            <h6> New Employee List :</h6>
          </div>
          <div className='emptypecont'>
            <div className='Listcontainer'>
              <div>
              
                <table>
                
                  <tbody>
                    {/* <tr>
                      <td className='ListHeader'>New Employee List (for approval) : </td>
                    </tr> */}
                    {EmployeeList.map((rows) => (
                      <tr key={rows.code}  onClick={()=>Handlechange(rows)}>
                        <td><h2>{rows.name}</h2></td>
                        <td><h6>{rows.designation}</h6></td>
                        <td><h6>{rows.email}</h6></td>
                      </tr>

                    ))}
                  {
                    console.log(rowData)
                  }
                  </tbody>
                </table>

              </div>

            </div>

            {/* <form>
                            <div class="col-3">
                                <label for="email" class="col-form-label">Enter Email Id :</label>
                              <input type='text'/>
                            </div>
                            <div class="col-3">
                                <label for="Eid" class="col-form-label">Enter mobile no :</label>
                              <input type='text'/>
                            </div>
                            <div id='emptypebtn'>
                                <button type='number' className='btn btn-success' >Send</button>
                                <button type='number' className='btn btn-success' >User Performa</button>
                            </div>

                        </form> */}
          </div>
          <div className='emptypefooter'>
            <RightFooter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewEmployeeList
