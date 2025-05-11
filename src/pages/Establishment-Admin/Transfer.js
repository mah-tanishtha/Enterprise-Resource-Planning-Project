import React from 'react'
import RightFooter from '../../components/RightFooter'
import SideNavbar from '../../components/SideNavbar'
import { useNavigate } from 'react-router-dom'
import '../Establishment-Admin/styles/Transfer.css'
import { useState , useEffect } from 'react'


function Transfer() {

    const transferemployee = useNavigate();
    const [selectName,setSelectName ] = useState([]);
    
    const GoToTransferDetail = ()=>{
       return transferemployee('/transferemp')
    }

    useEffect(() => {
        fetch('/data.json') // Relative path to the JSON file
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setSelectName(data.transferdata);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Handle the error, e.g., display an error message to the user
            });
    }, []);


    return (
        <div>
            <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_employeeType mx-4'>
                    <div className='CreateEmp_Panel'>
                        <h6> Transfer Details :</h6>
                    </div>
                    <div className='emptypecont'>
                        <form>
                            <div class="col-5">
                                <label for="Eid" class="col-form-label">Select Employee Name to show the transfer detail :</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>--Select--</option>
                                        {
                                            selectName.map((option, index) => (
                                                <option key={index} value={option.name}>
                                                    {option.code} {option.name}
                                                </option>
                                            ))
                                        }
                                    

                                </select>
                            </div>
                            <div id='trnsfer-btn'>
                                <button type='button' className='btn btn-success' >Show</button>
                                <button type='button' className='btn btn-success' onClick={GoToTransferDetail}>Add a Transfer</button>
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

export default Transfer
