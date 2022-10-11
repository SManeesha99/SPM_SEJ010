import React from 'react';
import NotRegHeader from '../Header/notRegHeader';
import './loginRegister.css';
import { useState } from 'react';
import axios from "axios";
import swal from "sweetalert";
import {Link} from 'react-router-dom';

export default function RegisterInstructor() {

    
  const [fireRedirect, setFireRedirect] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [field, setField] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function sendData(e){
    const newForm={

        firstName,
        lastName,
        mobileNumber,
        field,
        email,
        password

  }

  if( firstName==='' && lastName === '' && mobileNumber === '' && field === '' && email === '' && password === '') {
    swal("All Fields are empty");
}else if(firstName === ''){
    swal("firstName Field is empty")
}else if(lastName === ''){
    swal("lastName Field is empty")
}else if(mobileNumber === ''){
    swal("mobileNumber Field is empty")
}else if(field === ''){
    swal("field Field is empty")
}else if(email === ''){
    swal("email Field is empty")
}else if(password === ''){
    swal("password Field is empty")
}
else{

  axios.post('http://localhost:8090/User/add',newForm).then(()=>{

    swal({
      title: "Success!",
      text: "Registered Successfully",
      icon: 'success',
      timer: 2000,
      button: false,
    });  

    setFireRedirect(true);                                  
}).catch((e)=>{
  alert(e);
})

}

  }

  return (
    <div>
        <div className='registerArea'>

        <NotRegHeader/>
            <center>
            <div className='regArea'>
                <h2>Register Now</h2>
                <div className='regui'>
                    <div className='name'>
                        <div class='row fullname'>
                            <div class="col-sm-6">
                                <input
                                name='firstName'
                                onChange={(e) => (
                                    setFirstName(e.target.value)
                                     )} 
                                 class="form-control" placeholder='First Name'></input>
                            </div>
                            <div class="col-sm-6">
                                <input
                                name='lastName'
                                onChange={(e) => (
                                    setLastName(e.target.value)
                                     )} 
                                 class="form-control" placeholder='Last Name'></input>
                            </div>
                        </div>
                        
                    </div>
                    <div className='name'>
                        <input
                        name='mobileNumber'
                        onChange={(e) => (
                            setMobileNumber(e.target.value)
                             )} 
                         class="form-control" placeholder='Mobile Number'></input>
                    </div>

                    <div className='name'>
                        <input
                        name='mobileNumber'
                        value="Instructor" readOnly
                         class="form-control" ></input>
                    </div>

                    <div className='name'>
                        <input
                        name='email'
                        onChange={(e) => (
                            setEmail(e.target.value)
                             )}
                         class="form-control" placeholder='Email'></input>
                    </div>
                    <div className='name'>
                        <input
                        name='password'
                        onChange={(e) => (
                            setPassword(e.target.value)
                             )}
                         class="form-control" placeholder='Password'></input>
                    </div>

                    <div class="form-group chk">
                        <div class="form-check">
                        <input class="form-check-input checkbox" type="checkbox" id="gridCheck"/>
                        <p class="chkA">
                        I agree that I have read and accepted the Terms of Use and 
                            <a className='privacypolicybtn' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Privacy Policy
                            </a>
                        </p>
                        </div>
                    </div>

                </div>

                <button class='btn btn-primary' onClick={sendData}><Link to ="/login
                
                
                " style={{textDecoration:'none', color:'white'}}>Register</Link></button>

                <hr/>
                <p className='bottm'>Already have an account? <Link className="nav-link active" aria-current="page" to="/login">Login</Link></p>


            </div>
            </center>

        </div>


        {/* ================model=============== */}

        

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Privacy Policy</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
                professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                 discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
                 Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise 
                 on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum 
                 dolor sit amet..", comes from a line in section 1.10.32.

                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in 
                their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>

        {/* ================model=============== */}


    </div>
  )
}
