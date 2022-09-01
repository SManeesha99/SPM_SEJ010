import React from 'react';
import './createReview.css';
import Video from "../htmlCss.mp4"

export default function CreateReview() {
  return (

    <div >
    <div className='create'>
        <div className='courseDetails'>
            <h1>Course Title</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                 Lorem ipsum may be used as a placeholder before final copy is available.</p>

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
        
    </div>

    <div className='addReview'>
        
    </div>


    </div>
    
  )
}
