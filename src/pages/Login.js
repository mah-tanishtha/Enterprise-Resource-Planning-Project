import React from 'react'
import '../styles/Login.css'
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';


function Login() {
    const onChange = ()=>{
        
    }
   
    return (
        <div>
            <div className='login'>
                <div className='form-box'>
                    <h1 id='title'>User Login</h1>
                    <form method='' action=''>
                        <div className='input-group1'>
                            <div className='input-field'>
                                <label>Username</label>
                                <FontAwesomeIcon className='i' icon={faUser} />
                                <input type='text'  placeholder='Username' />
                                
                                
                            </div>
                            <div className='input-field'>
                                <label>Password</label>
                                <FontAwesomeIcon className='i' icon={faLock} />
                                <input type='password'  placeholder='Password'/>
                                
                            </div>
                            <div className='input-field recaptcha'>
                                <ReCAPTCHA
                                    sitekey="6LfHtq0nAAAAAEhtvF_XiVOR7yj-eREXARsdm_0G"
                                    onChange={onChange}
                                />
                            </div>
                            <div className='btn-field'>
                                <button type='submit'className='btn btn-primary'>Sign In</button>
                            </div>
                        </div>
                        
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login
