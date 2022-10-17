import React, { Component} from 'react';
import Header from "../Admin/AdminHeader";
import '../Instructor Reg Req/InstructorRegReq.css';
import axios from "axios";
import { toast } from "react-toastify";
import swal from "sweetalert";
import {Helmet} from "react-helmet";
// import './script.js'; 
import { Link } from 'react-router-dom';
import profile from '../Instructor Reg Req/Profile.png';

class OfferRequest extends Component{

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
        
        axios.get(`http://localhost:8090/Courses/toApproveOffers`).then(res =>{
            if(res.data){
                this.setState({
                    courses:res.data
                });
      
                console.log(this.state.courses);
            }
        });
      
      }

      onApprove = (id) => {
        axios.get(`http://localhost:8090/Courses/approveOffer/${id}`).then((res) => {
            swal({
                title: "Success!",
                text: "Offer Approved Successfully",
                icon: 'success',
                timer: 2000,
                button: false,
              });
              const timer = setTimeout(() => {
                window.location.reload()
              }, 2000);
        })
    }
    
    
    render(){

        
        
        return(
            <div>
                <Header/>

                <div className='categoryArea'>

            <h1 className='title'>Offers</h1>

            {this.state.courses.map((course, index) =>
            
            <div className='categoryContainer'>

                <div class="row categorydiv">
                    <div class="col left">
                        <h4>{course.ctitle}</h4>
                        <p>{course.InstructorfName + " " + course.InstructorlName}</p>
                        <p>{course.tittle}</p>
                        <p>{course.discount}</p>
                        <p>{course.closingDate}</p>
                    </div>

                    <div class="col right">
                        <a href='#' class="btn btn-primary">View More..</a>
                        <a href='#' class="btn btn-success" onClick={() => this.onApprove(course._id)}> Approve</a>
                        <button class="btn btn-danger" type='button'>Reject</button>
                    </div>


                </div>

        

                
            </div>
            )}

        </div>


                {/* <body>
                    <center>
                    <div className='boxx'>
                
                <h1><span>I</span>nstructor <span>R</span>egistration <span>R</span>equest</h1>
                    {this.state.test.map((test, index)=>

                    <div className='req_list' key={index}>
                    <div className='user_instructor'>
                        <div className='imgBx'>
                            <img src={profile} />
                        </div>
                        <div className='details'>
                            <h3>{test.firstName} {test.lastName}</h3>
                            <p>Graphic Designer</p>
                        </div>
                        
                            <button className='btn btn-outline-warning'>View Profile</button>
                            <button className='btn btn-outline-success' onClick={()=> this.Change(test.firstName, test.lastName, test.mobileNumber, test.field, test.email, test.password, test._id)} >Approve</button>
                            <button className='btn btn-outline-danger'onClick={this.onSubmit}>Reject</button>
                        
                    </div>
                    </div>
                    )}
                    
                    

            </div>

                    </center>
                    
                    
                </body> */}


               
            </div>
        
        );
    }

}
export default OfferRequest;