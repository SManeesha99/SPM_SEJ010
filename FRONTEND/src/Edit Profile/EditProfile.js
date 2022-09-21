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
            await axios.get(`http://localhost:8090/User/get/${id}`)
            .then((res)=> res.data )
            .then((data)=>setInput(data.User));
        }
        fetchHandler()
        .then((data)=>setInput(data.User));
    },[id])


    const handleSubmit = (e) =>{
        e.preventDefault();
    }

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

                    <input value={input.firstName} name="firstName" class="form-control form-control-lg"></input>

                </div>
                </div>
            </div>

            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Last name</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input value={input.lastName} name="lastName" class="form-control form-control-lg"></input>

                </div>
                </div>
            </div>
            
            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Mobile Number</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input value={input.mobileNumber} name="mobileNumber" class="form-control form-control-lg"></input>

                </div>
                </div>
            </div>

            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Field</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input value={input.field} name="field" class="form-control form-control-lg"></input>

                </div>
                </div>
            </div>

            
            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Email</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input value={input.email} name="email" class="form-control form-control-lg"></input>

                </div>
                </div>
            </div>

            
            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Password</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input value={input.password} name="password" class="form-control form-control-lg"></input>

                </div>
                </div>
            </div>

            <div class="mt-4 pt-2">
                <center><button class="btn btn-primary btn-lg">Edit Profile</button></center>
            </div>



        </div>

    </div>
  )
};
export default EditProfile;
