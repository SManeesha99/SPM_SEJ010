import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './editProfile.css';
import Header from '../Header/Header';

const EditProfile =() => {

    const [input, setInput]=useState({});
    const id =useParams().id;
    console.log(id);
    useEffect(()=>{ 
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:8090/Student/get/${id}`)
            .then((res)=> res.data )
            .then((data)=>setInput(data.userProfile));
        }
        fetchHandler()
        .then((data)=>setInput(data.userProfile));
    },[id])

    
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    // }

    // const handleChange =(e)=>{
    //     console.log(e);
    // }
    console.log(input);

  return (
    <div>
        <Header/>

        <div className='editproArea'>

            <div className='proimg'>

            </div>
            <center><label for="formFileSm" class="form-label edtprotitle">Upload Your Profile Image</label></center>
            <input class="form-control form-control-sm uploadimg" id="formFileSm" type="file" />

            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">First name</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input value={input.firstName} type="text" class="form-control form-control-lg" />

                </div>
                </div>
            </div>

            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Last name</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input value={input.lastName} type="text" class="form-control form-control-lg" />

                </div>
                </div>
            </div>
            
            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Mobile Number</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input value={input.mobileNumber} type="text" class="form-control form-control-lg" />

                </div>
                </div>
            </div>

            
            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Email</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input value={input.email} type="text" class="form-control form-control-lg" />

                </div>
                </div>
            </div>

            
            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Password</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input value={input.password} type="text" class="form-control form-control-lg" />

                </div>
                </div>
            </div>

            <div class="mt-4 pt-2">
                <center><input class="btn btn-primary btn-lg" type="submit" value="Submit" /></center>
            </div>



        </div>

    </div>
  )
};
export default EditProfile;
