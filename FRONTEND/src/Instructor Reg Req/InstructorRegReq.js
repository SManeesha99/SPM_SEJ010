import React, { Component } from 'react';
import Header from "../Header/Header";
import './InstructorRegReq.css';
import profile from '../Instructor Reg Req/Profile.png';

class Instructor_Req_Req extends Component{
    render(){
        return(
            <div>
                <Header/>
                <body>
                    <div className='box'>
                        <h1>Instructor Registration Request</h1>
                            <div className='req_list'>
                            <div className='user_instructor'>
                                <div className='imgBx'>
                                    <img src={profile} />
                                </div>
                                <div className='details'>
                                    <h3>Maureen Robinson</h3>
                                    <p>Graphic Designer</p>
                                </div>
                                <div className='navigation'>
                                    <button>View</button>
                                    <button>Approve</button>
                                    <button>Reject</button>
                                </div>
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
                                <div className='navigation'>
                                    <button>View</button>
                                    <button>Approve</button>
                                    <button>Reject</button>            
                                </div>
                            </div>
                            </div>
                    </div>
                </body>
            </div>
        );
    }

}
export default Instructor_Req_Req;