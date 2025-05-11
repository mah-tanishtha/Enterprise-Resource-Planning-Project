import React , {useState} from 'react'
import SideNavbar from '../../components/SideNavbar'
import '../Establishment-Admin/styles/UploadDocuments.css'
import RightFooter from '../../components/RightFooter'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function UploadDocuments() {

    const Docshowbtn = useNavigate();
    const DocAddbtn = useNavigate();

    // const retrieveData = JSON.parse(localStorage.getItem('data')) || [];

    // console.log(retrieveData.fname)

    const [UploadDocumentData, setUploadDocumentData] = useState([])


    useEffect(() => {
        fetch('/data.json').then((response) => {
            if (!response.ok) {
                throw new Error("Response is not Okay")
            }
            return response.json()
        })
            .then((data) => {
                setUploadDocumentData(data.transferdata);
            })
            .catch((err) => {
                console.error("Fetching Error", err)
            });
    }, []);

    const DocumentShow = ()=>{
        Docshowbtn('/')
    }
    const DocumentAdd = ()=>{
        DocAddbtn('/AddDocumentList')
    }

    return (
        <div>
            <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_UploadDoc mx-4'>
                    <div className='UploadDoc_Panel'>
                        <h6>Upload Documents here :</h6>
                    </div>
                    <div className='EmployeeSelection_Panel d-flex align-items-center'>

                        <div className="d-flex align-items-center">

                            <p>Select the employee name:</p>
                            <select class="form-select" id='gender' aria-label="Default select example">
                                <option selected>--Select--</option>
                                {/* {retrieveData.length > 0 &&
                                    retrieveData.map((employee, index) => (
                                        <option key={index} value={employee.fname+employee.mname+employee.lname}>
                                            {employee.fname+" "+employee.mname+" "+employee.lname}
                                        </option>
                                    ))} */}
                                     
                                    {
                                        UploadDocumentData.map((option, index) => (

                                            <option key={index} value={option.name}>{option.name}</option>
                                        ))
                                    }
                                   
                            </select>

                        </div>
                        <div className='upload-docbtn'>
                            <button type='button' className='btn btn-primary ' onClick={DocumentShow}>Show</button>
                            <button type='button' className='btn btn-primary ' onClick={DocumentAdd}>Add</button>
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

                                    <td>Experience Letter</td>
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
                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <RightFooter />
                </div>

            </div>
        </div>
    )
}

export default UploadDocuments
