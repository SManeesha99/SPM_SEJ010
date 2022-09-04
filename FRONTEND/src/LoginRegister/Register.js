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
                        <div class='row fullname'>
                            <div class="col-sm-6">
                                <label>First Name</label>
                                <input class="form-control" placeholder='First Name'></input>
                            </div>
                            <div class="col-sm-6">
                                <label>Last Name</label>
                                <input class="form-control" placeholder='Last Name'></input>
                            </div>
                        </div>
                        
                    </div>
                    <div className='name'>
                        <label>Mobile Number</label>
                        <input class="form-control" placeholder='Mobile Number'></input>
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
                        <input class="form-control" placeholder='Email'></input>
                    </div>
                    <div className='name'>
                        <label>Password</label>
                        <input class="form-control" placeholder='Password'></input>
                    </div>

                    <div class="form-group chk">
                        <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="gridCheck"/>
                        <p class="chkA">
                        I agree that I have read and accepted the Terms of Use and
                            <a type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Privacy Policy
                            </a>
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


        {/* ================model=============== */}

        

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>

        {/* ================model=============== */}


    </div>
  )
}
