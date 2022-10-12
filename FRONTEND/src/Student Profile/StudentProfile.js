// import React from 'react';
import Header from "../Header/Header";
import "./studentprofile.css";

import React, { useRef, useState } from "react";
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
  return (
    <div>
        <Header/>
        <div className='StudentProfileArea'>
            <div class="row">
                <div class="col-sm-8 lefts">
                    <div className='profileimg'>

                    </div>
                    <div className='nameNdate'>
                        <h2>Student Name</h2>
                        <p>2020.05.23</p>
                    </div>
                
                </div>
                <div class="col-sm-4 rights">
                    <button className='editprofile'><Link className="nav-link active" aria-current="page" to="/editProfile">Edit Profile</Link></button>
                    <button className='dltprofile'>Delete Profile</button>
                    
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
