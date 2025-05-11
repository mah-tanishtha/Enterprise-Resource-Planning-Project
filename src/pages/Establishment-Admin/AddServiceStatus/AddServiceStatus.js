import React,{useState} from 'react'
import SideNavbar from '../../../components/SideNavbar'
import RightFooter from '../../../components/RightFooter'

import { useNavigate } from 'react-router-dom'

function AddServiceStatus() {
    const ServiceStatusAddBack = useNavigate();

    const [ServiceStatusAddTypeData, SetServiceStatusAddTypeData] = useState({
        ServiceStatusEmp: '',
        ServiceStatusEmpType: '',
        ServiceStatus:'',
        ServiceStatusStaffType:"",
        ServiceStatusDate:'',
        ServiceStatusRemarks:''


    })

    const HandleServiceStatusTypeAddBackBtn = () => {
         ServiceStatusAddBack(-1);
    }

    const ServiceStatusADDHandleInputChange = (event) => {
        const { name, value } = event.target;
        SetServiceStatusAddTypeData((prevData) => (
            {
                ...prevData, [name]: value
            }
        ))

    }
    const HandleServiceStatusTypeAddSaveBtn = () => {
        const ServiceStatusADDFormData = JSON.stringify(ServiceStatusAddTypeData);
        console.log(ServiceStatusADDFormData)
    }

    return (
        <div>
            <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_AddSubEmpType mx-4'>
                    <div className='CreateEmp_AddSubEmpTypePanel'>
                        <h6> Add Service Status Details  :</h6>
                    </div>
                    <div className='d-flex flex-column SubemplyeeTypeAddContainer'>

                        <form className='container'>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="ServiceStatusEmp">Employee: </label>
                                    <input type="text" className="form-control" id="ServiceStatusEmp" value={ServiceStatusAddTypeData.ServiceStatusEmp} name="ServiceStatusEmp"  onChange={ServiceStatusADDHandleInputChange}/>
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for=" ServiceStatusEmpType">Employee Type: </label>
                                    <input type="text" className="form-control" id=" ServiceStatusEmpType" value={ServiceStatusAddTypeData.ServiceStatusEmpType} name="ServiceStatusEmpType" onChange={ServiceStatusADDHandleInputChange} />
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="ServiceStatus">Service Status: </label>
                                    <select className="form-select" aria-label="Default select example" value={ServiceStatusAddTypeData.ServiceStatus} name="ServiceStatus" onChange={ServiceStatusADDHandleInputChange}>

                                        <option selected>--Select--</option>
                                       


                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="ServiceStatusStaffType">Staff Type: </label>
                                    <select className="form-select" aria-label="Default select example" value={ServiceStatusAddTypeData.ServiceStatusStaffType} name="ServiceStatusStaffType" onChange={ServiceStatusADDHandleInputChange}>

                                        <option selected>--Select--</option>
                                       


                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="ServiceStatusDate">Date Of Action: </label>
                                    <input type="date" className="form-control" id="ServiceStatusDate" value={ServiceStatusAddTypeData.ServiceStatusDate} name="ServiceStatusDate" onChange={ServiceStatusADDHandleInputChange} />
                                </div>
                            </div>
                            <div className='row'>
                                <div class="col d-flex p-2 form-group ">
                                    <label for=" ServiceStatusRemarks">Remarks: </label>
                                    <textarea class="form-control" id=" ServiceStatusRemarks" rows='3' value={ServiceStatusAddTypeData.ServiceStatusRemarks} name="ServiceStatusRemarks" onChange={ServiceStatusADDHandleInputChange} />
                                </div>
                            </div>


                        </form>
                        <div id='AddSubempTypebuttons'>
                            <button type="submit" className='btn btn-success' onClick={HandleServiceStatusTypeAddBackBtn}>Back</button>
                            <button type="button" className='btn btn-success' onClick={HandleServiceStatusTypeAddSaveBtn}>Save</button>
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

export default AddServiceStatus
