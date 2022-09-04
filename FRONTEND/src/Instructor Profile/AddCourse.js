import React from 'react';
import './addCourse.css';
import Header from '../Header/Header';

export default function AddCourse() {
  return (
    <div>
        <Header/>

        <div className='addcourseArea'>
            <h2>Add Course</h2>
            <div className='addcourse'>
                    <div className='name'>
                        <label>Title</label>
                        <input class="form-control" placeholder='Enter Title'></input>
                    </div>
                    <div className='name'>
                        <label>Description</label>
                        <textarea class="form-control" id="" name="" required placeholder="Enter Description" ></textarea>
                    </div>
                    <div className='name'>
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
                    
                     <div className='name'>
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

                <button class='btn btn-primary'>Add Course</button>

        </div>
 

    </div>
  )
}