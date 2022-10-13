import React from 'react';
import '../Header/header.css';
import {NavLink,Link} from 'react-router-dom';
import NotRegHeaderWithSearch from '../Admin/AdminHeader';

export default function Requests() {
  return (
    <div>
        <NotRegHeaderWithSearch/> 
        <div className="section-container">
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Instructor Regiter Request</h3>
                  <Link aria-current="page" to={"/instructorReqReg"}>View Request</Link>
                </div>
              </div>
            </div>
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Course Request</h3>
                  <Link aria-current="page" to={"#"}>View Request</Link>
                </div>
              </div>
            </div>
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Top Course Request</h3>
                  <Link aria-current="page" to={"/TopcourseRequest"}>View Request</Link>
                </div>
              </div>
            </div>
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Offer Request</h3>
                  <Link aria-current="page" to={"/loginStudent"}>View Request</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
  )
}
