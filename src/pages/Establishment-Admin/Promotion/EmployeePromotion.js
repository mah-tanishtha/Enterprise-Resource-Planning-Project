import React, { useState, useEffect } from 'react'
import RightFooter from '../../../components/RightFooter';
import SideNavbar from '../../../components/SideNavbar';
import '../Promotion/EmployeePromotion.css'
import { useNavigate } from 'react-router-dom';


function EmployeePromotion() {

    const [EmpName, setEmpName] = useState([]);
    const [selectedOption, setSelectedOption] = useState(false)
    const [showdetail, setshowPromoDetail] = useState([])
    const emppromoback = useNavigate();

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

    const handlePromoBackBtn = () => {
        emppromoback(-1);
    }


    return (
        <div>
            <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_employeeType mx-4'>
                    <div className='CreateEmp_Panel'>
                        <h6> Promotion Details :</h6>
                    </div>
                    <div className='promotypecont'>
                        <form>
                            <div className="emppromoinput col-3">
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

                                    <div className='container empPromodetail'>
                                        <div className='row'>
                                            <div className="col-3 mt-2 form-group ">
                                                <label for="exampleFormControlInput1">Name: </label>
                                                <input type="text" className="mt-1 form-control" id="exampleFormControlInput1" value={showdetail.name} disabled />
                                            </div>
                                            <div className="col-3  mt-2  form-group ">
                                                <label for="exampleFormControlInput1">Designation: </label>
                                                <input type="text" className="mt-1 form-control" id="exampleFormControlInput1" value={showdetail.designation} disabled />
                                            </div>
                                            <div className="col-3  mt-2 form-group ">
                                                <label for="exampleFormControlInput1">Type: </label>
                                                <input type="text" className="mt-1 form-control" id="exampleFormControlInput1" value={showdetail.type} disabled />
                                            </div>
                                            <div className="col-3 mt-2  form-group ">
                                                <label for="exampleFormControlInput1">Pay: </label>
                                                <input type="text" className="mt-1 form-control" id="exampleFormControlInput1" value={showdetail.pay} disabled />
                                            </div>


                                        </div>
                                        <div className='row'>

                                            <div className="col-6 mt-2 p-2 form-group mb-2">
                                                <label for="exampleFormControlInput1">Email: </label>
                                                <input type="text" className="mt-1 form-control" id="exampleFormControlInput1" value={showdetail.email} disabled />
                                            </div>
                                            <div className="col  mt-2 p-2 form-group mb-2">
                                                <label for="exampleFormControlInput1">Department: </label>
                                                <input type="text" className="mt-1 form-control" id="exampleFormControlInput1" value={showdetail.dept} disabled />
                                            </div>
                                        </div>
                                    </div>
                                    <span>Employee Transfer Details : </span>
                                    <form className='container PromoContainer '>


                                        <div className='row'>
                                            <div className=" col mt-2 form-group mb-2">
                                                <label for="exampleFormControlInput1"><span>*</span>Staff Type: </label>
                                                <select className="mt-1 form-control" id="designation">
                                                    <option selected>--Select--</option>
                                                    {
                                                        EmpName.map((option, index) => (


                                                            <option key={index} value={option.type}>
                                                                {option.type}
                                                            </option>

                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            <div className="col  mt-2 form-group mb-2">
                                                <label for="designation"><span>*</span>Designation : </label>
                                                <select className="mt-1 form-control" id="designation">
                                                    <option selected>--Select--</option>
                                                    {
                                                        EmpName.map((option, index) => (


                                                            <option key={index} value={option.designation}>
                                                                {option.designation}
                                                            </option>

                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            <div className="col mt-2 form-group mb-2">
                                                <label for="promoDate"><span>*</span>Promotion Date :</label>
                                                <input type='date' className="mt-3 form-control" id="promoDate"></input>
                                            </div>
                                            <div className="col mt-2  form-groupmb-2">
                                                <label for="NextPromoDate">Next Promotion Date : </label>
                                                <input type='date' className="mt-3 form-control" id="NextPromoDate"></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            }

                        </form>
                        <div id='empIncrementbtn' className='d-flex flex-row justify-content-center'>
                            <button type='button' className='btn btn-success' onClick={handlePromoBackBtn} >Back</button>
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

export default EmployeePromotion
