import React from 'react'
import '../pages/Establishment-Admin/styles/SideNavbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faBook, faFolder, faSuitcaseRolling, faAngleDown, faArrowUpRightFromSquare, faPen, faNetworkWired } from '@fortawesome/free-solid-svg-icons';



function SideNavbar(props) {

    const AccountName = props.name


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
        list5: false,
        list6: false,
        list7: false,
        list8: false,
        list9: false,
        list10: false,
        list11: false,
        list12: false,
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
                    <Link className="sidenavheading nav-link active text-white fs-4" aria-current="page" to={`/dashboard/${AccountName}`} >
                        <FontAwesomeIcon icon={faGrip} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />DashBoard</Link>



                    {(() => {
                        switch (AccountName) {
                            case 'Account-Admin':
                                return <>

                                    <Link className="nav-link active text-white fs-6 fw-light " aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px", }} />Financial Accountings<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-35px", "transform": "translate(200px,-15px)" }} /></Link>
                                    {showDetail['list1'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Accounts Master</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Accounts Transaction</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Voucher Listing</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Financial Reports</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Financial Listings</Link>

                                            {/* <Link className="nav-link active text-white border-bottom " aria-current="page" to="#" style={afterStyle}>Bulk Employee Upload</Link> */}
                                        </>
                                    )}
                                    <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list2')} style={ListStyle(showDetail['list2'])} >Important Links</Link>

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list3')} style={ListStyle(showDetail['list3'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Cost Center Budget</Link>

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list4')} style={ListStyle(showDetail['list4'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Account Vendors</Link>
                                </>;

                            case 'Accounts-Approver':
                                return <>
                                    <Link className="nav-link active text-white fs-6 fw-light " aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "5px", }} />My Vouchers</Link>

                                    <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list2')} style={ListStyle(showDetail['list2'])} ><FontAwesomeIcon icon={faNetworkWired} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Account Vouchers<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-30px", "transform": "translate(200px,6px)" }} /></Link>
                                    {showDetail['list2'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Accounts Voucher</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Bulk Payment</Link>


                                            {/* <Link className="nav-link active text-white border-bottom " aria-current="page" to="#" style={afterStyle}>Bulk Employee Upload</Link> */}
                                        </>
                                    )}


                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list3')} style={ListStyle(showDetail['list3'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />RTGS Payment Report </Link>


                                </>;

                            case 'Store-User':
                                return <>
                                    <Link className="nav-link active text-white fs-6 fw-light " aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "5px", }} />Inbox</Link>

                                    <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list2')} style={ListStyle(showDetail['list2'])} ><FontAwesomeIcon icon={faNetworkWired} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Purchase Orders</Link>

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list3')} style={ListStyle(showDetail['list3'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Purchase GRN </Link>

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list4')} style={ListStyle(showDetail['list4'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Direct PO</Link>
                                </>;

                            case 'Establishment-Admin':
                                return <>
                                    <Link className="nav-link active text-white fs-6 fw-light " aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "5px", }} />Establishment Transactions<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,-15px)" }} /></Link>
                                    {showDetail['list1'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Employee Register</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="/Upload-documents" style={afterStyle}>Scan-Upload Documents</Link>
                                            {/* <Link className="nav-link active text-white border-bottom " aria-current="page" to="#" style={afterStyle}>Bulk Employee Upload</Link> */}
                                        </>
                                    )}
                                    <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list2')} style={ListStyle(showDetail['list2'])} ><FontAwesomeIcon icon={faNetworkWired} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Establishment Setup<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
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
                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list3')} style={ListStyle(showDetail['list3'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Establishment Reports<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>

                                    {showDetail['list3'] && (
                                        <>
                                            <Link className="nav-link active text-white " aria-current="page" to="/employee-profile" style={afterStyle} >Employee Profile</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle} >Staff Report</Link>
                                        </>
                                    )}

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list4')} style={ListStyle(showDetail['list4'])} ><FontAwesomeIcon icon={faBook} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Service Book Details<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200,6px)" }} /></Link>

                                    {showDetail['list4'] && (
                                        <>
                                            <Link className="nav-link active text-white " aria-current="page" to="/transfer" style={afterStyle}>Transfer</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="/promotion" style={afterStyle}>Promotion</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="/service-status" style={afterStyle}> Service Status UPdate</Link>
                                            {/* <Link className="nav-link active text-white border-bottom" aria-current="page" to="#" style={afterStyle}>Request Approval</Link> */}
                                            <Link className="nav-link active text-white" aria-current="page" to="/service-register" style={afterStyle}>Service Register</Link>


                                        </>
                                    )}


                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list5')} style={ListStyle(showDetail['list5'])} ><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />New User Performa<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>


                                    {showDetail['list5'] && (
                                        <>
                                            <Link className="nav-link active text-white " aria-current="page" to="/sendregistrationlink" style={afterStyle}>Send Registration Link</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="/newemployeelist" style={afterStyle}>New Employee List</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>All Registered Employee</Link>

                                        </>
                                    )}

                                    <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#"><FontAwesomeIcon icon={faSuitcaseRolling} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Tour Application</Link>

                                </>
                            case 'Leave-Admin':
                                return <>
                                    <Link className="nav-link active text-white fs-6 fw-light pe-3" aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "5px" }} />Leave Managment<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-46px", "transform": "translate(200px,8px)" }} /></Link>
                                    {showDetail['list1'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Leave Master</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Leave Transaction</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Leave Report</Link>


                                            {/* <Link className="nav-link active text-white border-bottom " aria-current="page" to="#" style={afterStyle}>Bulk Employee Upload</Link> */}
                                        </>
                                    )}
                                </>;

                            case 'Payroll-Admin':
                                return <>
                                    <Link className="nav-link active text-white fs-6 fw-light " aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "5px"}} />Form 16<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,-15px)" }} /></Link>

                                    <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list2')} style={ListStyle(showDetail['list2'])} ><FontAwesomeIcon icon={faNetworkWired} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Employee Taxation<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                    {showDetail['list2'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Tax Master</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>tax Return and Estimation</Link>


                                            {/* <Link className="nav-link active text-white border-bottom " aria-current="page" to="#" style={afterStyle}>Bulk Employee Upload</Link> */}
                                        </>
                                    )}
                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list3')} style={ListStyle(showDetail['list3'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Advance Settings<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list4')} style={ListStyle(showDetail['list4'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Payroll Settings<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                    {showDetail['list4'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Accounts Mapping Double Entry</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Salary Head</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Salary Formula</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Salary Slab</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Subscriptions Setting</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>GIS Setting</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>PBR</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>PBR Handler</Link>
                                            {/* <Link className="nav-link active text-white border-bottom " aria-current="page" to="#" style={afterStyle}>Bulk Employee Upload</Link> */}
                                        </>
                                    )}
                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list5')} style={ListStyle(showDetail['list5'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Loan Settings<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                    {showDetail['list5'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Loan Settings</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Employee Loan Settings</Link>

                                        </>
                                    )}
                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list6')} style={ListStyle(showDetail['list6'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Payroll Reports<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                    {showDetail['list6'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Insurance Deduction Statement</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Payslip</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Monthly Paybill</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Component Wise</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Income Tax Deduction</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Income Tax Quarterly return</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Payroll Summary</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Bank Payments for Employees</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Loan Statements</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Salary Register</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>GIS Report</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Subscription Report</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>24Q and 26Q Form</Link>
                                            {/* <Link className="nav-link active text-white border-bottom " aria-current="page" to="#" style={afterStyle}>Bulk Employee Upload</Link> */}
                                        </>
                                    )}

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list7')} style={ListStyle(showDetail['list7'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Insurance Settings<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                </>;
                                ;

                            case 'Setup':
                                return <>
                                    <Link className="nav-link active text-white fs-6 fw-light " aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "5px", }} />Setup<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,-15px)" }} /></Link>
                                    {showDetail['list1'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Company</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Masters Code </Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Banks</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Geographical Locations</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Bank Branches</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Govt Order</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Configuration Master</Link>
                                            {/* <Link className="nav-link active text-white border-bottom " aria-current="page" to="#" style={afterStyle}>Bulk Employee Upload</Link> */}
                                        </>
                                    )}
                                    <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list2')} style={ListStyle(showDetail['list2'])} ><FontAwesomeIcon icon={faNetworkWired} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Work Flow<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                    {showDetail['list2'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Work Flow Type</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Work Flow</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Work Flow Priviledge</Link>

                                        </>
                                    )}

                                </>;

                            case 'Year-End':
                                return <>
                                    <Link className="nav-link active text-white fs-6 fw-light " aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "5px", }} />Year End<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,-15px)" }} /></Link>
                                    {showDetail['list1'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Payroll Settings</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Account Transaction</Link>
                                        </>
                                    )}
                                </>;;

                            case 'Project-Admin':

                                return <>
                                    <Link className="nav-link active text-white fs-6 fw-light " aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "5px", }} />Projects<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,-15px)" }} /></Link>
                                    {showDetail['list1'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Masters</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Projects</Link>

                                        </>
                                    )}

                                </>;
                            
                            case 'Salary-Performance':
                                return <>
                                    <Link className="nav-link active text-white fs-6 fw-light " aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "5px", }} />Insurances<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,-15px)" }} /></Link>

                                    <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list2')} style={ListStyle(showDetail['list2'])} ><FontAwesomeIcon icon={faNetworkWired} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Employee Taxation<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                    {showDetail['list2'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Tax Master</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>tax Return and Estimation</Link>


                                            {/* <Link className="nav-link active text-white border-bottom " aria-current="page" to="#" style={afterStyle}>Bulk Employee Upload</Link> */}
                                        </>
                                    )}
                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list3')} style={ListStyle(showDetail['list3'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Loan/Advances<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list4')} style={ListStyle(showDetail['list4'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Payroll Desk<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list5')} style={ListStyle(showDetail['list5'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Salaries<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list6')} style={ListStyle(showDetail['list6'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Subscriptions<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>




                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list7')} style={ListStyle(showDetail['list7'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />PBR Employees<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list8')} style={ListStyle(showDetail['list7'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Form 16<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list9')} style={ListStyle(showDetail['list7'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Send Payslips by email<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list10')} style={ListStyle(showDetail['list7'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Payroll Reports<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                    {showDetail['list10'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Insurance Deduction Statement</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Payslip</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Monthly Paybill</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Component Wise</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Income Tax Deduction</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Income Tax Quarterly return</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Payroll Summary</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Bank Payments for Employees</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Loan Statements</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Salary Register</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>GIS Report</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Subscription Report</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>24Q and 26Q Form</Link>
                                            {/* <Link className="nav-link active text-white border-bottom " aria-current="page" to="#" style={afterStyle}>Bulk Employee Upload</Link> */}
                                        </>
                                    )}
                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list11')} style={ListStyle(showDetail['list7'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Employee GIS<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list12')} style={ListStyle(showDetail['list7'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Salary Arrears<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
                                    {showDetail['list12'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Arrear Order</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Process Orders</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Arrear Reports</Link>

                                        </>
                                    )}

                                </>;



                                ;

                            case 'Purchase-Approvers':
                                return <>
                                    <Link className="nav-link active text-white fs-6 fw-light " aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "5px", }} />Inbox<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,-15px)" }} /></Link>

                                    <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list2')} style={ListStyle(showDetail['list2'])} ><FontAwesomeIcon icon={faNetworkWired} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Purchase Orders<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list3')} style={ListStyle(showDetail['list3'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Purchase GRN <FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list4')} style={ListStyle(showDetail['list3'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Tenders<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list4')} style={ListStyle(showDetail['list3'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Vendors<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>

                                    <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list4')} style={ListStyle(showDetail['list3'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Store Indent<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>


                                </>;

                            case 'Store-Purchase-Admin':
                            return <>
                                <Link className="nav-link active text-white fs-6 fw-light " aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "5px", }} />Purchase Masters<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,-15px)" }} /></Link>
                                {showDetail['list1'] && (
                                    <>
                                        <Link className="nav-link active text-white  " aria-current="page" to="/employee-register" style={afterStyle}>Employee Register</Link>
                                        <Link className="nav-link active text-white " aria-current="page" to="/Upload-documents" style={afterStyle}>Scan-Upload Documents</Link>
                                        {/* <Link className="nav-link active text-white border-bottom " aria-current="page" to="#" style={afterStyle}>Bulk Employee Upload</Link> */}
                                    </>
                                )}
                                <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list2')} style={ListStyle(showDetail['list2'])} ><FontAwesomeIcon icon={faNetworkWired} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Store  Masters<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>
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
                                <Link className="sidenavheading nav-link active text-white fs-6 fw-light " aria-current="page" to="#" onClick={() => showList('list3')} style={ListStyle(showDetail['list3'])} ><FontAwesomeIcon icon={faPen} style={{ "--fa-primary-opacity": "0.9", "paddingRight": "8px" }} />Store and Purchase Settings<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>

                                {showDetail['list3'] && (
                                    <>
                                        <Link className="nav-link active text-white " aria-current="page" to="/employee-profile" style={afterStyle} >Employee Profile</Link>
                                        <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle} >Staff Report</Link>
                                    </>
                                )}

                                <Link className="sidenavheading nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list4')} style={ListStyle(showDetail['list4'])} ><FontAwesomeIcon icon={faBook} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Store Reports<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>

                                {showDetail['list4'] && (
                                    <>
                                        <Link className="nav-link active text-white " aria-current="page" to="/transfer" style={afterStyle}>Transfer</Link>
                                        <Link className="nav-link active text-white " aria-current="page" to="/promotion" style={afterStyle}>Promotion</Link>
                                        <Link className="nav-link active text-white " aria-current="page" to="/service-status" style={afterStyle}> Service Status UPdate</Link>
                                        {/* <Link className="nav-link active text-white border-bottom" aria-current="page" to="#" style={afterStyle}>Request Approval</Link> */}
                                        <Link className="nav-link active text-white" aria-current="page" to="/service-register" style={afterStyle}>Service Register</Link>


                                    </>
                                )}


                                <Link className="sidenavheading nav-link active text-white fs-6 fw-light" aria-current="page" to="#" onClick={() => showList('list5')} style={ListStyle(showDetail['list5'])} ><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Return to Store<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,6px)" }} /></Link>


                                {showDetail['list5'] && (
                                    <>
                                        <Link className="nav-link active text-white " aria-current="page" to="/sendregistrationlink" style={afterStyle}>Send Registration Link</Link>
                                        <Link className="nav-link active text-white " aria-current="page" to="/newemployeelist" style={afterStyle}>New Employee List</Link>
                                        <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>All Registered Employee</Link>

                                    </>
                                )}

                                <Link className="nav-link active text-white fs-6 fw-light" aria-current="page" to="#"><FontAwesomeIcon icon={faSuitcaseRolling} style={{ "--fa-primary-opacity": "0.9", "marginRight": "10px" }} />Asset Code</Link>

                            </>
                                ;

                            case 'Performance-Admin':
                                return <>
                                    <Link className="nav-link active text-white fs-6 fw-light " aria-current="page" onClick={() => showList('list1')} style={ListStyle(showDetail['list1'])} ><FontAwesomeIcon icon={faFolder} style={{ "--fa-primary-opacity": "0.9", "marginRight": "5px", }} />Performance Assessment Admin<FontAwesomeIcon icon={faAngleDown} style={{ "paddingLeft": "10px", "position": "absolute", "left": "-10px", "transform": "translate(200px,-15px)" }} /></Link>
                                    {showDetail['list1'] && (
                                        <>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Rating Scale Definition</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Rating Scale </Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Parameter Group</Link>
                                            <Link className="nav-link active text-white " aria-current="page" to="#" style={afterStyle}>Evaluation Item</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Assessment Form</Link>
                                            <Link className="nav-link active text-white  " aria-current="page" to="#" style={afterStyle}>Employment Performance Assessment</Link>

                                        </>
                                    )}
                                </>;
                            
                            
                            default:
                                return <p>Unknown Account Type</p>;
                        }
                    })()}
                </nav>

            </div>
        </div>
    )
}

export default SideNavbar
