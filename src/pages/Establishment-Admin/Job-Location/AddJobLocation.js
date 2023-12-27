import React from 'react'
import SideNavbar from '../../../components/SideNavbar';
import RightFooter from '../../../components/RightFooter';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function AddJobLocation() {
    useEffect(() => {
        fetch('/data.json').then((response) => {
            if (!response.ok) {
                throw new Error("Response is not Okay")
            }
            return response.json()
        })
            .then((data) => {
                SetFormJobData(data.transferdata);
            })
            .catch((err) => {
                console.error("Fetching Error", err)
            });
    }, []);

    const navigate = useNavigate();
    const [FormJobData,SetFormJobData] = useState([])

    const [jobLocationData,SetjobLocationData] = useState({
        JobLocationName: '',
        JobToDate: '',
        JobDate:'',
        CountryName:"",
        stateName:""

    })

    const HandleSubEmpTypeAddBackBtn = () => {
        navigate(-1);
    }

    const SubETADDHandleInputChange = (event) => {
        const { name, value } = event.target;
        SetjobLocationData((prevData) => (
            {
                ...prevData, [name]: value
            }
        ))

    }
    const HandleSubEmpTypeAddSaveBtn = () => {
        const POADDFormData = JSON.stringify(jobLocationData);
        console.log(POADDFormData)
    }
  return (
    <div>
       <div className='d-flex'>
                <SideNavbar />
                <div className='RightContainer_AddSubEmpType mx-4'>
                    <div className='CreateEmp_AddSubEmpTypePanel'>
                        <h6> Add Job Location Details  :</h6>
                    </div>
                    <div className='d-flex flex-column SubemplyeeTypeAddContainer'>

                        <form className='container'>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                <label for="JobLocationName" className="col-form-label">Employee Name:</label>
                                <select id="JobLocationName" className="form-select" aria-label="Default select example">

                                    
                                    <option selected>--Select--</option>
                                    {
                                        FormJobData.map((option) => (
                                            <option value={option.pastOrganization} >{option.pastOrganization}</option>
                                        ))
                                    }
                                   
                                </select>
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="JobDate">From Date: </label>
                                    <input type="Date" className="form-control" id="JobDate" value={jobLocationData.JobDate} name="JobDate" onChange={SubETADDHandleInputChange} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="JobToDate">To Date: </label>
                                    <input type="Date" className="form-control" id="JobToDate" value={jobLocationData.JobToDate} name="JobToDate" onChange={SubETADDHandleInputChange} />
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="CountryName">Country Name: </label>
                                    <select className="form-select" aria-label="Default select example" value={jobLocationData.CountryName} name="CountryName" onChange={SubETADDHandleInputChange}>

                                        <option selected>--Select--</option>
                                       
                                        <option>India</option>
                                        <option>Others</option>

                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                <label for="CityName" className="col-form-label">City Name:</label>
                                <select id="CityName" className="form-select" aria-label="Default select example">

                                    
                                    <option selected>--Select--</option>
                                    {
                                        FormJobData.map((option) => (
                                            <option value={option.pastOrganization} >{option.pastOrganization}</option>
                                        ))
                                    }
                                   
                                </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div class="col d-flex p-2 form-group ">
                                    <label for="stateName">State Name: </label>
                                    <input className="form-control" id="stateName" rows='3' value={jobLocationData.stateName} name="stateName" onChange={SubETADDHandleInputChange} />
                                </div>
                            </div>


                        </form>
                        <div id='AddSubempTypebuttons'>
                            <button type="submit" className='btn btn-success' onClick={HandleSubEmpTypeAddBackBtn}>Back</button>
                            <button type="button" className='btn btn-success' onClick={HandleSubEmpTypeAddSaveBtn}>Save</button>
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

export default AddJobLocation
