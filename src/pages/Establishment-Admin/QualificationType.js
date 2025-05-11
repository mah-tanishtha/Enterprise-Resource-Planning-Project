import React from 'react'
import RightFooter from '../../components/RightFooter'
import SideNavbar from '../../components/SideNavbar'
import "../Establishment-Admin/styles/QualificationType.css"
import { useNavigate } from 'react-router-dom'

function QualificationType() {
    const QTshownavigate = useNavigate();
    const QTAddnavigate = useNavigate();

    const HandleQualificationTypeShowBtn = ()=>{
        QTshownavigate('')
    }

    const HandleQualificationTypeAddBtn = ()=>{
        QTAddnavigate('/addQualificationType')
    }
    return (
        <div>
            <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_employeeType mx-4'>
                    <div className='CreateEmp_Panel'>
                        <h6> Qualification Type :</h6>
                    </div>
                    <div className='emptypecont'>
                        <form>
                            <div class="col-3">
                                <label for="QualificationCode" className="col-form-label"> Qualification code :</label>
                                <input type="text" id="QualificationCode"/>
                            </div>
                            <div id='qualificationtypebtn'>
                                <button type='button' className='btn btn-success' onClick={HandleQualificationTypeShowBtn}>Show</button>
                                <button type='button' className='btn btn-success' onClick={HandleQualificationTypeAddBtn}>Add
                                </button>

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

export default QualificationType
