import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './ViewCourse.css';
import Video from "../htmlCss.mp4";
import Header from "../Header/Header";
import swal from "sweetalert";
import {Link} from 'react-router-dom';

const ViewCourse =() => {



    const [input, setInput]=useState({});
    const id =useParams().id;
    console.log("fffffffff",id);
    const history = useNavigate();
    useEffect(()=>{ 
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:8090/Courses/Courses/${id}`)
            .then((res)=> res.data )
            .then((data)=>setInput(data.courses));
        }
        fetchHandler()
        .then((data)=>setInput(data.courses));
    },[id])
    
    const [TopcourseRequest,setTopcourseRequest] = useState([]);
    

    function onSubmit (id) {
        
        console.log("dddddd",id)

        axios.put(`http://localhost:8090/Courses/updateTopCourse/${id}`).then((res)=>{
    
        alert("Top Course Request Successfully");
    
        this.useEffect();
    
        });
    
      };
    
      

    


  return (
    <div>
         <Header/>
    <div className='create'>
        <div className='courseDetails'>
            <h1> {input.ctitle} </h1>
            <p>{input.cdescription}</p>

            <button className='enrollbtn'>Enroll Now {input.cprice}</button>
            <button type="button" className='enrollbtn rTCourse' onClick={()=>onSubmit(id)}>Request Top Course</button>
            
            <a  class="viewreview" href="#review">View Review..</a>

        </div>
        <div className='courseIntro'>
            <video width="100%" controls autostart  src={Video} type="video/mp4" />  
        </div>
    </div>

    <section id="review">

    <div className='recentReview'>

        <h2><span>R</span>eview</h2>

        <div className='reviewArea'>
            <div class='item row'>
                <div class='col-sm-2 stproimg'>

                </div>
                <p class="col-sm-10">In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is available.</p>

            </div>

            <div class='item row'>
                <div class='col-sm-2 stproimg'>

                </div>
                <p class="col-sm-10">In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is available.</p>

            </div>

            <div class='item row'>
                <div class='col-sm-2 stproimg'>

                </div>
                <p class="col-sm-10">In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is available.</p>

            </div>

            <div class='item row'>
                <div class='col-sm-2 stproimg'>

                </div>
                <p class="col-sm-10">In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is available.</p>

            </div>

            <div class='item row'>
                <div class='col-sm-2 stproimg'>

                </div>
                <p class="col-sm-10">In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is available.</p>

            </div>

            <div class='item row'>
                <div class='col-sm-2 stproimg'>

                </div>
                <p class="col-sm-10">In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is available.</p>

            </div>

            <div class='item row'>
                <div class='col-sm-2 stproimg'>

                </div>
                <p class="col-sm-10">In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is available.</p>

            </div>

            <div class='item row'>
                <div class='col-sm-2 stproimg'>

                </div>
                <p class="col-sm-10">In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is available.</p>

            </div>
        </div>
        

    </div>

    </section>

    </div>
  )
};
export default ViewCourse;
