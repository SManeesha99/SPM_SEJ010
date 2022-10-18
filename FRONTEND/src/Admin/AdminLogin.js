import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import NotRegHeader from '../Header/notRegHeader';
import './loginRegister.css';
import { Link , useNavigate } from 'react-router-dom';


export default function AdminLogin() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // const history = useNavigate();


                
    const login = ()  => {

        const loginAdmin = {email, password};
        

        axios.post(`http://localhost:8090/admin/adminlogin`,loginAdmin).then((res)=>{

            localStorage.setItem("id",res.data.id);

            if(res.data.status){
                swal({
                    title: "Success!",
                    text: "Login Successfull !",
                    icon: 'success',
                    timer: 2000,
                    button: false,
                  });

                //   history("/");

                  setTimeout(()=>{
                    window.location.replace(`http://localhost:3000/adminProfile`)
                  }, 2000)

            }else{
                swal({
                    title: "Warning!",
                    text: "Login Unsuccessfull !",
                    icon: 'error',
                    timer: 2000,
                    button: false,
                  });
            }
      
        });
      
    };


    return (
        <div>
            <div className='registerArea'>
                <NotRegHeader />
                <center>
                    <div className='regArea'>
                        <h2>Admin Login</h2>
                        <div className='regui'>

                            <div className='name'>
                                <label>Email</label>
                                <input class="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Your Email'></input>
                            </div>
                            <div className='name'>
                                <label>Password</label>
                                <input class="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Your Password'></input>
                            </div>
                        </div>

                        <button class='btn btn-primary' onClick={(e)=>login()}>Login</button>

                        <hr/>
                        <p className='bottm'>Already haven't an account? <Link className="nav-link active" aria-current="page" to="/adminProfile">Register</Link></p>

                    </div>
                </center>

            </div>
        </div>
    )
}



// const AdminLogin = () =>{
//     const[data, setData] = useState({
//         email:"",
//         password:"",
//     });

//     const [error, setError]=useState("");

//     const handleSubmit = async(e) =>{
//         e.preventDefault();
//         try{
//             const url = "http://localhost:3000/api/auth";
//             const{data:res} = await axios.post(url, data);
//             localStorage.setItem("token", res.data);
//             window.location = "/"


//         }catch(error){
//             if(
//                 error.response &&
//                 error.response.status >= 400 &&
//                 error.response.status <= 500
//             ){
//                 setError(error.response.data.message);
//             }

//         }
//     };




//     return(
//         <div>
//         <div className='registerArea'>
//             <NotRegHeader/>
//             <center>
//             <div className='regArea'>
//                 <h2>Login Now</h2>
//                 <form onSubmit={handleSubmit}>
//                 <div className='regui'>
                    
//                     <div className='name'>
//                         {/* <label>Email</label> */}
//                         <input class="form-control" placeholder='Enter Your Email' 
//                         onChange={handleSubmit}
//                         value={data.email}
//                         required></input>
//                     </div>
//                     <div className='name'>
//                         {/* <label>Password</label> */}
//                         <input class="form-control" placeholder='Enter Your Password'
//                         onChange={handleSubmit}
//                         value={data.password}
//                         required></input>
//                     </div>
//                 </div>

//                 <button class='btn btn-primary' type='submit'>Login</button>
//                 </form>
//                 <hr/>
//                 <p>Already haven't an account? <Link className="nav-link active" aria-current="page" to="/register">Register</Link></p>


//             </div>
//             </center>

//             </div>
//     </div>

//     )
// };

// export default AdminLogin;