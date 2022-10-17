import React, { useEffect, useState } from 'react';
import './header.css';
import {NavLink,Link} from 'react-router-dom';
import axios from 'axios'

export default function HeaderS(props) {

  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get("http://localhost:8090/Cart/viewCart/" + localStorage.getItem("id")).then(res =>{
      if(res.data){
          
          setCount(res.data.length)
      }
  });
  })

    
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
            <button className='tpCoursebtn'><NavLink class="nav-link" to={"/TopCourse"}>Top Course</NavLink></button>
            <div class="collapse navbar-collapse rightheder" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/Cart"}><i class="fa fa-shopping-cart cart" aria-hidden="true"></i></Link>
                </li>
                <span>{count}</span>
                <li class="nav-item">

                {/* <a class="nav-link" href="#"><div className='profilearea'></div></a> */}
                  <div class="dropdown">
                  <button class="btn btn-secondary  profilearea" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    
                  </button>
                  <ul class="dropdown-menu drpdwn">

                    <li><a class="dropdown-item" href="/homeLoggedS">Home</a></li>
                    <li><a class="dropdown-item" href="/studentProfile">Profile</a></li>
                    <li><a class="dropdown-item" href="/Smycourses">My Courses</a></li>
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
