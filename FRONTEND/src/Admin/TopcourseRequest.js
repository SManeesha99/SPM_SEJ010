import React, { Component } from 'react';
import './topCourseRequest.css';
import Header from '../Header/Header';

export default class TopcourseRequest extends Component {
  render() {
    return (
      <div>
        <Header/>

        <div className='TopcourseRequestArea'>

            <h1>Top Course Requests</h1>

        <div class="row TopcourseRequestItem">
                <div class="col-sm-3 TopcourseRequestleft">

                </div>
                <div class="col-sm-9 TopcourseRequestright">
                    <div className='TopcourseRequestrightL'>
                        <h2>Course Title</h2>
                        <h2>$20.49</h2>
                        <p>Total Course fee in USD</p>
                    </div>

                    <div className='TopcourseRequestrightR'>
                        <button class="btn btn-primary" type='button'>View More..</button>
                        <button class="btn btn-success" type='button'>Approve</button>
                        <button class="btn btn-danger" type='button'>Reject</button>
                    </div>
                    
                    </div>
                    
                </div>
            </div>
        </div>

    )
  }
}
