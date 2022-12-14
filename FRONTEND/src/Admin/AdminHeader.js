import React from 'react';
import './AdminHeader.css';

export default function AdminHeader() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light navbar fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn searchbtn" type="submit">Search</button>
            </form>
            <div class="collapse navbar-collapse rightheder" id="navbarSupportedContent">
            <ul class="navbar-nav">
                
                <li class="nav-item">

                {/* <a class="nav-link" href="#"><div className='profilearea'></div></a> */}
                  <div class="dropdown">
                  <button class="btn btn-secondary  profilearea" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/request">Home</a></li>
                    <li><a class="dropdown-item" href="/adminProfile">Profile</a></li>
                    <li><a class="dropdown-item" href="/studentPayment">Student Payments</a></li>
                    <li><a class="dropdown-item" href="/searchUsers/instructors">User Profiles</a></li>
                    <li><a class="dropdown-item" href="/allCourseView">All Courses</a></li>
                    <li><a class="dropdown-item" href="/alloffer">All Offer</a></li>
                    <hr/>
                    <li><a class="dropdown-item" href="/" onClick={localStorage.clear}>Sign Out</a></li>
                  </ul>
                  </div>

                </li>
                
            </ul>

              
            
            
            </div>
        </div>
        </nav>
    </div>
  )
}
