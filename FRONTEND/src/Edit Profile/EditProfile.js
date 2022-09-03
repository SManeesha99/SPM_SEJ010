import React from 'react';
import './editProfile.css';
import Header from '../Header/Header';

export default function EditProfile() {
  return (
    <div>
        <Header/>

        <div className='editproArea'>

            <div className='proimg'>

            </div>
            <label for="formFileSm" class="form-label">Upload Your Profile Image</label>
            <input class="form-control form-control-sm uploadimg" id="formFileSm" type="file" />

            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Full name</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input type="text" class="form-control form-control-lg" />

                </div>
                </div>
            </div>
            
            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Mobile Number</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input type="text" class="form-control form-control-lg" />

                </div>
                </div>
            </div>

            
            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Email</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input type="text" class="form-control form-control-lg" />

                </div>
                </div>
            </div>

            
            <div className='name'>
                <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Password</h6>

                </div>
                <div class="col-md-9 pe-5">

                    <input type="text" class="form-control form-control-lg" />

                </div>
                </div>
            </div>

            <div class="mt-4 pt-2">
                <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
            </div>



        </div>

    </div>
  )
}
