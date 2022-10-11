import React, { Component } from 'react';
import './home.css';
import Header from '../Header/Header';
import { useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert";

export default class HomeLogged extends Component {


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

}

  render() {
    return (
      <div>
        <Header/> 

        
      <div className='HomeArea'>

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
              <button className='addcrtbtn'>Add to Cart {courses.cprice}</button>
              </div>
              
          </div>


        </div>

      )}

        </div>

      </div>
    )
  }
}

