import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {Link} from 'react-router-dom';
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

    const [fireRedirect, setFireRedirect] = useState(false);

    const [courseId, setCourseId] = useState("");
    const [courseTitle, setCourseTitle] = useState("");
    const [coursePrice, setCprice] = useState("");
    const [pname, setPname] = useState("");
    const [pcardNum, setPcardNum] = useState("");
    const [pexpiryDate, setPexpiryDate] = useState("");
    const [cvc, setCvc] = useState("");
  
    function sendData(e){
      const newForm={
  
      courseId,
      courseTitle,
      coursePrice,
      pname,
      pcardNum,
      pexpiryDate,
      cvc

  
    }
  
    if( pname==='' && pcardNum === '' && pexpiryDate === '' && cvc === '') {
      swal("All Fields are empty");
  }else if(pname === ''){
      swal("Course title Field is empty");
  }else if(pcardNum === ''){
      swal("Course Duration Field is empty");
  }else if(pexpiryDate === ''){
      swal("Course Price Field is empty");
  }else if(cvc === ''){
      swal("Course Description Field is empty");
  }
  
  else {
  
    axios.post('http://localhost:8090/Payment/add',newForm).then(()=>{
      setCourseId('');
      setCourseTitle('');
      setCprice('');
    
      swal({
        title: "Success!",
        text: "Payment Added Successfully",
        icon: 'success',
        timer: 2000,
        button: false,
      });
  
      // setFireRedirect(true);                                  
  }).catch((e)=>{
    alert(e);
  })
  
  }
  
    }
    
  return (
    <div>
       <Header/>
     <div class='payArea'>
        <h1>Pay Now</h1>
        <form class="row g-3">

        <div class="col-12">
            <label for="inputAddress" class="form-label">Course ID</label>
            <input type="text" class="form-control"  onChange={(e) => (setCourseId(e.target.value))} value={input._id} id="inputAddress" />
        </div>    
       
        <div class="col-12">
            <label for="inputAddress" class="form-label">Course Title</label>
            <input type="text" class="form-control" onChange={(e) => (setCourseTitle(e.target.value))} value={input.ctitle} id="inputAddress" />
        </div>    

        <div class="col-12">
            <label for="inputAddress" class="form-label">Total Price</label>
            <input type="text" class="form-control" onChange={(e) => (setCprice(e.target.value))} value={input.cprice} id="inputAddress" />
        </div>

        <div class="col-12">
            <label for="inputAddress" class="form-label">Name</label>
            <input type="text" class="form-control" onChange={(e) => (setPname(e.target.value))}  id="inputAddress" placeholder="Enter Name"/>
        </div>    

        <div class="col-12">
            <label for="inputAddress2" class="form-label">Card Number</label>
            <input type="text" class="form-control" onChange={(e) => (setPcardNum(e.target.value))} id="inputAddress2" placeholder="Card Number"/>
        </div>
        <div class="col-md-6">
            <label for="inputCity" class="form-label">Expiry Date</label>
            <input type="text" class="form-control" onChange={(e) => (setPexpiryDate(e.target.value))} id="inputCity" placeholder="DD/MM/YY"/>
        </div>
      
        <div class="col-md-6">
            <label for="inputZip" class="form-label">CVC</label>
            <input type="text" class="form-control" onChange={(e) => (setCvc(e.target.value))} id="inputZip" placeholder="CVC"/>
        </div>
       
        <div class="col-12">
            <center><button type="submit" class="btn btn-primary" onClick={sendData}><Link to ="/homeLogged
                
                
                " style={{textDecoration:'none', color:'white'}}>Pay Now</Link></button></center>
            
        </div>
        </form>
     </div>

  </div>
  )
};
export default Payment;

