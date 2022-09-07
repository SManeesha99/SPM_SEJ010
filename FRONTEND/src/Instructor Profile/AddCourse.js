import React from 'react';
import './addCourse.css';
import Header from '../Header/Header';

export default function AddCourse() {
  return (
    <div>
        <Header/>

        <div className='addcourseArea'>
        

        <h2><span>A</span>dd <span>C</span>ourse</h2>

        
            <div className='addcourse'>

                    <div className='namee'>
                        <label>Instructor Usrename</label>
                        <input class="form-control" placeholder='Enter Username'></input>
                    </div>

                    <div className='namee'>
                        <label>Course Title</label>
                        <input class="form-control" placeholder='Enter Course Title'></input>
                    </div>

                    <div className='namee'>
                        <label>Course Duration</label>
                        <input class="form-control" placeholder='Enter Course Duration'></input>
                    </div>

                    <div className='namee'>
                        <label>Course Price</label>
                        <input class="form-control" placeholder='Enter Course Price'></input>
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

                </div>

                <button class='btn btn-primary btnadd'>Add Course</button>

        </div>
 

    </div>
  )
}
