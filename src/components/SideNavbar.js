import React from 'react'
import '../styles/SideNavbar.css'
import { useState } from 'react'

function SideNavbar() {

    const ListStyle = (showDetail) => {
        if (!showDetail) {
            return {
                backgroundColor: '#3A4B55'
            }
        }
        else {
            return {
                backgroundColor: '#618f1d'
            }
        }
    }

    const [showDetail, setshowDetail] = useState({
        list1: false,
        list2: false,
        list3: false,
        list4: false,
        list5: false
    });


    const afterStyle = {
        fontSize: '14px',
        paddingLeft: '30px'
    }

    const showList = (listId) => {
        setshowDetail((prevState) => ({
            ...prevState,
            [listId]: !prevState[listId]
        }));

    }

    return (
        <div>
            <div className='LeftContainer'>
                <nav className="nav flex-column">
                    <a className="nav-link active text-white border-bottom" aria-current="page" href="#" >DashBoard</a>

                    <a className="nav-link active text-white border-bottom " aria-current="page" href="#" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])}>Establishment Transactions</a>
                    {showDetail['list1'] && (
                        <>
                            <a className="nav-link active text-white border-bottom " aria-current="page" href="#" style={afterStyle}>Employee Register</a>
                            <a className="nav-link active text-white border-bottom " aria-current="page" href="#" style={afterStyle}>Scan-Upload Documents</a>
                            <a className="nav-link active text-white border-bottom " aria-current="page" href="#" style={afterStyle}>Bulk Employee Upload</a>
                        </>
                    )}
                    <a className="nav-link active text-white border-bottom" aria-current="page" href="#" onClick={() => showList('list2')} style={ListStyle(showDetail['list2'])}>Establishment Setup</a>
                    {showDetail['list2'] && (
                        <>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle}>Employee Type</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle} >Staff Type</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle} >Department</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle} >Designation</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle}>Qualification Type</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle} >Document Lisy</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle} >Upload employee Data</a>

                        </>
                    )}
                    <a className="nav-link active text-white border-bottom" aria-current="page" href="#" onClick={() => showList('list3')} style={ListStyle(showDetail['list3'])}>Establishment Reports</a>

                    {showDetail['list3'] && (
                        <>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle} >Employee Profile</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle} >staff Report</a>
                        </>
                    )}

                    <a className="nav-link active text-white border-bottom" aria-current="page" href="#" onClick={() => showList('list4')} style={ListStyle(showDetail['list4'])}>Service Book Details</a>

                    {showDetail['list4'] && (
                        <>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle}>Transfer</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle}>Promotion</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle}> Increment</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle}>Request Approval</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle}>Service Register</a>


                        </>
                    )}


                    <a className="nav-link active text-white border-bottom" aria-current="page" href="#" onClick={() => showList('list5')} style={ListStyle(showDetail['list5'])}>New User Performa</a>


                    {showDetail['list5'] && (
                        <>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle}>Send Registration Link</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle}>New Employee List</a>
                            <a className="nav-link active text-white border-bottom" aria-current="page" href="#" style={afterStyle}>All Registered Employee</a>

                        </>
                    )}

                    <a className="nav-link active text-white border-bottom" aria-current="page" href="#">Tour Application</a>

                </nav>

            </div>
        </div>
    )
}

export default SideNavbar
