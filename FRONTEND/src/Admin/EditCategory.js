import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./createCategory.css";
import swal from "sweetalert";
import Header from '../Header/Header';

const EditCategory =() => {

  const [input, setInput]=useState({});
  const id =useParams().id;
  console.log(id);
  const history = useNavigate();
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


  const sendRequest = async() =>{

    await axios.put(`http://localhost:8090/category/update/${id}`, {
        categoryTitle:String(input.categoryTitle),
        categoryDescription:String(input.categoryDescription)
    }).then(()=>{
        swal({
            title: "Success!",
            text: "Category Update Successfully",
             timer: 2000,
            button: false,
          });  
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=>history("/ViewAllCategoies"));
  };
  const handleChange = (e)=>{
    setInput((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
  }



  return (
    <div>
        <Header/>

       

        <div className='categoryArea'>
            <div className='categoriContainer'>
                <h1><span>U</span>pdate <span>C</span>ategories</h1>

                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input name ="categoryTitle" value={input.categoryTitle} onChange={handleChange}
                  
                type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Title"/>
                </div>
                {/* <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Date</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" />
                </div> */}
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea
                    name ="categoryDescription"
                    value={input.categoryDescription}
                    onChange={handleChange}
                class="form-control" id="exampleFormControlTextarea1" placeholder="Enter Description" rows="3"></textarea>
                </div>
                <button type='submit' class="btn btn-primary" onClick={handleSubmit} >Update</button>

            </div>


        </div>

               

    </div>
  )


};
export default EditCategory;

