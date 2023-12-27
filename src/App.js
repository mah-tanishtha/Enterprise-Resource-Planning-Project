import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Establishment-Admin/Login';
import Dashboard from './pages/Establishment-Admin/Dashboard';
import DashNavbar from './components/DashNavbar';
import StaffType from './pages/Establishment-Admin/StaffType';
import LandingPage from './pages/Establishment-Admin/LandingPage';
import EmployeeForm from './pages/Establishment-Admin/EmployeeForm';
import UploadDocuments from './pages/Establishment-Admin/UploadDocuments';
import DocumentData from './FormData/DocumentData';
import EmployeeType from './pages/Establishment-Admin/EmployeeType';
import DepartmentType from './pages/Establishment-Admin/DepartmentType';
import Designation from './pages/Establishment-Admin/Designation';
import QualificationType from './pages/Establishment-Admin/QualificationType';
import DocumentList from './pages/Establishment-Admin/DocumentList'
import SubEmployeeType from './pages/Establishment-Admin/SubEmployeeType';
import EmployeeProfile from './pages/Establishment-Admin/EmployeeProfile';
import Transfer from './pages/Establishment-Admin/Transfer';
import Promotion from './pages/Establishment-Admin/PromotionDetails';
import ServiceStatus from './pages/Establishment-Admin/ServiceStatus';
import ServiceRegister from './pages/Establishment-Admin/ServiceRegister';
import TransferDetail from './pages/Establishment-Admin/TransferF/TransferDetail';
import EmployeeIncrement from './pages/Establishment-Admin/Promotion/EmployeeIncrement';
import EmployeePromotion from './pages/Establishment-Admin/Promotion/EmployeePromotion';
import EmployeeTypeAdd from './pages/Establishment-Admin/TransferF/TransferDetail';
import StaffTypeAdd from './pages/Establishment-Admin/StaffType/StaffTypeAdd';
import DeptTypeAdd from './pages/Establishment-Admin/DepartmentType/DeptTypeAdd';
import AddDesignation from './pages/Establishment-Admin/AddDesignation/AddDesignation';
import AddQualificationType from './pages/Establishment-Admin/AddQualificationType/AddQualificationType';
import AddDocumentList from './pages/Establishment-Admin/AddDocumentList/AddDocumentList';
import AddSubEmployeeType from './pages/Establishment-Admin/AddSubEmployeeType/AddSubEmployeeType'
import AddServiceStatus from './pages/Establishment-Admin/AddServiceStatus/AddServiceStatus';
import AccountChange from './pages/Account-Change/AccountChange';
import PastOrganization from './pages/Establishment-Admin/Past-Organization/PastOrganization';
import AddPastOrganization from './pages/Establishment-Admin/Past-Organization/AddPastOrganization';
import JobLocation from './pages/Establishment-Admin/Job-Location/JobLocation';
import AddJobLocation from './pages/Establishment-Admin/Job-Location/AddJobLocation';
import SendRegistraionLink from './pages/Establishment-Admin/NewUserModule/SendRegistraionLink';
import UserFormDetail from './pages/Establishment-Admin/NewUserModule/UserFormDetail';
import NewEmployeeList from './pages/Establishment-Admin/NewUserModule/NewEmployeeList';
import EmployeeRegister from './pages/Establishment-Admin/EmployeeRegister/EmployeeRegister';
import PageSwitch from './pages/Account-Change/PageSwitch';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/landingpage" element={
            <>
              <LandingPage />


            </>
          } />

          <Route path="/" element={
            <>
              <Login />
            </>
          } />
        </Routes>
        <Routes>
          <Route path='/dashboard/:AccountName' element={<>
            <DashNavbar />
            <Dashboard />
          </>} />
        </Routes>
        <Routes>
          <Route path='/employee-register' element={
            <>
              <DashNavbar />
              <EmployeeRegister />
            </>
          }
          />
          <Route path='/upload-documents' element={
            <>
              <DashNavbar />
              <UploadDocuments />
            </>
          }
          />
          <Route path='/documents-data' element={
            <>
              <DashNavbar />
              <DocumentData />
            </>
          }
          />
          <Route path='/employee-type' element={
            <>
              <DashNavbar />
              <EmployeeType />
            </>
          }
          />
          <Route path='/staff-type' element={
            <>
              <DashNavbar />
              <StaffType />
            </>
          }
          />
          <Route path='/department-type' element={
            <>
              <DashNavbar />
              <DepartmentType />
            </>
          }
          />

          <Route path='/designation' element={
            <>
              <DashNavbar />
              <Designation />
            </>
          }
          />

          <Route path='/qualification' element={
            <>
              <DashNavbar />
              <QualificationType />
            </>
          }
          />
          <Route path='/document-list' element={
            <>
              <DashNavbar />
              <DocumentList />
            </>
          }
          />

          <Route path='/subemployee-type' element={
            <>
              <DashNavbar />
              <SubEmployeeType />
            </>
          }
          />

          <Route path='/employee-profile' element={
            <>
              <DashNavbar />
              <EmployeeProfile />
            </>
          }
          />
          <Route path='/transfer' element={
            <>
              <DashNavbar />
              <Transfer />
            </>
          }
          />

          <Route path='/promotion' element={
            <>
              <DashNavbar />
              <Promotion />
            </>
          }
          />

          <Route path='/service-status' element={
            <>
              <DashNavbar />
              <ServiceStatus />
            </>
          }
          />

          <Route path='/service-register' element={
            <>
              <DashNavbar />
              <ServiceRegister />
            </>
          }
          />
        </Routes>

        <Routes>
          <Route path='/transferemp' element={
            <>
              <DashNavbar />
              <TransferDetail />
            </>
          }
          />

        </Routes>
        <Routes>
          <Route path='/employeepromotion' element={
            <>
              <DashNavbar />
              <EmployeePromotion />
            </>
          }
          />

        </Routes>
        <Routes>
          <Route path='/employeeincrement' element={
            <>
              <DashNavbar />
              <EmployeeIncrement />
            </>
          }
          />

        </Routes>
        <Routes>
          <Route path='/employeeAddType' element={
            <>
              <DashNavbar />
              <EmployeeTypeAdd />
            </>
          }
          />
          <Route path="/stafftypeAdd" element={
            <>
              <DashNavbar />
              <StaffTypeAdd />
            </>
          } />
          <Route path="/depttypeAdd" element={
            <>
              <DashNavbar />
              <DeptTypeAdd />
            </>
          } />

          <Route path="/AddDesignation" element={
            <>
              <DashNavbar />
              <AddDesignation />
            </>
          } />

          <Route path="/addQualificationType" element={
            <>
              <DashNavbar />
              <AddQualificationType />
            </>
          } />

          <Route path="/AddDocumentList" element={
            <>
              <DashNavbar />
              <AddDocumentList />
            </>
          } />

          <Route path="/addSubEmpType" element={
            <>
              <DashNavbar />
              <AddSubEmployeeType />
            </>
          } />
          <Route path="/addServiceStatus" element={
            <>
              <DashNavbar />
              <AddServiceStatus />
            </>
          } />

          <Route path="/accountchange" element={
            <>
              <DashNavbar />
              <AccountChange />
            </>
          } />

          <Route path="/past-org-dept" element={
            <>
              <DashNavbar />
              <PastOrganization />
            </>
          } />
           <Route path="/AddPastOrganization" element={
            <>
              <DashNavbar />
              <AddPastOrganization/>
            </>
          } />
          <Route path="/JobLocation" element={
            <>
              <DashNavbar />
              <JobLocation/>
            </>
          } />
          <Route path="/AddJobLocation" element={
            <>
              <DashNavbar />
              <AddJobLocation/>
            </>
          } />
          <Route path="/sendregistrationlink" element={
            <>
              <DashNavbar />
              <SendRegistraionLink/>
            </>
          } />
          <Route path="/userformdetail" element={
            <>
              <DashNavbar />
              <UserFormDetail/>
            </>
          } />
          <Route path="/leaveDashboardPage" element={
            <>
              <DashNavbar />
              <UserFormDetail/>
            </>
          } />
           <Route path="/newemployeelist" element={
            <>
              <DashNavbar />
              <NewEmployeeList/>
            </>
          } />
           <Route path="/page-switch/:LinkPara" element={
            <>
              <DashNavbar />
              <PageSwitch/>
            </>
          } />
        </Routes>






      </Router>
    </div>
  );
}

export default App;

