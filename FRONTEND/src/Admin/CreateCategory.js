import React from 'react';
import './createCategory.css';
import { useState } from 'react';
import axios from "axios";
import swal from "sweetalert";
import Header from '../Header/Header';

export default function CreateCategory() {

  const [fireRedirect, setFireRedirect] = useState(false);

  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
 

  function sendData(e){
    const newForm={

      categoryTitle,
      categoryDescription
 

  }

  if( categoryTitle==='' && categoryDescription === '') {
    swal("All Fields are empty");
}else if(categoryTitle === ''){
    swal("CourcategoryTitlese title Field is empty")
}else if(categoryDescription === ''){
    swal("Course Duration Field is empty")
}else{

  axios.post('http://localhost:8090/category/add',newForm).then(()=>{

    swal({
      title: "Success!",
      text: "New Category Added Successfully",
      icon: 'success',
      timer: 2000,
      button: false,
    });  

    //setFireRedirect(true);                                  
}).catch((e)=>{
  alert(e);
})
}

  }

  return (
    <div>
         <Header/>
        <div className='categoryArea'>
            <div className='categoriContainer'>
                <h2><span>C</span>reate <span>C</span>ategories</h2>

                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input 
                  onChange={(e) => (
                    setCategoryTitle(e.target.value)
                     )} 
                type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Title"/>
                </div>
                {/* <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Date</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" />
                </div> */}
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea
                onChange={(e) => (
                  setCategoryDescription(e.target.value)
                   )} 
                class="form-control" id="exampleFormControlTextarea1" placeholder="Enter Description" rows="3"></textarea>
                </div>
                <button type='submit' class="btn btn-primary" onClick={sendData}>Add</button>

            </div>


        </div>
    </div>
  )
}
