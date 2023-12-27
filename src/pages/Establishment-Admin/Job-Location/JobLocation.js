import React from 'react'
import SideNavbar from '../../../components/SideNavbar';
import RightFooter from '../../../components/RightFooter';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function JobLocation() {
    const navigate = useNavigate();
    const [PastOrganizationData, setPastOrganization] = useState([])

    const HandleBackBtn = () => {
        navigate(-1)
    }

    const HandleAddBtn = () => {
        navigate("/AddJobLocation")
    }


    useEffect(() => {
        fetch('/data.json').then((response) => {
            if (!response.ok) {
                throw new Error("Response is not Okay")
            }
            return response.json()
        })
            .then((data) => {
                setPastOrganization(data.transferdata);
            })
            .catch((err) => {
                console.error("Fetching Error", err)
            });
    }, []);



  return (
    
    <div>
      <div className='d-flex'>
                <SideNavbar />
                <div className='RightContainer_DocListType mx-4'>
                    <div className='CreateEmp_DocListTypePanel'>
                        <h6> Job Location :</h6>
                    </div>
                    <div className='DocumentListcont'>
                        <form className='d-flex flex-column'>
                            <div className='d-flex flex-row docListinput'>
                                <label for="JobLocationName" className="col-form-label">Employee Name:</label>
                                <select id="JobLocationName" className="form-select" aria-label="Default select example">

                                    <option selected>--Select--</option>
                                    {
                                        PastOrganizationData.map((option) => (
                                            <option value={option.name} >{option.name}</option>
                                        ))
                                    }



                                </select>
                            </div>

                           
                            <div id='docListypebtn'>
                                <button type='button' className='btn btn-success' onClick={HandleBackBtn}>Back</button>
                                <button type='button' className='btn btn-success' onClick={HandleAddBtn}>Add</button>
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

export default JobLocation
