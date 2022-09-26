import React from 'react';
import NotRegHeader from '../Header/notRegHeader';
import './loginRegister.css';
import { useState } from 'react';
import axios from "axios";
import swal from "sweetalert";
import {Link} from 'react-router-dom';

export default function () {

    
    const [fireRedirect, setFireRedirect] = useState(false);
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function sendData(e){
      const newForm={
  
          firstName,
          lastName,
          email,
          password
  
    }
  
    if( firstName==='' && lastName === '' && email === '' && password === '') {
      swal("All Fields are empty");
  }else if(firstName === ''){
      swal("firstName Field is empty")
  }else if(lastName === ''){
      swal("lastName Field is empty")
  }else if(email === ''){
      swal("email Field is empty")
  }else if(password === ''){
      swal("password Field is empty")
  }
  else{
  
    axios.post('http://localhost:8090/admin/add',newForm).then(()=>{
  
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
  
                  <button class='btn btn-primary' onClick={sendData}><Link to ="/adminlogin" style={{textDecoration:'none', color:'white'}}>Register</Link></button>
  
                  <hr/>
                  <p className='bottm'>Already have an account? <Link className="nav-link active" aria-current="page" to="/adminlogin">Login</Link></p>
  
  
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









// class RegisterAdmin extends React.Component{

//     constructor(props){
//         super(props);
//         this.state={
//             name:"",
//             email:"",
//             password:""
//         }
//     }

//     handleInputChange = (e) =>{
//         const{name,value} = e.target;

//         this.setState({
//             ...this.state,
//             [name]:value
//         })
//     }


//     onSubmit = (e) =>{
//         e.preventDefault();

//         const {name, email, password} = this.state;

//         const data = {
//             name: name,
//             email: email,
//             password: password
//         }

//         if(name==='' && email==='' && password===''){
//             swal("All Fields are Empty");
//         }
//         else if(name === ''){
//             swal("Name Field is Empty");
//         }
//         else if(email === ''){
//             swal("Email Field is Empty");
//         }else if(password === ''){
//             swal("Password Field is Empty");
//         }

//         console.log(data)

//         axios.post("http://localhost:8090/admin/add",data).then((res)=>{
//             swal.fire({
//                 title: "Success!",
//                 text: "New Notice Added Successfully",
//                 icon: 'success',
//                 timer: 2000,
//                 button: false,
//             });
//             if(res.data){
//                 this.setState({
//                     name:"",
//                     email:"",
//                     password:""
//                 })
//             }
//         })

//     }

//     render(){
//         return(
//             <div>
//         <div className='registerArea'>

//         <NotRegHeader/>
//             <center>
//             <div className='regArea'>
//                 <h2>Register Admin</h2>
//                 <form>
//                 <div className='regui'>
//                     <div className='name'>
//                         <div class='row fullname'>
//                             <div class="col-sm-6">
//                                 <input class="form-control" 
//                                 placeholder='Name'
//                                 name='name'
//                                 value={this.state.name}
//                                 onChange={this.handleInputChange}
//                                 required></input>
//                             </div>
//                         </div>
                        
//                     </div>

//                     <div className='name'>
//                         <input class="form-control" 
//                         placeholder='Email'
//                         name='email'
//                         value={this.state.email}
//                         onChange={this.handleInputChange}
//                         required></input>
//                     </div>
//                     <div className='name'>
//                         <input class="form-control" 
//                         placeholder='Password'
//                         name='password'
//                         value={this.state.password}
//                         onChange={this.handleInputChange}
//                         required></input>
//                     </div>

//                 </div>
                
//                 <button class='btn btn-primary' type='submit' onClick={this.onSubmit}>
//                     Register Admin</button>
//                     </form>
//             </div>
//             </center>

//         </div>


        


//     </div>
//         );
//     }
// }

// export default RegisterAdmin;
