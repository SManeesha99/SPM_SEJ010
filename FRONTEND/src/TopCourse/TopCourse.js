import React, { Component } from 'react';
import '../Home/home.css';
import Header from '../Header/Header';
import { useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert";

export default class TopCourse extends Component {


    constructor(props) {
        super (props);
    
        this.state={
            Topcourses:[]
        };
    }
    
    
    componentDidMount(){
      this.retrieveCourses();
    }
    
    retrieveCourses(){
            
        axios.get("http://localhost:8090/Courses/TopCourse").then(res =>{
            if(res.data){
                this.setState({
                    Topcourses:res.data
                });
      
                console.log(this.state.Topcourses)
            }
        });
    
    }
    
      render() {
        return (
          <div>
            <Header/> 
    
            
          <div className='HomeArea'>
    
          {this.state.Topcourses.map((Topcourses, index) =>
    
            <div className="card homevideocontainer" key={index}>
    
              <Link className="nav-link active" aria-current="page" to={`/viewCourse/${Topcourses._id}`}>
    
              <div className="card-header">
              {Topcourses.ctitle}
                        
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
                      <h2>instructor name</h2>
                      <p>Upload Date</p>
                      
                    </div>
    
                </div>
                  <div className='discri'>
    
                  {Topcourses.cdescription}
    
                  </div> 
                  
                  <br />
    
                  <div>
                  <button className='addcrtbtn'>Add to Cart {Topcourses.cprice}</button>
                  </div>
                  
              </div>
    
    
            </div>
    
          )}
    
            </div>
    
          </div>
        )
      }
    }
    