import React, { Component} from 'react';
import Header from "../Header/Header";
import './InstructorRegReq.css';
import {Helmet} from "react-helmet";
// import './script.js'; 
import profile from '../Instructor Reg Req/Profile.png';

class Instructor_Req_Req extends Component{
    render(){

        
        
        return(
            <div>
                <Header/>
                <body>
                    <center>
                    <div className='boxx'>
                
                <h1><span>I</span>nstructor <span>R</span>egistration <span>R</span>equest</h1>
                
                    <div className='req_list'>
                    <div className='user_instructor'>
                        <div className='imgBx'>
                            <img src={profile} />
                        </div>
                        <div className='details'>
                            <h3>Maureen Robinson</h3>
                            <p>Graphic Designer</p>
                        </div>
                        
                            <button className='btn btn-outline-warning'>View Profile</button>
                            <button className='btn btn-outline-success'>Approve</button>
                            <button className='btn btn-outline-danger'>Reject</button>
                        
                    </div>
                    </div>
                    <div className='req_list'>
                    <div className='user_instructor'>
                        <div className='imgBx'>
                            <img src={profile} />
                        </div>
                        <div className='details'>
                            <h3>Maureen Robinson</h3>
                            <p>Graphic Designer</p>
                        </div>
                        {/* <div className='navigation'> */}
                            <button className='btn btn-outline-warning'>View Profile</button>
                            <button className='btn btn-outline-success'>Approve</button>
                            <button className='btn btn-outline-danger'>Reject</button>            
                        {/* </div> */}
                    </div>
                    </div>
                    <div className='req_list'>
                    <div className='user_instructor'>
                        <div className='imgBx'>
                            <img src={profile} />
                        </div>
                        <div className='details'>
                            <h3>Maureen Robinson</h3>
                            <p>Graphic Designer</p>
                        </div>
                        
                            <button className='btn btn-outline-warning'>View Profile</button>
                            <button className='btn btn-outline-success'>Approve</button>
                            <button className='btn btn-outline-danger'>Reject</button>
                        
                    </div>
                    </div>
                    <div className='req_list'>
                    <div className='user_instructor'>
                        <div className='imgBx'>
                            <img src={profile} />
                        </div>
                        <div className='details'>
                            <h3>Maureen Robinson</h3>
                            <p>Graphic Designer</p>
                        </div>
                        
                            <button className='btn btn-outline-warning'>View Profile</button>
                            <button className='btn btn-outline-success'>Approve</button>
                            <button className='btn btn-outline-danger'>Reject</button>
                        
                    </div>
                    </div>

            </div>

                    </center>
                    
                    
                </body>
               
            </div>
        
        );
    }

}
export default Instructor_Req_Req;