import React, { useState } from 'react'
import '../AddDocumentList/styles/AddDocumentList.css'
import { useNavigate } from 'react-router-dom'
import SideNavbar from '../../../components/SideNavbar';
import RightFooter from '../../../components/RightFooter';

function AddDocumentList() {
    const AddDocListTypeAddBack = useNavigate();

    const [DocListAddTypeData, SetDocListAddTypeData] = useState({
        DLName: '',
        DLtype: '',
        DLDesc: '',
    })

    const HandleDocListTypeAddBackBtn = () => {
        AddDocListTypeAddBack(-1);
    }

    const DLADDHandleInputChange = (event) => {
        const { name, value } = event.target;
        SetDocListAddTypeData((prevData) => (
            {
                ...prevData, [name]: value
            }
        ))

    }
    const HandleDocListTypeAddSaveBtn = () => {
        const DLADDFormData = JSON.stringify(DocListAddTypeData);
        console.log(DLADDFormData)
    }
    return (
        <div>
            <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_DocListType mx-4'>
                    <div className='CreateEmp_DocListTypePanel'>
                        <h6> Add Documents :</h6>
                    </div>
                    <div className='d-flex flex-column docListTypeAddContainer'>

                        <form className='container'>


                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="DLName">Document Name : </label>
                                    <input type="text" className="form-control" id="DLName" value={DocListAddTypeData.DLName} name="DLName" onChange={DLADDHandleInputChange} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="DLtype">Document Type : </label>
                                    <select className="form-select" aria-label="Default select example" id="DLtype" value={DocListAddTypeData.DLtype} name="DLtype" onChange={DLADDHandleInputChange}>
                                       <option selected>--Select--</option>
                                        <option value="Establishment Document" >Establishment Document</option>
                                        <option value="Issues" >Issues</option>
                                        <option value="Library Document" >Library Document</option>
                                        <option value="Insurance Document" >Insurance Document</option>
                                        <option value="Recruitment" >Recruitment</option>

                                    </select>
                                </div>
                            </div>

                            <div className='row'>
                                <div class="col d-flex p-2 form-group ">
                                    <label for="DLDesc">Description: </label>
                                    <textarea class="form-control" id="DLDesc" rows='3' value={DocListAddTypeData.DLDesc} name="DLDesc" onChange={DLADDHandleInputChange} />
                                </div>
                            </div>


                        </form>
                        <div id='docListAddTypebuttons'>
                            <button type="submit" className='btn btn-success' onClick={HandleDocListTypeAddBackBtn}>Back</button>
                            <button type="button" className='btn btn-success' onClick={HandleDocListTypeAddSaveBtn}>Save</button>
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

export default AddDocumentList
