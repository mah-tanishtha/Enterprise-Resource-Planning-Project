import React, { useState } from 'react'
import SideNavbar from '../../components/SideNavbar'
import RightFooter from '../../components/RightFooter'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Designation() {

    const [DesignationData, setDesignationData] = useState([]);
    const Designationaddnavigate = useNavigate();
    const Designationshownavigate = useNavigate();

    useEffect(() => {
        fetch('/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("netwokr Error")
                }
                else {
                    return response.json()
                }
            })
            .then((data) => {
                setDesignationData(data.transferdata)
            })
            .catch((err) => {
                console.error("Fetching error", err)
            })


    }, [])

    const HandleDeptTypeShow = () => {
        Designationshownavigate("")
    }

    const HandleDeptTypeAdd = () => {
        Designationaddnavigate("/AddDesignation")
    }
    return (
        <div>
            <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_employeeType mx-4'>
                    <div className='CreateEmp_Panel'>
                        <h6> Designation :</h6>
                    </div>
                    <div className='emptypecont'>
                        <form>
                            <div class="col-3">
                                <label for="Eid" class="col-form-label">Select the Designation :</label>
                                <select className="form-select" aria-label="Default select example">

                                    <option selected>--Select--</option>
                                    {
                                        DesignationData.map((option) => (
                                            <option value={option.designation} >{option.designation}</option>
                                        ))
                                    }



                                </select>
                            </div>
                            <div id='emptypebtn'>
                                <button type='button' className='btn btn-success' onClick={HandleDeptTypeShow}>Show</button>
                                <button type='button' className='btn btn-success' onClick={HandleDeptTypeAdd}>Add</button>

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

export default Designation
