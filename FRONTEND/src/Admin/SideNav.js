import React from 'react';

export default function SideNav() {
  return (
    <nav id="sidebar" class="sidebar">

            

            <div class="sidebar-content">
                <div class="sidebar-user">
                    <div> </div>
                    <div class="fw-bold">Hirusha Ravishan</div>
                    <small>Customer Manager</small>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>





                <ul class="sidebar-nav">
                    <li class="sidebar-item ">
                        
                            <i class="align-middle me-2 fas fa-fw fa-home"></i> <span class="align-middle">Dashboards</span>
                        

                    </li>

                    <li class="sidebar-item ">
                        <a data-bs-target="#customer" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle me-2 fas fa-fw fa-user-friends"></i> <span class="align-middle">Customers</span>
                        </a>
                        <ul id="customer" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                            <li class="sidebar-item">Add Custome</li>
                            <li class="sidebar-item">View Customers</li>
                        </ul>
                    </li>

                    <li class="sidebar-item">
                        <a data-bs-target="#sim" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle me-2 fas fa-fw fa-file-download"></i> <span class="align-middle">Appointment</span>
                        </a>
                        <ul id="sim" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                            <li class="sidebar-item">Add Appointment</li>
                            <li class="sidebar-item">View Appointment</li>
                        </ul>
                    </li>

                    <li class="sidebar-item">
                        <a data-bs-target="#package" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle me-2 fas fa-fw fa-bookmark"></i> <span class="align-middle">Vehicle Booking</span>
                        </a>
                        <ul id="package" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                            <li class="sidebar-item">Add Booking</li>
                            <li class="sidebar-item">View Booking</li>
                        </ul>
                    </li>

                    <li class="sidebar-item ">
                        
                            <i class="align-middle me-2 fas fa-fw fa-home"></i> <span class="align-middle">Report</span>
                        
                    </li>

                    <li class="sidebar-item ">
                        
                            <i class="align-middle me-2 fas fa-fw fa-home"></i> <span class="align-middle">Log Out</span>
                        
                    </li>





                </ul>
            </div>
        </nav>
  )
}