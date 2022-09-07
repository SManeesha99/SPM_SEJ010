import React from 'react';
import './courseDetailsView.css';
import Header from '../Header/Header';

export default function CourseDetailsView() {
  return (
    <div>
        <Header/>

        <div className='viewcourseArea'>

        <h2><span>C</span>ourse <span>D</span>etails</h2>

            <div className='viewcourse'>

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
                        

                </div>

                <div className='namee'>

                <div className='cUpdate'>
                    <button class='btn btn-primary'>Edit Course</button>
                </div>

                <div className='cDelete'>
                    <button class='btn btn-primary'>Delete Course</button>
                </div>
                
                </div>

        </div>
 

    </div>
  )
}
