import React, { Component } from 'react';
import './home.css';
import HeaderS from '../Header/HeaderS';
import { useState ,useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import axios from "axios";
import {NavLink} from 'react-router-dom';
import swal from "sweetalert";

export default class HomeLoggedS extends Component {

  constructor(props) {
    super (props);

    this.state={
        courses:[]
    };
}


componentDidMount(){
  this.retrieveCourses();
}

retrieveCourses(){
        
  axios.get("http://localhost:8090/Courses").then(res =>{
      if(res.data){
          this.setState({
              courses:res.data
          });

          console.log(this.state.courses)
      }
  });

};


onSubmitCart = (id) =>{
  axios.put(`http://localhost:8090/Courses/cart/${id}`).then((res)=>{
    alert("Course carted Successfully");
    this.retrieveCourses();
});
};

handleTextSearch =(e)=>{
    const searchTerm = e.currentTarget.value;
    axios.get("http://localhost:8090/Courses").then(res => {
        if(res.data){ 
            this.filterContent(res.data , searchTerm)
        }
    });
  }; 
  
  filterContent(courses, searchTerm){
    const result = courses.filter(
        (courses) => 
        courses.ctitle.toLowerCase().includes(searchTerm)
    );
    this.setState({ courses: result });
  }

  render() {
    return (
      <div>
            <div>
        <nav class="navbar navbar-expand-lg bg-light navbar fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" onChange={this.handleTextSearch} placeholder="Search" aria-label="Search"/>
                <button class="btn searchbtn" type="submit">Search</button>
            </form>
            <button className='tpCoursebtn'><NavLink class="nav-link" to={"/TopCourse"}>Top Course</NavLink></button>
            <div class="collapse navbar-collapse rightheder" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/Cart"}><i class="fa fa-shopping-cart cart" aria-hidden="true"></i></Link>
                </li>
                <span>0</span>
                <li class="nav-item">

                {/* <a class="nav-link" href="#"><div className='profilearea'></div></a> */}
                  <div class="dropdown">
                  <button class="btn btn-secondary  profilearea" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    
                  </button>
                  <ul class="dropdown-menu">

                    <li><a class="dropdown-item" href="/homeLoggedS">Home</a></li>
                    <li><a class="dropdown-item" href="/editProfileS">Profile</a></li>
                    <li><a class="dropdown-item" href="">My Courses</a></li>
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

        
      <div className='HomeArea'>
{/* <h1>{this.uid}</h1> */}
      {this.state.courses.map((courses, index) =>

        <div className="card homevideocontainer" key={index}>

          <Link className="nav-link active" aria-current="page" to={`/viewCourse/${courses._id}`}>

          <div className="card-header">
          {courses.ctitle}
                    
          </div>

          <div className="card-body">
            
            {/* <img src="./images/dddd.jpg" alt="" /> */}

            <video src="./Videos/tujhe.mp4" controls = "video/mp4"></video>

          </div>
          

          </Link>

          <div className="card-footer">
             <div className='profileArea'>

                <div className='pro'>

                </div>
                <div className='nameN'>
                  <h2>{courses.InstructorfName} {courses.InstructorlName}</h2>
                  <p>{courses.uploadAt}</p>
                  
                </div>

            </div>
              <div className='discri'>

              {courses.cdescription}

              </div> 
              
              <br />

              <div>
              <button className='addcrtbtn' onClick={()=> this.onSubmitCart(courses._id)}>Add to Cart {courses.cprice}</button>
              </div>
              
          </div>


        </div>

      )}

        </div>

      </div>
    )
  }
}

