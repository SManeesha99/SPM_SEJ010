import React from 'react';
import './header.css';

export default function BHeader() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light navbar fixed-top Bheader">
        <div class="container-fluid">
            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    
                    <li class="nav-item">
                    <button type='button' class="nav-link" href="#">Instructors</button>
                    </li>
                    <li class="nav-item">
                    <button type='button' class="nav-link " href="#">Students</button>
                    </li>
                    
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}
