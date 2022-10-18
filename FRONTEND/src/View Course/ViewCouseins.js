import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import './ViewCourse.css';
import Video from "../htmlCss.mp4";
import HeaderS from "../Header/HeaderS";
import swal from "sweetalert";

const ViewCouseins =() => {



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
             <HeaderS/>
        <div className='create'>
            <div className='courseDetails'>
                <h1> {input.ctitle} </h1>
                <p>{input.cdescription}</p>
                {input.offerHasApproved ? 
                <div>
                    <div>
                        Offer Title: {input.tittle}
                    </div>
                    <div>
                        Offer Description: {input.description}
                    </div>
                    <div>
                        Offer Discount: {input.discount}
                    </div>
                    <div>
                        Offer Closing Date: {input.closingDate}
                    </div>
                </div>
                : "" }
    
                <button className='enrollbtn'><Link to={`/payment/${input._id}`} style={{textDecoration:'none', color:'white'}}>Enroll Now {input.cprice}</Link></button>
                <button type="button" className='enrollbtn rTCourse' onClick={()=>onSubmit(id)}>Request Top Course</button>
                <a  class="viewreview" href="#review">View Review..</a>
    
            </div>
            <div className='courseIntro'>
                <video width="100%" controls autostart  src={Video} type="video/mp4" />  
            </div>

        </div>
    
        <div class='profArea'>
    
            <div class='row prof'>
    
                <div class='col-sm-9 profLeft'>
    
                    <div className='profileimg'>
    
                    </div>
                    <div className='nameNdate'>
                        <h2>{input.InstructorfName} {input.InstructorlName}</h2>
                        <p>BSc Special(Hons) in Information Technology</p>
                    </div>
    
                </div>
                
    
                <div class='col-sm-3 profRight'>
                     <button class='btn btn-primary'>View Profile</button>
                </div>
    
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
export default ViewCouseins;
