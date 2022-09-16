import React from 'react';
import NotRegHeader from '../Header/notRegHeader';
import './loginRegister.css';
import {Link} from 'react-router-dom';

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
                        <input class="form-control" placeholder='Enter Your Email'></input>
                    </div>
                    <div className='name'>
                        <label>Password</label>
                        <input class="form-control" placeholder='Enter Your Password'></input>
                    </div>
                </div>

                <button class='btn btn-primary'><Link to={'/adminProfile'} style={{textDecoration:'none', color:'white'}}>Login</Link></button>

                <hr/>
                <p>Already haven't an account? <Link className="nav-link active" aria-current="page" to="/register">Register</Link></p>


            </div>
            </center>

            </div>
    </div>
  )
}
