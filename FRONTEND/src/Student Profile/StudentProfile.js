// import React from 'react';
import axios from "axios";
import Header from "../Header/Header";
import "./studentprofile.css";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { useParams, useNavigate} from "react-router-dom";

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../index.css";
import {Link} from 'react-router-dom';

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function StudentProfile() {

  const [input, setInput]=useState({});
  const id =localStorage.getItem("id");
  console.log(id);
  const history = useNavigate();
  useEffect(()=>{ 
      const fetchHandler = async()=>{
          await axios.get(`http://localhost:8090/User/get/${id}`)
          .then((res)=> res.data )
          .then((data)=>setInput(data.User));
      }
      fetchHandler()
      .then((data)=>setInput(data.User));
  },[id])

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
        <div className='StudentProfileArea'>
            <div class="row">
                <div class="col-sm-8 lefts">
                    <div className='profileimg'>

                    </div>
                    <div className='nameNdate'>
                        <h2>{input.firstName} {input.lastName}</h2>
                        <p>{input.registerAt}</p>
                    </div>
                
                </div>
                <div class="col-sm-4 rights">
                    <button className='editprofile'><Link className="nav-link active" aria-current="page" to="/editProfileS">Edit Profile</Link></button>
                    <button className='dltprofile' onClick={()=>onDelete(input._id)}>Delete Profile</button>
                    
                </div>
            </div>

            <div className='myCourse'>

                <h3><span>M</span>y <span>C</span>ourses</h3>

            <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper swipperArea"
      >
        <SwiperSlide className="SwiperSlide">Slide 1</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 2</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 3</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 4</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 5</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 6</SwiperSlide>
      </Swiper>
    </>

            </div>


        </div>
    </div>
  )
}
