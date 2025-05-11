import React, { useState } from 'react'
import SideNavbar from '../../../components/SideNavbar'
import RightFooter from '../../../components/RightFooter'
import './TransferDetail.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



function TransferDetail() {

    const [TransferDetailData, setTransferDetailData] = useState([])
    const [selectedOption, setSelectedOption] = useState(false)
    const [showdetail, setshowdetail] = useState([])
    const backnavigate = useNavigate();


    useEffect(() => {
        fetch('/data.json') // Relative path to the JSON file
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setTransferDetailData(data.transferdata);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Handle the error, e.g., display an error message to the user
            });
    }, []);

    const handleoptionchange = (e) => {
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
                    setshowdetail(matchitem)
                    setSelectedOption(true)
                })

                .catch((error) => {
                    console.error('Error fetching data:', error);
                    // Handle the error, e.g., display an error message to the user
                });

        }
        else {
            setSelectedOption(false)
        }

    }

    const handleBack = () => {
        backnavigate(-1);
    }

    return (
        <div>
            <div>
                <div className='d-flex'>
                    <SideNavbar name="Establishment-Admin"/>
                    <div className='RightContainer_DeptType mx-4'>
                        <div className='CreateEmp_DeptTypePanel'>
                            <h6> Enter Transfer Details :</h6>
                        </div>
                        <div className='TransferTypecont'>
                            <form className='d-flex flex-column'>
                                <div className='d-flex flex-row transferdetailinput'>
                                    <label for="Eid" class="col-form-label">Enter Employee code : </label>
                                    <select className="form-select" aria-label="Default select example" onChange={handleoptionchange}>
                                        <option selected>--Select--</option>
                                        {
                                            TransferDetailData.map((option, index) => (
                                                <option key={index} value={option.code}>
                                                    {option.code}
                                                </option>

                                            ))
                                        }


                                    </select>

                                </div>

                                {
                                    selectedOption &&
                                    <div className=' showdetailcont d-flex flex-column align-items-center'>
                                        <span>Employees Details :</span>

                                        <div className='container transferdetail'>

                                            <div className='row mt-3'>
                                                <div class="col-3 d-flex p-2 form-group ">
                                                    <label for="exampleFormControlInput1">Name: </label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" value={showdetail.name} disabled />
                                                </div>
                                                <div class="col-5 d-flex p-2  form-group ">
                                                    <label for="exampleFormControlInput1">Designation: </label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" value={showdetail.designation} disabled />
                                                </div>


                                                <div class="col-4 d-flex p-2 form-group mb-2">
                                                    <label for="exampleFormControlInput1">Department: </label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" value={showdetail.dept} disabled />
                                                </div>
                                            </div>

                                            <div className='row mt-3'>

                                                <div class="col-3 d-flex p-2  form-group ">
                                                    <label for="exampleFormControlInput1">Type: </label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" value={showdetail.type} disabled />
                                                </div>

                                                <div class="col-5 d-flex p-2 form-group mb-2">
                                                    <label for="exampleFormControlInput1">Email: </label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" value={showdetail.email} disabled />
                                                </div>

                                                <div class="col-4 d-flex p-2 form-group mb-2">
                                                    <label for="exampleFormControlInput1">Pay: </label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" value={showdetail.pay} disabled />
                                                </div>
                                            </div>


                                        </div>
                                        
                                        <form className='container transferformdiv'>
                                        <span id="transferDetailSpan">Transfer Details: </span>
                                            <div className='row'>
                                                <div class="col-4 d-flex p-2 mt-2 form-group mb-2">
                                                    <label for="TDtransferDate"><span>*</span>Transfer Date: </label>
                                                    <input type="date" class="form-control" id="TDtransferDate" placeholder="Date of Transfer" />
                                                </div>
                                                <div className="col-4 d-flex p-2 mt-2 form-group">
                                                    <label for="TDdesignation"><span>*</span>Designation : </label>
                                                    <select class="form-control" id="TDdesignation">
                                                        <option selected>--Select--</option>
                                                        {
                                                            TransferDetailData.map((option, index) => (


                                                                <option key={index} value={option.designation}>
                                                                    {option.designation}
                                                                </option>

                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-4 d-flex p-2 mt-2 form-group">
                                                    <label for="TDDept"><span>*</span>Department : </label>
                                                    <select class="form-control" id="TDDept">
                                                        <option selected>--Select--</option>
                                                        {
                                                            TransferDetailData.map((option, index) => (


                                                                <option key={index} value={option.code}>
                                                                    {option.dept}
                                                                </option>

                                                            ))
                                                        }
                                                    </select>

                                                </div>


                                            </div>
                                            <div className='row'>
                                                <div className="col-4 d-flex p-2 form-group">
                                                    <label for="TDpay"><span>*</span>Pay :</label>
                                                    <input type='number' class="form-control" id="TDpay"></input>
                                                </div>
                                                <div className="col-8 d-flex p-2 form-group">
                                                    <label for="TDremark">Remark : </label>
                                                    <textarea className="col-2 form-control" id="TDremark" rows="2"></textarea>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                }



                            </form>
                            <div id='transferdetailbtn' className='d-flex justify-content-center'>
                                <button type='button' className='btn btn-success' onClick={handleBack}>Back</button>
                                <button type='button' className='btn btn-success' >Save</button>
                            </div>






                        </div>
                        <div className='emptypefooter'>
                            <RightFooter />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TransferDetail
