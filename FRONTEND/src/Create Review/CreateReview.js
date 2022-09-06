import React from 'react';
import './createReview.css';
import Video from "../htmlCss.mp4";
import Header from "../Header/Header";

export default function CreateReview() {
  return (

    <div >
      <Header/>
    <div className='create'>
        <div className='courseDetails'>
            <h1>Course Title</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                 Lorem ipsum may be used as a placeholder before final copy is available.</p>

            <a href='#review'>View Review</a>     

        </div>
        <div className='courseIntro'>
            <video width="100%" controls autostart  src={Video} type="video/mp4" />  
        </div>
    </div>

    <div className='courseVideos'>
        <div className='videoContainer'>
            
        </div>
        <div className='videoContainer'>
            
        </div>
        <div className='videoContainer'>
            
        </div>

        <div className='videoContainer'>
            
        </div>
        <div className='videoContainer'>
            
        </div>
        <div className='videoContainer'>
            
        </div>
        
        
    </div>

    <div className='addReview'>

    <div class="form-group addReviewarea">
      <label for="exampleFormControlTextarea1">Give Review</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter Review here....'></textarea>
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
}
