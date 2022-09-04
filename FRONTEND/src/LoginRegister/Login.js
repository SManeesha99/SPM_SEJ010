import React from 'react';
import NotRegHeader from '../Header/notRegHeader';
import './loginRegister.css'

export default function Login() {
  return (
    <div>
        <div className='registerArea'>
            <NotRegHeader/>
            <center>
            <div className='regArea'>
                <h2>Login Now</h2>
                <div className='regui'>
                    
                    <div className='name'>
                        <label>Email</label>
                        <input placeholder='Enter Your Email'></input>
                    </div>
                    <div className='name'>
                        <label>Password</label>
                        <input placeholder='Enter Your Password'></input>
                    </div>
                </div>

                <button class='btn btn-primary'>Login</button>

                <hr/>
                <p>Already haven't an account? <a href='#'>Register</a></p>


            </div>
            </center>

            </div>
    </div>
  )
}