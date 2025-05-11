import React, { useState } from 'react'
import '../Establishment-Admin/styles/Login.css'
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Dashboard from './Dashboard'
import DashNavbar from '../../components/DashNavbar';
import Navbar from '../../components/Navbar';


function Login() {

    
    const uname = useRef()
    const password = useRef()
   
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = () => {
        if (uname.current.value === 'abc' && password.current.value === '12345') {
            localStorage.setItem("unameData", "abc")
            localStorage.setItem("passwordData", "12345")
            setIsAuthenticated(true);
        }
        
    
    }

  

    
    return (
        <div>
            {isAuthenticated ?
                <><DashNavbar />
                    <Dashboard />
                </> :
                <>
                    <Navbar />
                    <div className='login'>
                        <div className='form-box'>
                            <h1 id='title'>User Login</h1>
                            <form method='' action='' onSubmit={handleSubmit}>
                                <div className='input-group1'>
                                    <div className='input-field'>
                                        <label for='uname'>Username</label>
                                        <FontAwesomeIcon className='i' icon={faUser} />
                                        <input type='text' placeholder='Username' ref={uname} />


                                    </div>
                                    <div className='input-field'>
                                        <label>Password</label>
                                        <FontAwesomeIcon className='i' icon={faLock} />
                                        <input type='password' placeholder='Password' ref={password} />

                                    </div>
                                    <div className='input-field recaptcha'>
                                        <ReCAPTCHA
                                            sitekey="6LfbAv8nAAAAAPaIlYRMCVYalPSufAPqOG4EOO3n"
                                            
                                        />
                                    </div>
                                    <div className='btn-field'>
                                        <button className='btn btn-primary'>Sign In</button>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Login;
