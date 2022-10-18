import Header from "../Admin/AdminHeader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
//import SideNav from "./SideNav";

const AdminDashboard =() =>{
  const [input, setInput]=useState({});
    const id =localStorage.getItem("id");
    console.log(id);
    const history = useNavigate();
    useEffect(()=>{ 
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:8090/admin/get/${id}`)
            .then((res)=> res.data )
            .then((data)=>setInput(data.Admin));
        }
        fetchHandler()
        .then((data)=>setInput(data.Admin));
    },[id])

  //   const sendRequest = async()=>{

  //     await axios.put(`http://localhost:8090/admin/get/${id}`, {

  //         firstName:String(input.firstName),
  //         lastName:String(input.lastName),
  //         email:String(input.email),
  //         password:String(input.password)

  //     }).then(()=>{

  //         swal({
  //             title:"Success",
  //             text: "User Updated Successfull",
  //             icon: 'success',
  //             timer: 2000,
  //             button: false,
  //         });
  //     })
  // }


  //   const handleSubmit = (e) =>{
  //     e.preventDefault();
  //     sendRequest().then(()=>history("/viewProfiles"));
  // };

  // const handleChange =(e)=>{
      
  //     setInput((prevState)=>({
  //         ...prevState,
  //         [e.target.name]:e.target.value,
  //     }))
  // }
  console.log(input);
  


  return(
    <div>
      <div>
        <Header/>
            {/* <SideNav/> */}
        
          <div className="allcoursesviewArea" >
            <div className="page-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-title-box">
                      <div className="row">
                        <div className="col">
                          <h4 className="page-title">Profile</h4>
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Admin</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters-sm mt-3">
                  <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: "450px", marginTop: "100px" }}>
                      <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                          <div className="mt-3">
                              <h4>{input.firstname}{input.lastname}</h4>
                            <p className="text-secondary mb-1">Web Admin</p>
                            <p className="text-muted font-size-sm">Manage Profiles</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-3">

                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card mb-3" style={{ marginLeft: "100px", width: "700px", marginTop: "60px" }}>
                      <div className="card-body" >
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Full Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                           {input.firstname} {input.lastname}
                          </div>
                           
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {input.email}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Trust</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <div className="star-ratings">
                              <div className="fill-ratings" style={{ width: '75%' }}>
                                <span>🟊🟊🟊🟊🟊</span>
                              </div>
                              <div className="empty-ratings">
                                <span>🟊🟊🟊🟊🟊</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Discription</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    
                              </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Project List</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            Software Development
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer text-center text-sm-left">
                © 2022 MULD
              </footer>
            </div>
          </div>
        </div>


      </div>
  );

};
export default AdminDashboard
















// class AdminDashboard extends Component {

//   render() {
//     return (
//       <>
//         <div>
//         <Header/>
//             {/* <SideNav/> */}
        
//           <div className="allcoursesviewArea">
//             <div className="page-content">
//               <div className="container-fluid">
//                 <div className="row">
//                   <div className="col-sm-12">
//                     <div className="page-title-box">
//                       <div className="row">
//                         <div className="col">
//                           <h4 className="page-title">Profile</h4>
//                           <ol className="breadcrumb">
//                             <li className="breadcrumb-item active">Admin</li>
//                           </ol>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row gutters-sm mt-3">
//                   <div className="col-md-4 mb-3">
//                     <div className="card" style={{ width: "450px", marginTop: "100px" }}>
//                       <div className="card-body">
//                         <div className="d-flex flex-column align-items-center text-center">
//                           <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
//                           <div className="mt-3">
//                             <h4>Maneesha Fernando</h4>
//                             <p className="text-secondary mb-1">Web Admin</p>
//                             <p className="text-muted font-size-sm">Manage Profiles</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="card mt-3">

//                     </div>
//                   </div>
//                   <div className="col-md-8">
//                     <div className="card mb-3" style={{ marginLeft: "100px", width: "700px", marginTop: "60px" }}>
//                       <div className="card-body" >
//                         <div className="row">
//                           <div className="col-sm-3">
//                             <h6 className="mb-0">Full Name</h6>
//                           </div>
//                           <div className="col-sm-9 text-secondary">
//                            Maneesha Fernando
//                           </div>
//                         </div>
//                         <hr />
//                         <div className="row">
//                           <div className="col-sm-3">
//                             <h6 className="mb-0">Email</h6>
//                           </div>
//                           <div className="col-sm-9 text-secondary">
//                             admin1@gmail.com
//                           </div>
//                         </div>
//                         <hr />
//                         <div className="row">
//                           <div className="col-sm-3">
//                             <h6 className="mb-0">Trust</h6>
//                           </div>
//                           <div className="col-sm-9 text-secondary">
//                             <div className="star-ratings">
//                               <div className="fill-ratings" style={{ width: '75%' }}>
//                                 <span>🟊🟊🟊🟊🟊</span>
//                               </div>
//                               <div className="empty-ratings">
//                                 <span>🟊🟊🟊🟊🟊</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <hr />
//                         <div className="row">
//                           <div className="col-sm-3">
//                             <h6 className="mb-0">Discription</h6>
//                           </div>
//                           <div className="col-sm-9 text-secondary">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    
//                               </div>
//                         </div>
//                         <hr />
//                         <div className="row">
//                           <div className="col-sm-3">
//                             <h6 className="mb-0">Project List</h6>
//                           </div>
//                           <div className="col-sm-9 text-secondary">
//                             Software Development
//                           </div>
//                         </div>
//                         <hr />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <footer className="footer text-center text-sm-left">
//                 © 2022 MULD
//               </footer>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default AdminDashboard;