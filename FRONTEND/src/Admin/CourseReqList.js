import React from 'react';
import Header from '../Header/Header';
import './courseReqList.css';

export default function CourseReqList() {
  return (
    <div>
        <Header/>
        <div class='SParea'>
            <h1>Course Request List</h1>
            <div class='profArea'>
            
                <div class='row prof'>

                    <div class='col-sm-7 profLeft'>

                        <div className='profileimg'>

                        </div>
                        <div className='nameNdate'>
                            <h2>Maneesha Fernando</h2>
                            <p>C++ Fundamental</p>
                            <p class='date'>Payment Date: 2022/09/26</p>
                        </div>

                    </div>
                    

                    <div class='col-sm-5 profRight rightbtn'>
                        <button type="button" class="btn btn-success">View More</button>
                        <button type="button" class="btn btn-primary">Approve</button>
                        <button type="button" class="btn btn-danger">Reject</button>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}
