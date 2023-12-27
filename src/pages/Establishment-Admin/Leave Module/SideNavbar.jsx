import React from 'react'
import '../styles/SideNavbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip ,faBook,faFolder,faSuitcaseRolling,faAngleDown,faArrowUpRightFromSquare,faPen,faNetworkWired} from '@fortawesome/free-solid-svg-icons';



function SideNavbar() {



 

    const ListStyle = (showDetail) => {
        if (!showDetail) {
            return {
                 
                
            }
        }
        else {
            return {
                backgroundColor: '#618f1d',
                
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
        paddingLeft: '30px',
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
                <nav className="scrollcont nav flex-column">
                    <Link className="sidenavheading nav-link active text-white fs-4" aria-current="page" to="/dashboard" >
                    <FontAwesomeIcon icon={faGrip} style={{"--fa-primary-opacity": "0.9","marginRight":"10px"}} />DashBoard</Link>

                    <Link className="nav-link active text-white fs-6 fw-light "  aria-current="page"  onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{"--fa-primary-opacity": "0.9","marginRight":"5px",}} />Establishment Transactions<FontAwesomeIcon icon={faAngleDown} style={{"paddingLeft":"10px","position":"absolute","left":"-10px","transform":"translate(200px,-15px)"}}/></Link>
                    {showDetail['list1'] && (
                        <>
                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-form" style={afterStyle}>Employee Register</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="/Upload-documents" style={afterStyle}>Scan-Upload Documents</Link>
                            {/* <Link className="nav-link active text-white border-bottom " aria-current="page" to="#" style={afterStyle}>Bulk Employee Upload</Link> */}
                        </>
                    )}
                    <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list2')} style={ListStyle(showDetail['list2'])} ><FontAwesomeIcon icon={faNetworkWired} style={{"--fa-primary-opacity": "0.9","marginRight":"10px"}} />Establishment Setup<FontAwesomeIcon icon={faAngleDown} style={{"paddingLeft":"10px","position":"absolute","left":"-10px","transform":"translate(200px,6px)"}}/></Link>
                    {showDetail['list2'] && (
                        <>
                            <Link className="nav-link active text-white " aria-current="page" to="/employee-type" style={afterStyle}>Employee Type</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="/Staff-type" style={afterStyle} >Staff Type</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="/department-type" style={afterStyle} >Department</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="/designation" style={afterStyle} >Designation</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="/qualification" style={afterStyle}>Qualification Type</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="/document-list" style={afterStyle} >Document List</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="/subemployee-type" style={afterStyle} >Sub Employee Type</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="/past-org-dept" style={afterStyle} >Past Organization Department</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="/JobLocation" style={afterStyle} >Job Location</Link>
                        </>
                    )}
                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list3')} style={ListStyle(showDetail['list3'])} ><FontAwesomeIcon icon={faPen}  style={{"--fa-primary-opacity": "0.9","paddingRight":"8px"}}/>Establishment Reports<FontAwesomeIcon icon={faAngleDown} style={{"paddingLeft":"10px","position":"absolute","left":"-10px","transform":"translate(200px,6px)"}}/></Link>

                    {showDetail['list3'] && (
                        <>
                            <Link className="nav-link active text-white " aria-current="page" to="/employee-profile" style={afterStyle} >Employee Profile</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle} >Staff Report</Link>
                        </>
                    )}

                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list4')} style={ListStyle(showDetail['list4'])} ><FontAwesomeIcon icon={faBook} style={{"--fa-primary-opacity": "0.9","marginRight":"10px"}} />Service Book Details<FontAwesomeIcon icon={faAngleDown} style={{"paddingLeft":"10px","position":"absolute","left":"-10px","transform":"translate(200px,6px)"}}/></Link>

                    {showDetail['list4'] && (
                        <>
                            <Link className="nav-link active text-white " aria-current="page" to="/transfer" style={afterStyle}>Transfer</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="/promotion" style={afterStyle}>Promotion</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="/service-status" style={afterStyle}> Service Status UPdate</Link>
                            {/* <Link className="nav-link active text-white border-bottom" aria-current="page" to="#" style={afterStyle}>Request Approval</Link> */}
                            <Link className="nav-link active text-white" aria-current="page" to="/service-register" style={afterStyle}>Service Register</Link>


                        </>
                    )}


                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list5')} style={ListStyle(showDetail['list5'])} ><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{"--fa-primary-opacity": "0.9","marginRight":"10px"}} />New User Performa<FontAwesomeIcon icon={faAngleDown} style={{"paddingLeft":"10px","position":"absolute","left":"-10px","transform":"translate(200px,6px)"}}/></Link>


                    {showDetail['list5'] && (
                        <>
                            <Link className="nav-link active text-white " aria-current="page" to="/sendregistrationlink" style={afterStyle}>Send Registration Link</Link>
                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>New Employee List</Link>
                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>All Registered Employee</Link>

                        </>
                    )}

                    <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#"><FontAwesomeIcon icon={faSuitcaseRolling} style={{"--fa-primary-opacity": "0.9","marginRight":"10px"}}/>Tour Application</Link>

                </nav>

            </div>
        </div>
    )
}

export default SideNavbar
