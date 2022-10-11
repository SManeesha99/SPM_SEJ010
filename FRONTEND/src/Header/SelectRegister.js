import React from 'react';
import './header.css';
import {NavLink,Link} from 'react-router-dom';
import NotRegHeaderWithSearch from './NotRegHeaderWithSearch';

export default function SelectRegister() {
  return (
    <div>
        <NotRegHeaderWithSearch/> 
        <div className="section-container">
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Instructor Sign Up</h3>
                  <p>
                    Applicant User Profile allows you to edit user profiles,
                    search for jobs, apply them, view their statuses and much more.
                  </p>
                  <Link aria-current="page" to={"/registerInstructor"}>Register as Instructor</Link>
                </div>
              </div>
            </div>
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Student Sign Up</h3>
                  <p>
                    Applicant User Profile allows you to edit user profiles,
                    search for jobs, apply them, view their statuses and much more.
                  </p>
                  <Link aria-current="page" to={"/registerStudent"}>Register as Student</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
  
  )
}