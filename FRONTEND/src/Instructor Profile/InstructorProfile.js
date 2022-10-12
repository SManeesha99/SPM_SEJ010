import './instructorProfile.css';
import Header from '../Header/Header';
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import swal from "sweetalert";
import Swal from "sweetalert2";

export default function InstructorProfile() {

  const [input,setInput] = useState({});
  const id = localStorage.getItem("id");
  useEffect(()=>{
      const fetchHandler = async()=>{
        await axios.get(`http://localhost:8090/User/get/${id}`)
      .then((res)=>res.data)
      .then((data)=>setInput(data.User));
    }
    fetchHandler()
    .then((data)=>setInput(data.User));
  },[id])


//   useEffect(()=>{
//     const fetchHandler = async()=>{
//       await axios.get(`http://localhost:8090/Courses/owncourse/${localStorage.getItem("id")}`)
//     .then((res)=>res.data)
//     .then((data)=>setInput(data.courses));
//   }
//   fetchHandler()
//   .then((data)=>setInput(data.courses));
// },[id])

  const navigate = useNavigate();

  function onDelete (id) {
    axios.delete(`http://localhost:8090/User/delete/${id}`).then((res)=>{
        Swal.fire({
            title: 'Are you sure ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your Profile has been deleted.',
                navigate('/')
        
              )
            }
          })
       
        
        this.useEffect();

       
    });
};

  return (
    <div>
      <Header/>

      <div className='intructorPage'>

      <div class="row">
                <div class="col-sm-7 lefti">
                    <div className='profileimg'>

                    </div>
                    <div className='nameNdate'>
                        <h2>{input.firstName} {input.lastName}</h2>
                        <p>{input.registerAt}</p>
                    </div>
                
                </div>
                <div class="col-sm-5 righti">
                    <button className='editprofile'><Link className="nav-link active" aria-current="page" to="/editProfile">Edit Profile</Link></button>
                    <button className='editprofile'><Link className="nav-link active" aria-current="page" to="/addCourse">Add Course</Link></button>
                    <button className='dltprofile'>Delete Profile</button>
                    
                </div>
        </div>

 

        

      </div>

    </div>
  )
}
