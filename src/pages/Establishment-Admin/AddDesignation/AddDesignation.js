import React , {useState} from 'react'
import '../AddDesignation/styles/AddDesignation.css'
import { useNavigate } from 'react-router-dom'
import SideNavbar from '../../../components/SideNavbar';
import RightFooter from '../../../components/RightFooter';

function AddDesignation() {
    const DeptTypeAddBack = useNavigate();

    const [DeptAddTypeData, SetDeptAddTypeData] = useState({
        DTOrganization: '',
        DTAdddeptcode: '',
        DTdeptname: '',
        DTEmail:'',
        DTAdddesc:''
    })

    const HandleDeptTypeAddBackBtn = () => {
        DeptTypeAddBack(-1);
    }

    const DTADDHandleInputChange = (event) => {
        const { name, value } = event.target;
        SetDeptAddTypeData((prevData) => (
            {
                ...prevData, [name]: value
            }
        ))

    }
    const HandleDeptTypeAddSaveBtn = () => {
        const DTADDFormData = JSON.stringify(DeptAddTypeData);
        console.log(DTADDFormData)
    }
  return (
    <div>
      <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_DeptType mx-4'>
                    <div className='CreateEmp_DeptTypePanel'>
                        <h6> Designation Details  :</h6>
                    </div>
                    <div className='d-flex flex-column deptTypeAddContainer'>

                        <form className='container'>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="DTAddOrganization">Code </label>
                                    <input type="text" className="form-control" id="DTAddOrganization" value="DSG182" name="DTOrganization" onChange={DTADDHandleInputChange} disabled/>
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col d-flex p-2 form-group ">
                                    <label for="DTypeAdddeptcode">Priority Level : </label>
                                    <input type="text" className="form-control" id="DTypeAdddeptcode" value={DeptAddTypeData.DTAdddeptcode} name="DTAdddeptcode" onChange={DTADDHandleInputChange} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="DTdeptName"> Name : </label>
                                    <input type="text" className="form-control" id="DTdeptName" value={DeptAddTypeData.DTdeptname} name="DTdeptname" onChange={DTADDHandleInputChange} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-12 d-flex p-2 form-group ">
                                    <label for="DTEmail">Staff Type  : </label>
                                    <input type="email" className="form-control" id="DTEmail" value={DeptAddTypeData.DTEmail} name="DTEmail" onChange={DTADDHandleInputChange} />
                                </div>
                            </div>
                            <div className='row'>
                                <div class="col d-flex p-2 form-group ">
                                    <label for="DTAddDesc">Description: </label>
                                    <textarea class="form-control" id="DTAddDesc" rows='3' value={DeptAddTypeData.DTAdddesc} name="DTAdddesc" onChange={DTADDHandleInputChange} />
                                </div>
                            </div>


                        </form>
                        <div id='deptTypebuttons'>
                            <button type="submit" className='btn btn-success' onClick={HandleDeptTypeAddBackBtn}>Back</button>
                            <button type="button" className='btn btn-success' onClick={HandleDeptTypeAddSaveBtn}>Save</button>
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

export default AddDesignation
