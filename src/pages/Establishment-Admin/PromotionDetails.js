import React, { useState, useEffect } from 'react'
import SideNavbar from '../../components/SideNavbar'
import RightFooter from '../../components/RightFooter'
import '../Establishment-Admin/styles/PromotionDetails.css'
import { useNavigate } from 'react-router-dom'


function PromotionDetails() {

    const [EmpName, setEmpName] = useState([]);
    const promoNavigate = useNavigate();
    const incrementNavigate = useNavigate();
    
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

    const handleAddIncrement = ()=>{
            incrementNavigate('/employeepromotion')
    }

    const handleAddPromotion = ()=>{
        promoNavigate('/employeeincrement')
    }


    return (
        <div>
            <div className='d-flex'>
                <SideNavbar name="Establishment-Admin"/>
                <div className='RightContainer_employeeType mx-4'>
                    <div className='CreateEmp_Panel'>
                        <h6> Promotion/Increment of Employee :</h6>
                    </div>
                    <div className='emptypecont'>
                        <form className='d-flex flex-row' id='promo-detail-div'>
                            <div className="inputdiv d-flex flex-column ">
                                <label for="Eid" className="col-form-label">Select Employee Code:</label>
                                <select className="form-select" aria-label="Default select example" >
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
                            <div id='PromoDetailbtn'className='d-flex flex-row'>
                                <button type='button' className='child-promo-div btn btn-success'>Show</button>
                                <button type='button' className='child-promo-div btn btn-success' onClick={handleAddIncrement}>Add Promotion</button>
                                <button type='button' className='child-promo-div btn btn-success'onClick={handleAddPromotion}>Add Increment</button>
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

export default PromotionDetails
