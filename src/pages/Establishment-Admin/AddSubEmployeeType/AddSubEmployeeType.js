import React from 'react'
import SideNavbar from '../../../components/SideNavbar'
import RightFooter from '../../../components/RightFooter'
import '../AddSubEmployeeType/Styles/AddSubEmployeeType.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function AddSubEmployeeType() {
    const SubETypeAddBack = useNavigate();

    const [SubEmpAddTypeData, SetSubEmpAddTypeData] = useState({
        SubETcode: '',
        SubETypeAddname: '',
        SubETAddDesc:'',
        SubETAddtype:""

    })

    const HandleSubEmpTypeAddBackBtn = () => {
        SubETypeAddBack(-1);
    }

    const SubETADDHandleInputChange = (event) => {
        const { name, value } = event.target;
        SetSubEmpAddTypeData((prevData) => (
            {
                ...prevData, [name]: value
            }
        ))

    }
    const HandleSubEmpTypeAddSaveBtn = () => {
        const SubETADDFormData = JSON.stringify(SubEmpAddTypeData);
        console.log(SubETADDFormData)
    }

    return (
        <div>
            <div className='d-flex'>
                <SideNavbar />
                <div className='RightContainer_AddSubEmpType mx-4'>
                    <div className='CreateEmp_AddSubEmpTypePanel'>
                        <h6> Add Sub Employee Type  :</h6>
                    </div>
                    <div className='d-flex flex-column SubemplyeeTypeAddContainer'>

                        <form className='container'>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="SubETCode">Code </label>
                                    <input type="text" className="form-control" id="SubETCode" value="13" name="SubETCode v" disabled />
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="SubETypeAddname">Name: </label>
                                    <input type="text" className="form-control" id="SubETypeAddname" value={SubEmpAddTypeData.SubETypeAddname} name="SubETypeAddname" onChange={SubETADDHandleInputChange} />
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="SubETAddtype">Employee Type: </label>
                                    <select className="form-select" aria-label="Default select example" value={SubEmpAddTypeData.SubETAddtype} name="SubETypeAddtype" onChange={SubETADDHandleInputChange}>

                                        <option selected>--Select--</option>
                                       


                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div class="col d-flex p-2 form-group ">
                                    <label for="SubETAddDesc">Description: </label>
                                    <textarea class="form-control" id="SubETAddDesc" rows='3' value={SubEmpAddTypeData.SubETAddDesc} name="SubETAddDesc" onChange={SubETADDHandleInputChange} />
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

export default AddSubEmployeeType
