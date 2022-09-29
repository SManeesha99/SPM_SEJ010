import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import './payment.css';


const Payment =() => {

    const [input, setInput]=useState({});
    const id =useParams().id;
    console.log(id);
    const history = useNavigate();
    useEffect(()=>{ 
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:8090/Courses/Courses/${id}`)
            .then((res)=> res.data )
            .then((data)=>setInput(data.courses));
            console.log(fetchHandler)
        }
        fetchHandler()
        .then((data)=>setInput(data.courses));
    },[id])
    
  return (
    <div>
       <Header/>
     <div class='payArea'>
        <h1>Pay Now</h1>
        <form class="row g-3">

        <div class="col-12">
            <label for="inputAddress" class="form-label">Course ID</label>
            <input type="text" class="form-control" value={input._id} id="inputAddress" />
        </div>    
       
        <div class="col-12">
            <label for="inputAddress" class="form-label">Course Title</label>
            <input type="text" class="form-control" value={input.ctitle} id="inputAddress" />
        </div>    

        <div class="col-12">
            <label for="inputAddress" class="form-label">Total Price</label>
            <input type="text" class="form-control" value={input.cprice} id="inputAddress" />
        </div>

        <div class="col-12">
            <label for="inputAddress" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputAddress" />
        </div>    

        <div class="col-12">
            <label for="inputAddress2" class="form-label">Card Number</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Card Number"/>
        </div>
        <div class="col-md-6">
            <label for="inputCity" class="form-label">Expiry Date</label>
            <input type="text" class="form-control" id="inputCity" placeholder="DD/MM/YY"/>
        </div>
      
        <div class="col-md-6">
            <label for="inputZip" class="form-label">CVC</label>
            <input type="text" class="form-control" id="inputZip" placeholder="CVC"/>
        </div>
       
        <div class="col-12">
            <center><button type="submit" class="btn btn-primary">Pay Now</button></center>
            
        </div>
        </form>
     </div>

  </div>
  )
};
export default Payment;

