import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideNavbar from '../../../components/SideNavbar';
import RightFooter from '../../../components/RightFooter';
import "../AddQualificationType/Styles/AddQualificationType.css"


function AddQualificationType() {


    const QualificationTypeAddBack = useNavigate();
    const [isChecked,setIsChecked] = useState(false)

    const [QualificationAddTypeData, SetQualificationAddTypeData] = useState({
        QTAddCode: '',
        QTypeAddQualificationName: '',
        QTAddType: '',


    })

    

    const HandleQualificationTypeAddBackBtn = () => {
        QualificationTypeAddBack(-1);
    }

    const QTADDHandleInputChange = (event) => {
        const { name, value } = event.target;
        const isChecked = event.target.checked
        


            SetQualificationAddTypeData((prevData) => (
                {
                    ...prevData, [name]: value
                }
            ))
            setIsChecked(isChecked)

        }
        const HandleQualificationTypeAddSaveBtn = () => {
            const updateData = {...QualificationAddTypeData}

            updateData.IsEngg = isChecked
            const QTADDFormData = JSON.stringify(updateData);
            
            console.log(QTADDFormData)
        }
        return (
            <div>
                <div className='d-flex'>
                    <SideNavbar />
                    <div className='RightContainer_DeptType mx-4'>
                        <div className='CreateEmp_DeptTypePanel'>
                            <h6> Qualification Details  :</h6>
                        </div>
                        <div className='d-flex flex-column QualifyTypeAddContainer'>

                            <form className='container'>
                                <div className='row'>
                                    <div className="col-12 d-flex p-2 form-group ">
                                        <label for="QTAddCode">Qualification Code :  </label>
                                        <input type="text" className="form-control" id="QTAddCode" value={QualificationAddTypeData.QTAddCode} name="QTAddCode" onChange={QTADDHandleInputChange} />
                                    </div>
                                </div>




                                <div className='row'>
                                    <div className="col d-flex p-2 form-group ">
                                        <label for="QTypeAddQualificationName">Qualification Name: </label>
                                        <input type="text" className="form-control" id="QTypeAddQualificationName" value={QualificationAddTypeData.QTypeAddQualificationName} name="QTypeAddQualificationName" onChange={QTADDHandleInputChange} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-12 d-flex p-2 form-group ">
                                        <label for="QTAddType"> Qualification Type : </label>
                                        <select className="form-select" aria-label="Default select example" id="QTAddType" value={QualificationAddTypeData.QTAddType} name="QTAddType" onChange={QTADDHandleInputChange}>
                                            <option selected>--select--</option>
                                            <option value="Graduate" name="Graduate">Graduate</option>
                                            <option value="Post Graduate" name="Post Graduate">Post Graduate</option>
                                            <option value="Research Degree" name="Research Degree">Research Degree</option>
                                            <option value="School" name="School">School</option>
                                            <option value="Others" name="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-9 d-flex p-2 form-group form-check">
                                        <label className="form-check-label" for="IsEngg">
                                            Is Engineering :
                                        </label>
                                        <input className="border border-secondary form-check-input" type="checkbox" value={QualificationAddTypeData.IsEngg} id="IsEngg" name="IsEngg" onChange={QTADDHandleInputChange} checked={isChecked}/>
                                    </div>
                                </div>



                            </form>
                            <div id='qualifyTypebuttons'>
                                <button type="submit" className='btn btn-success' onClick={HandleQualificationTypeAddBackBtn}>Back</button>
                                <button type="button" className='btn btn-success' onClick={HandleQualificationTypeAddSaveBtn}>Save</button>
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

    export default AddQualificationType
