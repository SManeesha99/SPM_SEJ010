import React from 'react';
import './updateCourseDetails.css';
import Header from '../Header/Header';

export default function UpdateCourseDetails() {
  return (
    <div>
        <Header/>

        <div className='updatecourseArea'>
            <h2>Update Course</h2>
            <div className='updatecourse'>

                    <div className='namee'>
                        <label>Title</label>
                        <input class="form-control" placeholder='Enter Title'></input>
                    </div>

                    <div className='namee'>
                        <label>Description</label>
                        <textarea class="form-control" id="" name="" required placeholder="Enter Description" ></textarea>
                    </div>
                    
                    <div className='namee'>
                        <label>Course Video</label>
                            <div className='courseVideo'>
                                <img src="select.png" alt="" class="vimage"></img>
                            </div>
                    </div>
                    
                        <form className="form">
                        
                            <lable for="form_input" class="form_lable">
                                <input type="file" class="form_input" id="form_input"/>
                            <span class="form_text">Browse</span>
                            </lable>
                        
                        </form>
                    
                     <div className='namee'>
                        <label>Thumbnail</label>
                            <div className='thumbnail'>
                            <img src="select.png" alt="" class="timage"></img>
                            </div>
                    </div>
                        
                    <form className="form">
                        
                        <lable for="form_input" class="form_lable">
                            <input type="file" class="form_input" id="form_input"/>
                        <span class="form_text">Browse</span>
                        </lable>
                    
                    </form>

                </div>

                <button class='btn btn-primary'>Update Course</button>

        </div>
 

    </div>
  )
}
