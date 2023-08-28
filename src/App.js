import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashNavbar from './components/DashNavbar';
import Create_Employee from './pages/Create_Employee';
import LandingPage from './pages/LandingPage';


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
              <Navbar />
              <Login />
            </>
          } />
        </Routes>
        <Routes>
          <Route path='/dashboard' element={<>
            <DashNavbar/>
            <Dashboard/>
            </>}/>
        </Routes>
        <Routes>
          <Route path='/create-employee' element={
            <>
              <DashNavbar/>
              <Create_Employee/>
              </>
          }
          
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

