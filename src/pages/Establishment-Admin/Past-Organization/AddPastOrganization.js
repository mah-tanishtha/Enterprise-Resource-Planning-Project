import React from 'react'
import SideNavbar from '../../../components/SideNavbar';
import RightFooter from '../../../components/RightFooter';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';

function AddPastOrganization() {

    const navigate = useNavigate();

    const [pastOrgData,SetpastOrgData] = useState({
        addpastOrgcode: '',
        pastOrgName: '',
        OrgName:'',
        email:"",
        desc:""

    })

    const HandleSubEmpTypeAddBackBtn = () => {
        navigate(-1);
    }

    const SubETADDHandleInputChange = (event) => {
        const { name, value } = event.target;
        SetpastOrgData((prevData) => (
            {
                ...prevData, [name]: value
            }
        ))

    }
    const HandleSubEmpTypeAddSaveBtn = () => {
        const POADDFormData = JSON.stringify(pastOrgData);
        console.log(POADDFormData)
    }

  return (
    <div>
       <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_AddSubEmpType mx-4'>
                    <div className='CreateEmp_AddSubEmpTypePanel'>
                        <h6> Add Past Organization Details  :</h6>
                    </div>
                    <div className='d-flex flex-column SubemplyeeTypeAddContainer'>

                        <form className='container'>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="pastOrgcode">Past Organization Code  :</label>
                                    <input type="text" className="form-control" id="pastOrgcode" value={pastOrgData.pastOrgcode} name="pastOrgcode " onChange={SubETADDHandleInputChange}/>
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="pastOrgName">Past Organization Department Name: </label>
                                    <input type="text" className="form-control" id="pastOrgName" value={pastOrgData.pastOrgName} name="pastOrgName" onChange={SubETADDHandleInputChange} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="email">Email: </label>
                                    <input type="text" className="form-control" id="email" value={pastOrgData.email} name="email" onChange={SubETADDHandleInputChange} />
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="orgName">Organization: </label>
                                    <select className="form-select" aria-label="Default select example" value={pastOrgData.OrgName} name="OrgName" onChange={SubETADDHandleInputChange}>

                                        <option selected>--Select--</option>
                                       
                                        <option>GMDA</option>

                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div class="col d-flex p-2 form-group ">
                                    <label for="desc">Description: </label>
                                    <textarea class="form-control" id="desc" rows='3' value={pastOrgData.desc} name="desc" onChange={SubETADDHandleInputChange} />
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

export default AddPastOrganization
