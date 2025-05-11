import React, { useEffect, useState } from 'react'
import SideNavbar from '../../../components/SideNavbar'
import "../Leave-Master/LeaveForm.css"
import { useParams } from 'react-router-dom'


const HolidayCalender = () => {
    const { leavetype } = useParams()
   
  return (
    

    <div>
        <div className='d-flex'>
                <SideNavbar name={leavetype} />
                <div>
                    <h3>Coming</h3>
                </div>

            </div >
      
    </div>
  )
}

export default HolidayCalender

