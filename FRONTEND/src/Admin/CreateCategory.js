import React from 'react';
import './createCategory.css';
import Header from '../Header/Header';

export default function CreateCategory() {
  return (
    <div>
         <Header/>
        <div className='categoryArea'>
            <div className='categoriContainer'>
                <h2><span>C</span>reate <span>C</span>ategories</h2>

                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Description"/>
                </div>
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type='submit' class="btn btn-primary">Add</button>

            </div>


        </div>
    </div>
  )
}
