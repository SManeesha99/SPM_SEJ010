import React from 'react';
import './viewAllCategories.css';
import Header from "../Header/Header";

export default function ViewAllCategoies() {
  return (
    <div>
        <Header/>

        <div className='categoryArea'>

            <h1 className='title'>All Categories</h1>
            <div className='categoryContainer'>
                

                <div class="row categorydiv">
                    <div class="col-sm-7 left">
                        <p>Category Name</p>
                        <p>10 videos</p>
                    </div>

                    <div class="col-sm-5 right">
                        <a href='#' class="btn btn-primary">View More..</a>
                        <a href='#' class="btn btn-success">Edit Categorie</a>
                        <button class="btn btn-danger" type='button'>Remove</button>
                    </div>


                </div>

                
            </div>

        </div>

    </div>
  )
}
