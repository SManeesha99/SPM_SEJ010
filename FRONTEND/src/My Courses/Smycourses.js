import React, { Component } from 'react';
import '../Home/home.css';
import HeaderS from '../Header/HeaderS';
import { useState ,useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import axios from "axios";
import '../Instructor Profile/allCoursesView.css';
import {NavLink} from 'react-router-dom';
import swal from "sweetalert";

export default class Smycourses extends Component {

  studentId =localStorage.getItem("id");

  constructor(props) {
    super (props);

    this.state={
      scourse:[]
    };
}

componentDidMount(){
  this.scourse();
}

scourse(){
        
  axios.get("http://localhost:8090/Payment/viewCourse/" + localStorage.getItem("id")).then(res =>{
      if(res.data){
          
          this.setState({
            scourse:res.data,
            count: res.data.length
          });

          console.log(this.state.scourse)
      }
  });

}

onDelete = (id) =>{

  axios.delete(`http://localhost:8090/Payment/delete/${id}`).then((res)=>{

      this.scourse();

      swal({
        title: "Success!",
        text: "Course Remove Successfull",
        icon: 'success',
        timer: 2000,
        button: false,
      });

  });

};

handleTextSearch =(e)=>{
    const searchTerm = e.currentTarget.value;
    axios.get("http://localhost:8090/Payment/").then(res => {
        if(res.data){ 
            this.filterContent(res.data , searchTerm)
        }
    });
  }; 
  
  filterContent(scourse, searchTerm){
    const result = scourse.filter(
        (scourse) => 
        scourse.ctitle.toLowerCase().includes(searchTerm)
    );
    this.setState({ scourse: result });
  }

  render() {

    const orderId = new Date().getTime();
    return (
      <div>
        <HeaderS/>
        
      <div className='allcoursesviewArea'>

      <h2><span>M</span>y <span>C</span>ourses</h2>

      <div className='allcoursesview'>

{/* <h1>{this.uid}</h1> */}
      {this.state.scourse.map((scourse, index) =>

        <div className="card homevideocontainer" key={index}>

          <Link className="nav-link active" aria-current="page" to={`/viewCourse/${scourse.courseId}`}>

          <div className="card-header">
          {scourse.courseTitle}
                    
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
                  <h2>{scourse.InstructorfName} {scourse.InstructorlName}</h2>
                  <p>{scourse.uploadAt}</p>
                  
                </div>

            </div>
              <div className='discri'>

              {scourse.cdescription}

              </div> 
              
              <br />

              <div>
              <button className='btn btn-danger' onClick={()=>this.onDelete(scourse._id)}>Remove</button>
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

