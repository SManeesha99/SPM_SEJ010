import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './courseDetailsView.css';
import Header from '../Header/Header';

const CourseDetailsView =() => {

    const [input, setInput]=useState({});
    const id =useParams().id;
    console.log(id);
    useEffect(()=>{ 
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:8090/Courses/Courses/${id}`)
            .then((res)=> res.data )
            .then((data)=>setInput(data.courses));
        }
        fetchHandler()
        .then((data)=>setInput(data.courses));
    },[id])

    console.log(input);

  return (
    <div>
        <Header/>
        {input && (
        <div className='viewcourseArea'>

        <h2><span>C</span>ourse <span>D</span>etails</h2>

            <div className='viewcourse'>

                    <div className='namee'>
                        <label>Instructor Usrename</label>
                        <input class="form-control" placeholder='Enter Username'/>
                    </div>

                    <div className='namee'>
                        <label>Course Title</label>
                        <input class="form-control" readOnly value={input.ctitle}/>
                    </div>

                    <div className='namee'>
                        <label>Course Duration</label>
                        <input value={input.cduration} class="form-control" placeholder='Enter Course Duration'></input>
                    </div>

                    <div className='namee'>
                        <label>Course Price</label>
                        <input value={input.cprice} class="form-control" placeholder='Enter Course Price'></input>
                    </div>

                    <div className='namee'>
                        <label>Description</label>
                        <textarea value={input.cdescription} class="form-control" id="" name="" required placeholder="Enter Description" ></textarea>
                    </div>
                    
                    <div className='namee'>
                        <label>Course Video</label>
                            <div className='courseVideo'>
                                <img src="select.png" alt="" class="vimage"></img>
                            </div>
                    </div>
                        

                </div>

                <div className='namee'>

                <div className='cUpdate'>
                    <button class='btn btn-primary'>Edit Course</button>
                </div>

                <div className='cDelete'>
                    <button class='btn btn-primary'>Delete Course</button>
                </div>
                
                </div>

        </div>
        
        )}

    </div>
  )
};
export default CourseDetailsView;
