import React, { Component } from 'react';
import '../Home/home.css';
import Header from '../Admin/AdminHeader';
import Dsahboard from '../AdminDashboard/Dsahboard';
import { useState ,useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert";
import './viewallcourrse.css';

export default class ViewAllCourses extends Component {

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
        
  axios.get("http://localhost:8090/Courses/approvedCourses").then(res =>{
      if(res.data){
          this.setState({
              courses:res.data,
              count: res.data.length
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

  render() {
    return (
      <div>
        <Header/> 
        <Dsahboard/>
<div className='payarea'>
        <h1>All Course</h1>
            <button  class="btn btn-primary greport" ><Link to={"/stureport"}>Generate Report</Link></button>

        
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

      </div>
    )
  }
}

