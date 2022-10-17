import React from 'react';
import './dashboard.css';
import {NavLink,Link} from 'react-router-dom';

export default function Dsahboard() {
  return (
    <div>

        <div class="sidebar">
            <ul>
                <li><NavLink class="nav-link" to={"/request"}>Home</NavLink></li>
                <li><NavLink class="nav-link" to={"/TopcourseRequest"}>Top Course</NavLink></li>
                <li><NavLink class="nav-link" to={"/ApproveCourses"}>New Course Requests</NavLink></li>
                <li><NavLink class="nav-link" to={"/OfferRequest"}>New Offer Requests</NavLink></li>
                <li><NavLink class="nav-link" to={"/studentPayment"}>Student Payments</NavLink></li>
                <li><NavLink class="nav-link" to={"/instructorPayment"}>Instructor Payments</NavLink></li>
            </ul>

        </div>

    </div>
  )
}
