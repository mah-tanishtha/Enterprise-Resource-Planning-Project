import React, { useState, useEffect } from 'react'
import RightFooter from '../../../components/RightFooter';
import SideNavbar from '../../../components/SideNavbar';
import '../Promotion/EmployeeIncrement.css'
import { useNavigate } from 'react-router-dom';



function EmployeeIncrement() {

    const [EmpName, setEmpName] = useState([]);
    const [selectedOption, setSelectedOption] = useState(false)
    const [showdetail, setshowPromoDetail] = useState([])
    const IncrementBackButton = useNavigate();

    useEffect(() => {
        fetch('/data.json') // Relative path to the JSON file
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setEmpName(data.transferdata);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Handle the error, e.g., display an error message to the user
            });
    }, []);

    const handleNameSelect = (e) => {
        if (e.target.value !== '--Select--') {

            const value = e.target.value

            fetch('/data.json') // Relative path to the JSON file
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    const matchitem = data.transferdata.find((item) => item.code === value);
                    setshowPromoDetail(matchitem)
                    setSelectedOption(true)
                })

                .catch((error) => {
                    console.error('Error fetching data:', error);
                    // Handle the error, e.g., display an error message to the user
                });

        }
        else {
            setSelectedOption(false);
        }

    }

    const handleIncrementBack = ()=>{
        IncrementBackButton(-1);
    }
    return (
        <div>
            <div className='d-flex'>
                <SideNavbar />
                <div className='RightContainer_employeeType mx-4'>
                    <div className='CreateEmp_Panel'>
                        <h6> Increment Details :</h6>
                    </div>
                    <div className='empIncrementcont'>
                        <form>
                            <div className="empIncrementinput col-3">
                                <label for="Eid" class="col-form-label">Select Employee Code:</label>
                                <select className="form-select" aria-label="Default select example" onChange={handleNameSelect}>
                                    <option selected>--Select--</option>
                                    {
                                        EmpName.map((option, index) => (
                                            <option key={index} value={option.code}>
                                                {option.code} {option.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>


                            {
                                selectedOption &&
                                <div className='showdetailcont d-flex flex-column align-items-center'>
                                    <span>Employee Details :</span>
                                    <div className='container empIncrementdetail'>
                                        <div className='row'>
                                            <div class="col-3  mt-2 form-group ">
                                                <label for="exampleFormControlInput1">Name: </label>
                                                <input type="text" className=" mt-2 form-control" id="exampleFormControlInput1" value={showdetail.name} disabled />
                                            </div>
                                            <div class="col-3  mt-2 form-group ">
                                                <label for="exampleFormControlInput1">Designation: </label>
                                                <input type="text" className="mt-2 form-control" id="exampleFormControlInput1" value={showdetail.designation} disabled />
                                            </div>
                                            <div className="col-3  mt-2 form-group ">
                                                <label for="exampleFormControlInput1">Type: </label>
                                                <input type="text" className="mt-2 form-control" id="exampleFormControlInput1" value={showdetail.type} disabled />
                                            </div>
                                            <div className="col-3 mt-2 form-group ">
                                                <label for="exampleFormControlInput1">Pay: </label>
                                                <input type="text" className="mt-2 form-control" id="exampleFormControlInput1" value={showdetail.pay} disabled />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div class="col-6 mt-2  form-group ">
                                                <label for="exampleFormControlInput1">Department: </label>
                                                <input type="text" className="mt-2 form-control" id="exampleFormControlInput1" value={showdetail.dept} disabled />
                                            </div>

                                            <div className="col mt-2  form-group ">
                                                <label for="exampleFormControlInput1">Email: </label>
                                                <input type="text" className="mt-2 form-control" id="exampleFormControlInput1" value={showdetail.email} disabled />
                                            </div>
                                        </div>
                                    </div>
                                    <span>Increment Details : </span>

                                    <form className='container IncrementContainer'>
                                        <div className='row'>
                                            <div className="col-4 mt-2 p-2 form-group">
                                                <label for="pay"><span>*</span>Increment Date :</label>
                                                <input type='date' className="mt-2 form-control" id="for"></input>
                                            </div>
                                            <div className="col-4 mt-2 p-2 form-group">
                                                <label for="pay"><span>*</span>Next Increment Date :</label>
                                                <input type='date' className="mt-2 form-control" id="for"></input>
                                            </div>
                                            <div className="col-4  mt-2 p-2 form-group">
                                                <label for="pay"><span>*</span>No of Increment :</label>
                                                <input type='number' className="mt-2 form-control" id="for"></input>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="col mt-2 p-2 form-group">
                                                <label for="pay"><span>*</span> Increment Amount:</label>
                                                <input type='text' className="mt-2 form-control" id="for"></input>
                                            </div>
                                            <div className="col mt-2 p-2 form-group">
                                                <label for="pay"><span>*</span> New Salary Slab:</label>
                                                <input type='text' className="mt-2 form-control" id="for"></input>
                                            </div>
                                            <div className="col mt-2 p-2 form-group">
                                                <label for="pay"><span>*</span> Pay:</label>
                                                <input type='text' className="mt-2 form-control" id="for"></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            }

                        </form>
                        <div id='empIncrementbtn' className='d-flex flex-row justify-content-center'>
                            <button type='button' className='btn btn-success' onClick={handleIncrementBack} >Back</button>
                            <button type='button' className='btn btn-success'>Save</button>
                        </div>
                    </div>
                    <div className='emptypefooter'>
                        <RightFooter />
                    </div>
                </div>

            </div>
        </div>
    )
}



export default EmployeeIncrement
