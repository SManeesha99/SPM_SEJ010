import React from 'react';
import NotRegHeader from '../Header/notRegHeader';
import './loginRegister.css'

export default function () {
  return (
    <div>
        <div className='registerArea'>

        <NotRegHeader/>
            <center>
            <div className='regArea'>
                <h2>Register Now</h2>
                <div className='regui'>
                    <div className='name'>
                        <label>User Name</label>
                        <input placeholder='Enter Your User Name'></input>
                    </div>
                    <div className='name'>
                        <label>Mobile Number</label>
                        <input placeholder='Enter Your Mobile Number'></input>
                    </div>
                    <div className='name'>
                        <label>Email</label>
                        <input placeholder='Enter Your Email'></input>
                    </div>
                    <div className='name'>
                        <label>Password</label>
                        <input placeholder='Enter Your Password'></input>
                    </div>
                </div>

                <button class='btn btn-primary'>Register</button>

                <hr/>
                <p>Already have an account? <a href='#'>Log in</a></p>


            </div>
            </center>

        </div>
    </div>
  )
}
