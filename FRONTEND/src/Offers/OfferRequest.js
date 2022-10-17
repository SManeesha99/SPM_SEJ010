import React, { Component} from 'react';
import Header from "../Admin/AdminHeader";
import './InstructorRegReq.css';
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
            offerRequest:[]
        };
    }
    
    componentDidMount(){
      this.retrieveTest();
    }
    
    retrieveTest(){
            
      axios.get("http://localhost:8090/offerRequest").then(res =>{
          if(res.data){
              this.setState({
                  test:res.data
              });
    
              console.log(this.state.test);
          }
      });
      
    
    }
    
    Change = async(firstName, lastName, mobileNumber, field, email, password, status,  id)=>{

        const data ={
                    firstName: firstName,
                    lastName: lastName,
                    mobileNumber: mobileNumber,
                    field: field,
                    email: email,
                    password: password,
                    status: 'active',
        
                }

            console.log(data)
            
            await axios.post("http://localhost:8090/Offer/add",data).then((res)=>{
                axios.put(`http://localhost:8090/offerRequest/updateStatus/${id}`)
            .then((res)=>{              
                
                    swal({
                        title: "Success!",
                        text: "Request Approved",
                        icon: 'success',
                        timer: 2000,
                        button: false,
                      });

                })
            })
            
                


    }

    
    // onSubmit = (e) =>{
    //     e.preventDefault();

    //     const {firstName, lastName, mobileNumber, field, email, password} = this.state;

    //     const data ={
    //         firstName: firstName,
    //         lastName: lastName,
    //         mobileNumber: mobileNumber,
    //         field: field,
    //         email: email,
    //         password: password 

    //     }


    //     console.log(data)

    //     axios.post("http://localhost:8090/User/add",data).then((res) =>{
    //         swal.fire({
    //             title: "Success!",
    //             text: "New Notice Updated Successfully",
    //             icon: 'success',
    //             timer: 2000,
    //             button: false,
    //           });
    //          // setFireRedirect(true);  
            
    //     })
    // }



    // onChangeActiveStatus(e, id){
    //     let updateDetailsstatus = {
    //         isActive: 1,
    //     };

    //     console.log(id);
    //     axios
    //         .put(`http://localhost:8090/approve-Test/${id}`, updateDetailsstatus)
    //         .then((res) => {
    //             console.log(res.data);
    //             console.log(updateDetailsstatus);
    //             if(res.data.code === 200){
    //                 swal({
    //                     title: "Success!",
    //                     text: "Course Updated Successfully",
    //                     icon: 'success',
    //                     timer: 2000,
    //                     button: false,
    //                   });
    //             }else{
    //                 toast.error(res.data.message);
    //             }
    //             window.location.reload();
    //         });
    // }
    
    // onDelete = (id) =>{
    
    //   axios.delete(`http://localhost:8090/Courses/delete/${id}`).then((res)=>{
    
    //       this.retrieveCourses();
    
    //       swal({
    //         title: "Success!",
    //         text: "Course Delete Successfull",
    //         icon: 'success',
    //         timer: 2000,
    //         button: false,
    //       });
    
    //   });
    
    // };
    
    // handleTextSearch =(e)=>{
    //   const searchTerm = e.currentTarget.value;
    //   axios.get("http://localhost:8090/Courses").then(res => {
    //       if(res.data){ 
    //           this.filterContent(res.data , searchTerm)
    //       }
    //   });
    // }; 
    
    // filterContent(courses, searchTerm){
    //   const result = courses.filter(
    //       (courses) => 
    //       courses.ctitle.toLowerCase().includes(searchTerm)
    //   );
    //   this.setState({ courses: result });
    // }
    render(){

        
        
        return(
            <div>
                <Header/>

                <div className='categoryArea'>

            <h1 className='title'>Instructor Requests</h1>
            
            <div className='categoryContainer'>
                
            {this.state.test.map((test, index)=>

                <div class="row categorydiv">
                    <div class="col left">
                        <h4>{test.firstName} {test.lastName}</h4>
                        <p>{test.field}</p>
                        <p></p>
                    </div>

                    <div class="col right">
                        <a href='#' class="btn btn-primary">View More..</a>
                        <a href='#' class="btn btn-success" onClick={()=> this.Change(test.firstName, test.lastName, test.mobileNumber, test.field, test.email, test.password, test.status, test._id)}> Approve</a>
                        <button class="btn btn-danger" type='button'>Reject</button>
                    </div>


                </div>

            )}

                
            </div>

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