import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./createCategory.css";
import Header from '../Header/Header';

const EditCategory =() => {

  const [input, setInput]=useState({});
  const id =useParams().id;
  console.log(id);
  useEffect(()=>{ 
      const fetchHandler = async()=>{
          await axios.get(`http://localhost:8090/category/category/${id}`)
          .then((res)=> res.data )
          .then((data)=>setInput(data.category));
      }
      fetchHandler()
      .then((data)=>setInput(data.category));
  },[id])



  console.log(input);

  return (
    <div>
        <Header/>

        {input && (

        <div className='categoryArea'>
            <div className='categoriContainer'>
                <h2><span>U</span>date <span>C</span>ategories</h2>

                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input value={input.categoryTitle}
                  
                type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Title"/>
                </div>
                {/* <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Date</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" />
                </div> */}
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea
                    value={input.categoryDescription}
                class="form-control" id="exampleFormControlTextarea1" placeholder="Enter Description" rows="3"></textarea>
                </div>
                <button type='submit' class="btn btn-primary" >Add</button>

            </div>


        </div>

            )}   

    </div>
  )


};
export default EditCategory;

