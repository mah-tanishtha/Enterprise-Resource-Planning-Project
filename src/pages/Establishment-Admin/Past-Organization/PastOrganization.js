import React from 'react'
import SideNavbar from '../../../components/SideNavbar'
import RightFooter from '../../../components/RightFooter'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

function PastOrganization() {
    const navigate = useNavigate();
    const [PastOrganizationData, setPastOrganization] = useState([])

    const HandleBackBtn = () => {
        navigate(-1)
    }

    const HandleAddBtn = () => {
        navigate("/AddPastOrganization")
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
                        <h6> Past Organization Department :</h6>
                    </div>
                    <div className='DocumentListcont'>
                        <form className='d-flex flex-column'>
                            <div className='d-flex flex-row docListinput'>
                                <label for="PastOrg" className="col-form-label">Past Organization:</label>
                                <select id="PastOrg" className="form-select" aria-label="Default select example">

                                    <option selected>--Select--</option>
                                    {
                                        PastOrganizationData.map((option) => (
                                            <option value={option.pastOrganization} >{option.pastOrganization}</option>
                                        ))
                                    }



                                </select>
                            </div>

                            <div className="d-flex flex-row DocTypeinput">
                                <label for="Org" className="col-form-label">Document Type:</label>
                                <select id="Org" className="form-select" aria-label="Default select example">

                                    <option selected>--Select--</option>
                                    {
                                        PastOrganizationData.map((option) => (
                                            <option value={option.organization} >{option.organization}</option>
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

export default PastOrganization
