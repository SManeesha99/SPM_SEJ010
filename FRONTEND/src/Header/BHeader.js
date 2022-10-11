import React from 'react';
import './header.css';
import {NavLink} from 'react-router-dom';

export default function BHeader() {

    // const navLinksStyles = ({ isActive }) => {
    //     return{
    //         color: isActive ? 'black' : 'white',
    //         border: isActive ? 'red':'rgb(112, 112, 112)',
    //     }
    // }

  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light navbar fixed-top Bheader">
        <div class="container-fluid">
            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    
                    <li class="nav-item">
                    <NavLink  to={"/searchUsers/instructors"} >Instructors</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink  to={"/searchUsers/students"} >Students</NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}
