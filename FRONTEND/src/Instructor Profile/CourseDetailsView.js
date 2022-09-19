import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './courseDetailsView.css';
import swal from "sweetalert";
import Header from '../Header/Header';

const CourseDetailsView =() => {

    const [input, setInput]=useState({});
    const id =useParams().id;
    console.log(id);
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

    const sendRequest = async() =>{

        await axios.put(`http://localhost:8090/Courses/update/${id}` , {

            ctitle:String(input.ctitle),
            cduration:String(input.cduration),
            cprice:String(input.cprice),
            cdescription:String(input.cdescription)
            

        }).then(()=>{

            swal({
                title: "Success!",
                text: "Course Updated Successfully",
                icon: 'success',
                timer: 2000,
                button: false,
              });
            
        })


    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(()=>history("/allCourseView"));
    };

    const handleChange =(e)=>{

        setInput((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }

    console.log(input);
    

  return (
    <div>
        <Header/>
       
        <div className='viewcourseArea'>

        <h2><span>C</span>ourse <span>D</span>etails</h2>

            <div className='viewcourse'>

                    {/* <div className='namee'>
                        <label>Instructor Usrename</label>
                        <input class="form-control" placeholder='Enter Username'/>
                    </div> */}
                    

                    <div className='namee'>
                        <label>Course Title</label>
                        <input name="ctitle" class="form-control" value={input.ctitle} onChange={handleChange}/>
                    </div>

                    <div className='namee'>
                        <label>Course Duration</label>
                        <input name="cduration" value={input.cduration} onChange={handleChange} class="form-control" placeholder='Enter Course Duration'></input>
                    </div>

                    <div className='namee'>
                        <label>Course Price</label>
                        <input name="cprice" value={input.cprice} onChange={handleChange} class="form-control" placeholder='Enter Course Price'></input>
                    </div>

                    <div className='namee'>
                        <label>Description</label>
                        <textarea name="cdescription" value={input.cdescription} onChange={handleChange} class="form-control" id="" required placeholder="Enter Description" ></textarea>
                    </div>
                    
                    {/* <div className='namee'>
                        <label>Course Video</label>
                            <div className='courseVideo'>
                                <img src="select.png" alt="" class="vimage"></img>
                            </div>
                    </div> */}
                        

                </div>

                <div className='namee'>

                <div className='cUpdate'>
                    <button class='btn btn-primary' onClick={handleSubmit}>Edit Course</button>
                </div>

                
                </div>

        </div>
        
       

    </div>
  )
};
export default CourseDetailsView;
