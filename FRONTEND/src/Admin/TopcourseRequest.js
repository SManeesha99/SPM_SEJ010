import React from 'react';
import './topCourseRequest.css';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Dsahboard from '../AdminDashboard/Dsahboard';


class TopcourseRequest extends React.Component{

  constructor(props) {
    super (props);

    this.state={
      topCourse:[]
    };
}

componentDidMount(){
  this.retrieveTopCourseReq();
}

retrieveTopCourseReq(){
        
  axios.get("http://localhost:8090/Courses/topCourseRequest").then(res =>{
      if(res.data){
          this.setState({
            topCourse:res.data
          });

          console.log(this.state.topCourse)
      }
  });

}

onSubmitApprove = (id) =>{
  axios.put(`http://localhost:8090/Courses/updateTopCourseApprove/${id}`).then((res)=>{
    alert("Top Course Request Approve Successfully");
    this.retrieveTopCourseReq();
});
};

onSubmitReject = (id) =>{
  axios.put(`http://localhost:8090/Courses/updateTopCourseReject/${id}`).then((res)=>{
    alert("Top Course Request Rejected");
    this.retrieveTopCourseReq();
});
};


render(){

  return (
      <div>
        <Header/>
        <Dsahboard/>

        <div className='TopcourseRequestArea'>
        

            <h1>Top Course Requests</h1>

            {this.state.topCourse.map((topCourse, index) =>


        <div class="row TopcourseRequestItem">
                <div class="col-sm-3 TopcourseRequestleft">

                </div>
                <div class="col-sm-9 TopcourseRequestright">
                    <div className='TopcourseRequestrightL'>
                        <h2>{topCourse.ctitle} </h2>
                        <h2>{topCourse.cprice}</h2>
                        <p>Total Course fee in Sri Lankan Rupees</p>
                    </div>

                    <div className='TopcourseRequestrightR'>
                        <button class="btn btn-primary" type='button'>View More..</button>
                        <button class="btn btn-success" type='button' onClick={()=> this.onSubmitApprove(topCourse._id)}>Approve</button>
                        <button class="btn btn-danger" type='button' onClick={()=> this.onSubmitReject(topCourse._id)}>Reject</button>
                    </div>
                    
                    </div>
                    
                </div>
            )}
            </div>
        </div>

    );
  }
}
  export default TopcourseRequest;
