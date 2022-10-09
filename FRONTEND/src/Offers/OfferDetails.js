import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../Instructor Profile/courseDetailsView.css';
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

            tittle:String(input.tittle),
            description:String(input.description),
            discount:String(input.discount),
            closingDate:String(input.closingDate)
            

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
                        <label>Offer Title</label>
                        <input name="ctitle" class="form-control" placeholder='Enter Course Title' value={input.tittle} onChange={handleChange}/>
                    </div>

                    <div className='namee'>
                        <label>Offer Description</label>
                        <input name="cduration" value={input.description} onChange={handleChange} class="form-control" placeholder='Enter Course Duration'></input>
                    </div>

                    <div className='namee'>
                        <label>Discount</label>
                        <input name="cprice" value={input.discount} onChange={handleChange} class="form-control" placeholder='Rs 0000.00'></input>
                    </div>

                    <div className='namee'>
                        <label>Closing Date</label>
                        <input name="cdescription" value={input.closingDate} onChange={handleChange} class="form-control" id="" required placeholder="Enter Description" ></input>
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
