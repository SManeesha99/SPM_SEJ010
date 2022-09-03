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
                        <input class="form-control" placeholder='Enter Your User Name'></input>
                    </div>
                    <div className='name'>
                        <label>Mobile Number</label>
                        <input class="form-control" placeholder='Enter Your Mobile Number'></input>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Instrutor or Student</label>
                        <select class="form-control selectstNin" id="exampleFormControlSelect1">
                        <option>Instrutor</option>
                        <option>Student</option>
                        </select>
                    </div>

                    <div className='name'>
                        <label>Email</label>
                        <input class="form-control" placeholder='Enter Your Email'></input>
                    </div>
                    <div className='name'>
                        <label>Password</label>
                        <input class="form-control" placeholder='Enter Your Password'></input>
                    </div>

                    <div class="form-group chk">
                        <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="gridCheck"/>
                        <p class="chkA">
                        I agree that I have read and accepted the Terms of Use and Privacy Policy.
                        </p>
                        </div>
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
