import React from 'react';
import Header from '../Header/Header';
import './studentPayment.css';

export default function InstructorPayment() {
  return (
    <div>
        <Header/>
        <div class='SParea'>
            <h1>Payment History</h1>
            <div class='profArea'>
            
                <div class='row prof'>

                    <div class='col-sm-9 profLeft'>

                        <div className='profileimg'>

                        </div>
                        <div className='nameNdate'>
                            <h2>Maneesha Fernando</h2>
                            <p>C++ Fundamental</p>
                            <p class='date'>Payment Date: 2022/09/26</p>
                        </div>

                    </div>
                    

                    <div class='col-sm-3 profRight'>
                        <p>$20.10</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
