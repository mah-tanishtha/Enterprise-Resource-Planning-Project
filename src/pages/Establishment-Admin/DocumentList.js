import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import RightFooter from '../../components/RightFooter'
import '../Establishment-Admin/styles/DocumentList.css'
import { useNavigate } from 'react-router-dom'

function DocumentList() {
    const DLshownavigate = useNavigate();
    const DLaddnavigate = useNavigate();

    const HandleDocListShowBtn = ()=>{
        DLshownavigate('')
    }
    const HandleDocListAddBtn = ()=>{
        DLaddnavigate("/AddDocumentList")
    }

  return (
    <div>
       <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_DocListType mx-4'>
                    <div className='CreateEmp_DocListTypePanel'>
                        <h6> Document List :</h6>
                    </div>
                    <div className='DocumentListcont'>
                        <form className='d-flex flex-column'>
                            <div className='d-flex flex-row docListinput'>
                                <label for="docName" className="col-form-label">Document Name:</label>
                                <input type='text'id="docName"/>
                            </div>
                           
                            <div className="d-flex flex-row DocTypeinput">
                                <label for="docType" className="col-form-label">Document Type:</label>
                                <input type='text'id="docType"/>
                            </div>
                            <div id='docListypebtn'>
                                <button type='button' className='btn btn-success'onClick={HandleDocListShowBtn}>Show</button>
                                <button type='button' className='btn btn-success' onClick={HandleDocListAddBtn}>Add</button>
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

export default DocumentList
