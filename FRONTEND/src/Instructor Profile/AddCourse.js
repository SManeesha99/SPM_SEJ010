import React from 'react';
import './addCourse.css';
import { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert";
import Header from '../Header/Header';

export default function AddCourse() {
  
  const [input, setInput]=useState({});
  const id =localStorage.getItem("id");

  const [fireRedirect, setFireRedirect] = useState(false);
  const navigate = useNavigate();

  const [ctitle, setCtitle] = useState("");
  const [cduration, setCduration] = useState("");
  const [cprice, setCprice] = useState("");
  const [cdescription, setCdescription] = useState("");

  useEffect(()=>{ 
    const fetchHandler = async()=>{
        await axios.get(`http://localhost:8090/User/get/${id}`)
        .then((res)=> res.data )
        .then((data)=>setInput(data.User));
    }
    fetchHandler()
    .then((data)=>setInput(data.User));
},[id])

const sendData = async (InstructorId, InstructorfName, InstructorlName)=>{
    const newForm={

    InstructorId: InstructorId,
    InstructorfName: InstructorfName,
    InstructorlName: InstructorlName,
    ctitle: ctitle,
    cduration: cduration,
    cprice: cprice,
    cdescription: cdescription

  }

  if( ctitle==='' && cduration === '' && cprice === '' && cdescription === '') {
    swal("All Fields are empty");
}else if(ctitle === ''){
    swal("Course title Field is empty");
}else if(cduration === ''){
    swal("Course Duration Field is empty");
}else if(cprice === ''){
    swal("Course Price Field is empty");
}else if(cdescription === ''){
    swal("Course Description Field is empty");
}

else {

//   axios.post('http://localhost:8090/Courses/add',newForm).then(()=>{

//     swal({
//       title: "Success!",
//       text: "New Course Added Successfully",
//       icon: 'success',
//       timer: 2000,
//       button: false,
//     });

//     // setFireRedirect(true);                                  
// }).catch((e)=>{
//   alert(e);
// })

navigate('/InstructorPay',{state:newForm})

}

  }

  return (
    <div>
        <Header/>

        <div className='addcourseArea'>
        

        <h2><span>A</span>dd <span>C</span>ourse</h2>

        
            <div className='addcourse'>

                    {/* <div className='namee'>
                        <label>Instructor Usrename</label>
                        <input class="form-control" placeholder='Enter Username' type="text"></input>
                    </div> */}

                     <input value={input._id}  class="form-control" placeholder='Rs 0000.00' type="text" hidden></input>

                     <input value={input.firstName}  class="form-control" placeholder='Rs 0000.00' type="text" hidden></input>

                     <input value={input.lastName}  class="form-control" placeholder='Rs 0000.00' type="text" hidden></input>

                    <div className='namee'>
                        <label>Course Title</label>
                        <input
                          onChange={(e) => (
                            setCtitle(e.target.value)
                             )} 
                        class="form-control" value={input.ctitle} placeholder='Enter Course Title' type="text"></input>
                    </div>

                    <div className='namee'>
                        <label>Course Duration</label>
                        <input 
                         onChange={(e) => (
                            setCduration(e.target.value)
                             )} 
                        class="form-control" value={input.cduration} placeholder='Enter Course Duration' type="text"></input>
                    </div>

                    <div className='namee'>
                        <label>Course Price</label>
                        <input
                          onChange={(e) => (
                            setCprice(e.target.value)
                             )} 
                         class="form-control" value={input.cprice} placeholder='Rs 0000.00' type="text"></input>
                    </div>

                    <div className='namee'>
                        <label>Description</label>
                        <textarea
                        onChange={(e) => (
                            setCdescription(e.target.value)
                             )} 
                         class="form-control" id="" name="" value={input.cdescription} required placeholder="Enter Description" type="text"></textarea>
                    </div>
                    
                    <div className='namee'>
                        <label>Course Video</label>
                            <div className='courseVideo'>
                                <img src="select.png" alt="" class="vimage"></img>
                            </div>
                    </div>
                    <div className='uploadvid'>          
                            <input class="form-control form-control-sm " id="formFileSm" type="file" />
                    </div>        

                </div>

                <button class='btn btn-primary btnadd' type= "submit" onClick={() => sendData(input._id, input.firstName, input.lastName, input.ctitle, input.cduration, input.cprice, input.cdescription)}>Add Course</button>

        </div>
 

    </div>
  )
}
