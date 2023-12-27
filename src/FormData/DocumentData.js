import React , {useState} from 'react'
import RightFooter from '../components/RightFooter';
import SideNavbar from '../components/SideNavbar';
import './FormStyle/DocumentData.css'

function DocumentData() {

    const retrieveData = JSON.parse(localStorage.getItem('data')) || [];

   

    const [DocData,setDocData] = useState({
        SelectedName : '',
        Emp_id: '',
        Emp_code: '',
        documentName : '',
        documentStatus:'',
        documentFile : '',
        documentDate : ''

    }) 

    const handleDocumentData =(e) =>{
        const {name,value} = e.target;
        setDocData({
            ...DocData,
            [name] : value
        })
        console.log(DocData)
    } 

    

    


    return (
        <div>
            <div className='d-flex'>
                <SideNavbar />
                <div className='ddRightContainer_UploadDoc mx-4'>
                    <div className='ddUploadDoc_Panel'>
                        <h6>Upload Documents here :</h6>
                    </div>
                    <div className='ddEmployeeSelection_Panel d-flex align-items-center'>

                        <div className="d-flex align-items-center">
                            <div className='ddcontainer1'>
                            <p>Select the employee name:</p>
                            
                            <select class="form-select"  id='d_name' value={DocData.SelectedName} name='SelectedName'  onChange={handleDocumentData} aria-label="Default select example">
                                <option selected>--Select--</option>
                                
                                {retrieveData.length > 0 &&
                                    retrieveData.map((employee, index) => (
                                        <option  id='nameoption' key={index} value={employee.fname+employee.mname+employee.lname}>
                                            {employee.fname+" "+employee.mname+" "+employee.lname}
                                        </option>
                                         
                                    ))}
                            </select>
                            </div>
                            <div className='ddcontainer2'>
                            <p>Enter Employee ID :</p>
                            <input type='text' value={DocData.Emp_id} name='
                            Emp_id' onChange={handleDocumentData}/>
                            </div>
                            <div className='ddcontainer2'>
                            <p>Enter Employee Code :</p>
                            <input type='text' value={DocData.Emp_code} name='Emp_code' onChange={handleDocumentData}/>
                            </div>
                            
                        </div>
                       
                    </div>
                    <div className='Documentpanel'>
                        <table class="table table-bordered ">
                            <thead>
                                <tr>
                                    <th scope="col">Document Name</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Uploaded Document</th>
                                    <th scope="col">Date of Submission</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td ><input type='text'value={DocData.documentName} id='ddname' name='documentName' onChange={handleDocumentData}/></td>
                                    <td>
                                        <select class="form-select" id='docs' value={DocData.documentStatus} name="documentStatus" onChange={handleDocumentData} aria-label="Default select example">
                                            <option selected>--Select--</option>
                                            <option value="Not Submitted">Not Submitted</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="N.A">N.A.</option>
                                        </select>
                                    </td>
                                    <td><input type="file" value={DocData.documentFile} name='documentFile' onChange={handleDocumentData}/></td>
                                    <td><input type="date" value={DocData.documentDate} name='documentDate' onChange={handleDocumentData}/></td>
                                </tr>
                                {/* <tr>
                                    <td>Office Order</td>
                                    <td>
                                        <select class="form-select" id='docs' aria-label="Default select example">
                                            <option selected>--Select--</option>
                                            <option value="Female">Not Submitted</option>
                                            <option value="Male">Submitted</option>
                                            <option value="Other">N.A.</option>
                                        </select>
                                    </td>
                                    <td><input type="file" /></td>
                                    <td><input type="date" /></td>
                                </tr>
                                <tr>
                                    <td>Character Certificate</td>
                                    <td>
                                        <select class="form-select" id='docs' aria-label="Default select example">
                                            <option selected>--Select--</option>
                                            <option value="Female">Not Submitted</option>
                                            <option value="Male">Submitted</option>
                                            <option value="Other">N.A.</option>
                                        </select>
                                    </td>
                                    <td><input type="file" /></td>
                                    <td><input type="date" /></td>
                                </tr>
                                <tr>
                                    <td>Bank Details</td>
                                    <td>
                                        <select class="form-select" id='docs' aria-label="Default select example">
                                            <option selected>--Select--</option>
                                            <option value="Female">Not Submitted</option>
                                            <option value="Male">Submitted</option>
                                            <option value="Other">N.A.</option>
                                        </select>
                                    </td>
                                    <td><input type="file" /></td>
                                    <td><input type="date" /></td>
                                </tr>
                                <tr>
                                    <td>Pan Card</td>
                                    <td>
                                        <select class="form-select" id='docs' aria-label="Default select example">
                                            <option selected>--Select--</option>
                                            <option value="Female">Not Submitted</option>
                                            <option value="Male">Submitted</option>
                                            <option value="Other">N.A.</option>
                                        </select>
                                    </td>
                                    <td><input type="file" /></td>
                                    <td><input type="date" /></td>
                                </tr>
                                <tr>
                                    <td>Adhar Card</td>
                                    <td>
                                        <select class="form-select" id='docs' aria-label="Default select example">
                                            <option selected>--Select--</option>
                                            <option value="Female">Not Submitted</option>
                                            <option value="Male">Submitted</option>
                                            <option value="Other">N.A.</option>
                                        </select>
                                    </td>
                                    <td><input type="file" /></td>
                                    <td><input type="date" /></td>
                                </tr>
                                <tr>
                                    <td>Qualification</td>
                                    <td>
                                        <select class="form-select" id='docs' aria-label="Default select example">
                                            <option selected>--Select--</option>
                                            <option value="Female">Not Submitted</option>
                                            <option value="Male">Submitted</option>
                                            <option value="Other">N.A.</option>
                                        </select>
                                    </td>
                                    <td><input type="file" /></td>
                                    <td><input type="date" /></td>
                                </tr>
                                <tr>
                                    <td>Police Verification</td>
                                    <td>
                                        <select class="form-select" id='docs' aria-label="Default select example">
                                            <option selected>--Select--</option>
                                            <option value="Female">Not Submitted</option>
                                            <option value="Male">Submitted</option>
                                            <option value="Other">N.A.</option>
                                        </select>
                                    </td>
                                    <td><input type="file" /></td>
                                    <td><input type="date" /></td>
                                </tr>
                                <tr>
                                    <td>Voterf ID</td>
                                    <td>
                                        <select class="form-select" id='docs' aria-label="Default select example">
                                            <option selected>--Select--</option>
                                            <option value="Female">Not Submitted</option>
                                            <option value="Male">Submitted</option>
                                            <option value="Other">N.A.</option>
                                        </select>
                                    </td>
                                    <td><input type="file" /></td>
                                    <td><input type="date" /></td>
                                </tr>
                                <tr>
                                    <td>Driving License</td>
                                    <td>
                                        <select class="form-select" id='docs' aria-label="Default select example">
                                            <option selected>--Select--</option>
                                            <option value="Female">Not Submitted</option>
                                            <option value="Male">Submitted</option>
                                            <option value="Other">N.A.</option>
                                        </select>
                                    </td>
                                    <td><input type="file" /></td>
                                    <td><input type="date" /></td>
                                </tr>
                                <tr>
                                    <td>Resident Certificate</td>
                                    <td>
                                        <select class="form-select" id='docs' aria-label="Default select example">
                                            <option selected>--Select--</option>
                                            <option value="Female">Not Submitted</option>
                                            <option value="Male">Submitted</option>
                                            <option value="Other">N.A.</option>
                                        </select>
                                    </td>
                                    <td><input type="file" /></td>
                                    <td><input type="date" /></td>
                                </tr>
                                <tr>
                                    <td>Last Salary Slip</td>
                                    <td>
                                        <select class="form-select" id='docs' aria-label="Default select example">
                                            <option selected>--Select--</option>
                                            <option value="Female">Not Submitted</option>
                                            <option value="Male">Submitted</option>
                                            <option value="Other">N.A.</option>
                                        </select>
                                    </td>
                                    <td><input type="file" /></td>
                                    <td><input type="date" /></td>
                                </tr> */}


                            </tbody>
                        </table>
                        <div className='align-items-center'>
                            <button type='button' className='btn btn-primary'>ADD</button>
                        </div>
                    </div>
                    <RightFooter />
                </div>

            </div>
        </div>
    )
}
  
  

export default DocumentData

