import React from 'react';
import './dashboard.css';
import {NavLink,Link} from 'react-router-dom';

export default function Dsahboard() {
  return (
    <div>

        <div class="sidebar">
            <ul>
                <li><NavLink class="nav-link" to={"/Adminhome"}>Home</NavLink></li>
                <li><NavLink class="nav-link" to={"/TopcourseRequest"}>Top Course</NavLink></li>
                <li><NavLink class="nav-link" to={"fg"}>Top Course</NavLink></li>
                <li><NavLink class="nav-link" to={"gf"}>Top Course</NavLink></li>
            </ul>

        </div>

    </div>
  )
}
