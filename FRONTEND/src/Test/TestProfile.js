





// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams, Link, useNavigate} from "react-router-dom";
// import '../Edit Profile/editProfile.css';
// import Header from '../Header/Header';
// import swal from "sweetalert";
// import Swal from "sweetalert2";

// const TestProfile =() => {

//     const [input, setInput]=useState({});
//     const id =useParams().id;
//     console.log(id);
//     const history = useNavigate();
//     useEffect(()=>{ 
//         const fetchHandler = async()=>{
//             await axios.get(`http://localhost:8090/Test/test/${id}`)
//             .then((res)=> res.data )
//             .then((data)=>setInput(data.test));
//         }
//         fetchHandler()
//         .then((data)=>setInput(data.test));
//     },[id])

//     // const sendRequest = async()=>{

//     //     await axios.put(`http://localhost:8090/User/update/${id}`, {

//     //         firstName:String(input.firstName),
//     //         lastName:String(input.lastName),
//     //         mobileNumber:Number(input.mobileNumber),
//     //         field:String(input.field),
//     //         email:String(input.email),
//     //         password:String(input.password)

//     //     }).then(()=>{

//     //         swal({
//     //             title:"Success",
//     //             text: "User Updated Successfull",
//     //             icon: 'success',
//     //             timer: 2000,
//     //             button: false,
//     //         });
//     //     })
//     // }


//     // const handleSubmit = (e) =>{
//     //     e.preventDefault();
//     //     sendRequest().then(()=>history("/editProfile"));
//     // };

//     // const handleChange =(e)=>{
        
//     //     setInput((prevState)=>({
//     //         ...prevState,
//     //         [e.target.name]:e.target.value,
//     //     }))
//     // }
//     console.log(input);
//     const navigate = useNavigate();

//     // function onDelete (id) {
//     //     axios.delete(`http://localhost:8090/User/delete/${id}`).then((res)=>{
//     //         Swal.fire({
//     //             title: 'Are you sure ?',
//     //             text: "You won't be able to revert this!",
//     //             icon: 'warning',
//     //             showCancelButton: true,
//     //             confirmButtonColor: '#3085d6',
//     //             cancelButtonColor: '#d33',
//     //             confirmButtonText: 'Yes, delete it!'
//     //           }).then((result) => {
//     //             if (result.isConfirmed) {
//     //               Swal.fire(
//     //                 'Deleted!',
//     //                 'Your Profile has been deleted.',
//     //                 navigate('/')
            
//     //               )
//     //             }
//     //           })
           
            
//     //         this.useEffect();

           
//     //     });
//     // };

//   return (
//     <div>
//         <Header/>

//         <div className='editproArea'>

//             <div className='proimg'>

//             </div>
//             <center><label for="formFileSm" class="form-label edtprotitle">Upload Your Profile Image</label></center>
//             <input class="form-control form-control-sm uploadimg" id="formFileSm" type="file" />

//             <div className='name'>
//                 <div class="row align-items-center pt-4 pb-3">
//                 <div class="col-md-3 ps-5">

//                     <h6 class="mb-0">First name</h6>

//                 </div>
//                 <div class="col-md-9 pe-5">

//                     <input value={input.firstName}  name="firstName" class="form-control form-control-lg"></input>

//                 </div>
//                 </div>
//             </div>

//             <div className='name'>
//                 <div class="row align-items-center pt-4 pb-3">
//                 <div class="col-md-3 ps-5">

//                     <h6 class="mb-0">Last name</h6>

//                 </div>
//                 <div class="col-md-9 pe-5">

//                     <input value={input.lastName}  name="lastName" class="form-control form-control-lg"></input>

//                 </div>
//                 </div>
//             </div>
            
//             <div className='name'>
//                 <div class="row align-items-center pt-4 pb-3">
//                 <div class="col-md-3 ps-5">

//                     <h6 class="mb-0">Mobile Number</h6>

//                 </div>
//                 <div class="col-md-9 pe-5">

//                     <input value={input.mobileNumber}  name="mobileNumber" class="form-control form-control-lg"></input>

//                 </div>
//                 </div>
//             </div>

//             <div className='name'>
//                 <div class="row align-items-center pt-4 pb-3">
//                 <div class="col-md-3 ps-5">

//                     <h6 class="mb-0">Field</h6>

//                 </div>
//                 <div class="col-md-9 pe-5">

//                     <input value={input.field} readOnly name="field" class="form-control form-control-lg"></input>

//                 </div>
//                 </div>
//             </div>

            
//             <div className='name'>
//                 <div class="row align-items-center pt-4 pb-3">
//                 <div class="col-md-3 ps-5">

//                     <h6 class="mb-0">Email</h6>

//                 </div>
//                 <div class="col-md-9 pe-5">

//                     <input value={input.email}  name="email" class="form-control form-control-lg"></input>

//                 </div>
//                 </div>
//             </div>

            
//             <div className='name'>
//                 <div class="row align-items-center pt-4 pb-3">
//                 <div class="col-md-3 ps-5">

//                     <h6 class="mb-0">Password</h6>

//                 </div>
//                 <div class="col-md-9 pe-5">

//                     <input value={input.password}  name="password" class="form-control form-control-lg"></input>

//                 </div>
//                 </div>
//             </div>

//             <div class="mt-4 pt-2">
//                 <center><button class="btn btn-primary btn-lg">Edit Profile</button></center>
//                 <center><button class="btn btn-danger btn-lg">Delete</button></center>
//             </div>



//         </div>

//     </div>
//   )
// };
// export default TestProfile;